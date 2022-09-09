import { useRouter } from "next/router";
import React, { ChangeEvent, useState, ReactElement } from "react";
import { ApiClient } from "../../../_services";
import { IBrandData } from "../../../interfaces/Brand";
import { ICategoryData } from "../../../interfaces/Category";
import { IOfferData } from "../../../interfaces/Offer";
import { IVehicleData } from "../../../interfaces/Vehicle";
import AppStaticTab from "../inert/AppStaticTab";
import AppStaticInput from "../inert/AppStaticInput";
import {
	editOfferButtonNextStage,
	editOfferButtonSubmit,
	editOfferFindBrandInput,
	editOfferFindVehicleInput,
	editOfferInputSecondStageDescription,
	editOfferInputSecondStagePrice,
	editOfferInputSecondStageTitle,
	editOfferInputThirdStagePhone,
	editOfferInputThirdStageZipCode,
	editOfferSelectVehicleCategory,
} from "./FormEditOfferComponents";
import AppStaticButton from "../inert/AppStaticButton";
import AppStaticSelect from "../inert/AppStaticSelect";
import AppStaticSubmitOfferMissingFill from "../inert/AppStaticSubmitOfferMissingFill";
import AppStaticPhotoUploader from "../inert/AppStaticPhotoUploader";
import AppStaticDropdownItem from "../inert/AppStaticDropdownItem";
import AppStaticSubmitOfferPath from "../inert/AppStaticSubmitOfferPath";
import { FaCamera, FaCar, FaInfo, FaMap } from "react-icons/fa";
import {
	brandsFiltered,
	carsFiltered,
	checkIfAreAllFilled,
	formatToBRL,
	parseSubmitOfferErrorFields,
} from "../../../_utils";
import Image from "next/image";
import { IRequisitionResult } from "../../../interfaces/RequisitionResult";
import { StepsOffer } from "../../../interfaces/Sections";

const FormEditOffer = ({ offer, categories, brands, token }: any) => {
	const navigate = useRouter();
	const [requisitionResult, setRequisitionResult] =
		useState<IRequisitionResult | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [brandsList, setBrandsList] = useState<IBrandData[]>(
		brands.filter(
			(b: IBrandData) =>
				b.name === "BMW" || b.name === "Mercedes" || b.name === "Volkswagen"
		)
	);
	const [vehiclesList, setVehiclesList] = useState<any[]>(
		brands.find((b: IBrandData) => b.id === offer.brand_id).vehicles
	);
	const [keywordBrand, setKeywordBrand] = useState<string>("");
	const [keywordVehicle, setKeywordVehicle] = useState<string>("");
	const [actualStep, setActualStep] = useState<StepsOffer>("first");
	const [pictureUrl, setPictureUrl] = useState<string>(offer.picture);
	const [actualOffer, setActualOffer] = useState<IOfferData>(offer);

	const handleEdit = async () => {
		setRequisitionResult(null);
		setIsLoading(true);
		try {
			await ApiClient.patch("/offers/" + offer.id, {
				...actualOffer,
				picture: pictureUrl || actualOffer.picture,
			});
			navigate.push("/conta?after=refreshedOffer");
		} catch (error: any) {
			setRequisitionResult({ errors: error.response.data.errors });
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="m-auto">
			<div className="font-bold text-white">
				<div className="lg:flex m-auto lg:w-1/2 px-3 lg:px-0 justify-evenly gap-x-5">
					<div className="lg:w-2/3 mt-5 mx-5 py-5">
						<AppStaticSubmitOfferPath
							offer={actualOffer}
							stepToCheck={"greenIfBrandModelCategoryIsFilled"}
							nextStep={() => setActualStep("first")}
							info={{
								header: "Marca, modelo e categoria",
								description: "Busque o modelo correspondente ao seu carro.",
							}}
							icon={<FaCar className="text-gray-600 drop-shadow" />}
						/>
						<AppStaticSubmitOfferPath
							offer={actualOffer}
							stepToCheck={"greenIfTitleDescriptionPriceIsFilled"}
							nextStep={() => setActualStep("second")}
							info={{
								header: "Informações sobre o carro",
								description:
									"Além do preço, crie um título e fale sobre o carro",
							}}
							icon={<FaInfo className="text-gray-600 drop-shadow" />}
						/>
						<AppStaticSubmitOfferPath
							offer={actualOffer}
							stepToCheck={"greenIfContactZipCodeIsFilled"}
							nextStep={() => setActualStep("third")}
							info={{
								header: "Dados para contato e local",
								description: "Onde está o carro e como entrar em contato?",
							}}
							icon={<FaMap className="text-gray-600 drop-shadow" />}
						/>
						<AppStaticSubmitOfferPath
							offer={actualOffer}
							stepToCheck={"greenIfContactZipCodeIsFilled"}
							nextStep={() => setActualStep("fourth")}
							last={true}
							info={{
								header: "Fotos",
								description: "Anúncios com foto vendem até 3x mais rápido 📸🎇",
							}}
							icon={<FaCamera className="text-gray-600 drop-shadow" />}
						/>
					</div>
					<div className={`w-full ${actualStep === "first" ? "" : "hidden"}`}>
						<AppStaticTab>
							<div className="flex flex-col gap-y-5">
								<div className="gap-2 flex">
									<div className="w-1/2">
										<div className="gap-5 bg-white p-2 border mt-2 rounded-lg">
											<div
												style={{
													padding: 3,
												}}
											>
												<AppStaticInput
													{...editOfferFindBrandInput}
													onChange={(e: ChangeEvent<HTMLInputElement>) =>
														setKeywordBrand(e.target.value)
													}
												/>
												<div className="h-40 overflow-auto mt-2">
													{brandsList &&
														brandsFiltered(keywordBrand, brandsList)?.map(
															(brand: any) => {
																return (
																	<div
																		className={`${
																			actualOffer.brand_id === brand.id
																				? "border border-purple-600 rounded"
																				: ""
																		}`}
																		key={brand.id}
																		onClick={() =>
																			setVehiclesList([...brand.vehicles])
																		}
																	>
																		<AppStaticDropdownItem>
																			<>
																				<p className="mb-1">{`${brand.name}`}</p>
																				<hr />
																				<small>{`${brand.vehicles.length} modelos`}</small>
																			</>
																		</AppStaticDropdownItem>
																	</div>
																);
															}
														)}
												</div>
											</div>
										</div>
									</div>
									<div className="w-1/2">
										<div className="gap-5 bg-white p-2 border mt-2 rounded-lg">
											<div
												style={{
													padding: 3,
												}}
											>
												<AppStaticInput
													{...editOfferFindVehicleInput}
													onChange={(e: ChangeEvent<HTMLInputElement>) =>
														setKeywordVehicle(e.target.value)
													}
												/>
												<div className="h-40 overflow-auto mt-2">
													{vehiclesList &&
														carsFiltered(keywordVehicle, vehiclesList)?.map(
															(vehicle: IVehicleData) => {
																return (
																	<div
																		className={`${
																			actualOffer.vehicle_id === vehicle.id
																				? "border border-purple-600 rounded"
																				: ""
																		}`}
																		key={vehicle.id}
																		onClick={() =>
																			setActualOffer({
																				...actualOffer,
																				brand_id: vehicle.brand_id,
																				category_id: vehicle.category_id,
																				vehicle_id:
																					vehicle.id === actualOffer.vehicle_id
																						? ""
																						: vehicle.id,
																			})
																		}
																	>
																		<AppStaticDropdownItem>
																			<>
																				<p className="mb-1">{`${vehicle.name} ${vehicle.year}`}</p>
																				<hr />
																				<small>{`${vehicle.doors}p | ${Number(
																					vehicle.liters
																				).toFixed(1)} ${
																					vehicle.cylinders
																				}cl.`}</small>
																			</>
																		</AppStaticDropdownItem>
																	</div>
																);
															}
														)}
												</div>
											</div>
										</div>
									</div>
								</div>
								<div id="select">
									<AppStaticSelect
										{...editOfferSelectVehicleCategory}
										value={actualOffer.category_id}
										onChange={(e: ChangeEvent<HTMLSelectElement>) =>
											setActualOffer({
												...actualOffer,
												category_id: e.target.value,
											})
										}
									>
										<option disabled key={0}>
											selecione a categoria do seu auto
										</option>
										{categories?.map(
											(category: ICategoryData): ReactElement => {
												return (
													<option value={category.id} key={category.id}>
														{category.name}
													</option>
												);
											}
										)}
									</AppStaticSelect>
								</div>
								<AppStaticButton
									{...editOfferButtonNextStage}
									onClick={() => setActualStep("second")}
								/>
							</div>
						</AppStaticTab>
					</div>
					<div className={`w-full ${actualStep === "second" ? "" : "hidden"}`}>
						<AppStaticTab>
							<AppStaticInput
								validation={requisitionResult?.errors?.title ?? ""}
								{...editOfferInputSecondStageTitle}
								defaultValue={actualOffer.title}
								onChange={(e: ChangeEvent<HTMLInputElement>) =>
									setActualOffer({ ...actualOffer, title: e.target.value })
								}
							/>
							<AppStaticInput
								validation={requisitionResult?.errors?.description ?? ""}
								{...editOfferInputSecondStageDescription}
								defaultValue={actualOffer.description}
								onChange={(e: ChangeEvent<HTMLInputElement>) =>
									setActualOffer({
										...actualOffer,
										description: e.target.value,
									})
								}
							/>

							<>
								<AppStaticInput
									validation={requisitionResult?.errors?.price ?? ""}
									{...editOfferInputSecondStagePrice}
									defaultValue={actualOffer.price}
									onChange={(e: ChangeEvent<HTMLInputElement>) => {
										setActualOffer({ ...actualOffer, price: e.target.value });
									}}
								/>
								<p className="border-b-2 text-center text-white mb-5 rounded">
									{formatToBRL(actualOffer.price)}
								</p>
							</>
							<AppStaticButton
								{...editOfferButtonNextStage}
								onClick={() => setActualStep("third")}
							/>
						</AppStaticTab>
					</div>
					<div className={`w-full ${actualStep === "third" ? "" : "hidden"}`}>
						<AppStaticTab>
							<AppStaticInput
								validation={requisitionResult?.errors?.contact ?? ""}
								{...editOfferInputThirdStagePhone}
								defaultValue={actualOffer.contact}
								onChange={(e: ChangeEvent<HTMLInputElement>) =>
									setActualOffer({ ...actualOffer, contact: e.target.value })
								}
							/>

							<AppStaticInput
								validation={requisitionResult?.errors?.zip_code ?? ""}
								{...editOfferInputThirdStageZipCode}
								defaultValue={actualOffer.zip_code}
								onChange={(e: ChangeEvent<HTMLInputElement>) =>
									setActualOffer({ ...actualOffer, zip_code: e.target.value })
								}
							/>

							<AppStaticButton
								{...editOfferButtonNextStage}
								onClick={() => setActualStep("fourth")}
							/>
						</AppStaticTab>
					</div>
					<div className={`w-full ${actualStep === "fourth" ? "" : "hidden"}`}>
						<AppStaticTab>
							<div>
								<p>imagem atual</p>
								<div className="flex bg-gray-800 justify-center border rounded-md p-2">
									<div className="flex-shrink-0 w-80 h-44 m-auto object-cover object-center sm:mb-0 mb-4 relative">
										<Image
											src={offer.picture}
											className="rounded-lg"
											layout="fill"
										/>
									</div>
								</div>
							</div>
							<div className="mt-3">
								<p>mudar imagem</p>
								{checkIfAreAllFilled(actualOffer) ? (
									<div className="mb-2">
										<AppStaticPhotoUploader
											onSuccess={(url: string) => setPictureUrl(url)}
										/>

										{pictureUrl ? (
											<AppStaticButton
												isLoading={isLoading}
												{...editOfferButtonSubmit}
												onClick={() => handleEdit()}
											/>
										) : (
											<></>
										)}
									</div>
								) : (
									<AppStaticSubmitOfferMissingFill />
								)}
							</div>
							{requisitionResult?.errors ? (
								<p className="border-red-500 border-2 p-5 w-auto rounded-md">
									{`Algo não está completo no(s) campo(s) ${parseSubmitOfferErrorFields(
										requisitionResult
									)}. Confira onde você pode corrigir ao lado.`}
								</p>
							) : (
								<></>
							)}
						</AppStaticTab>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FormEditOffer;
