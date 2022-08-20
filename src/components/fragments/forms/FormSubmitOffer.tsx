import { useRouter } from "next/router";
import React, { ChangeEvent, useState, ReactElement } from "react";
import { ApiClient } from "../../../_services";
import { Brand } from "../../../interfaces/Brand";
import { Category } from "../../../interfaces/Category";
import { Offer } from "../../../interfaces/Offer";
import { Vehicle } from "../../../interfaces/Vehicle";
import AppMutableAlert from "../mutable/AppMutableAlert";
import AppStaticTab from "../inert/AppStaticTab";
import AppStaticInput from "../inert/AppStaticInput";
import {
	submitOfferButtonNextStage,
	submitOfferButtonSubmit,
	submitOfferFindBrandInput,
	submitOfferFindVehicleInput,
	submitOfferInputSecondStageDescription,
	submitOfferInputSecondStagePrice,
	submitOfferInputSecondStageTitle,
	submitOfferInputThirdStagePhone,
	submitOfferInputThirdStageZipCode,
	submitOfferSelectVehicleCategory,
} from "./FormSubmitOfferComponents";
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
	cleanOffer,
	formatToBRL,
} from "../../../_utils";

type Steps = {
	first: JSX.Element;
	second: JSX.Element;
	third: JSX.Element;
	fourth: JSX.Element;
};
type Stp = keyof Steps;

const FormSubmitOffer = ({ categories, brands, token }: any) => {
	const navigate = useRouter();
	const [requisitionResult, setRequisitionResult] = useState<any>(undefined);
	const [brandsList, setBrandsList] = useState<Brand[]>(
		brands.filter(
			(b: any) =>
				b.name === "BMW" || b.name === "Mercedes" || b.name === "Volkswagen"
		)
	);
	const [vehiclesList, setVehiclesList] = useState<any[]>([]);
	const [keywordBrand, setKeywordBrand] = useState<string>("");
	const [keywordVehicle, setKeywordVehicle] = useState<string>("");
	const [actualStep, setActualStep] = useState<Stp>("first");
	const [pictureUrl, setPictureUrl] = useState<string>("");
	const [offer, setOffer] = useState<Offer>(cleanOffer());

	const handlePublish = async () => {
		setRequisitionResult(undefined);
		console.log(offer);
		try {
			await ApiClient.post(
				"/offers",
				{ ...offer, picture: pictureUrl },
				{
					headers: {
						Authorization: `Bearer ${token}`,
						ContentType: "application/json",
						Accept: "application/json",
					},
				}
			);
			navigate.push("/conta?after=createOffer");
		} catch (error: any) {
			setRequisitionResult({
				messages: Object.values(error.response.data.errors).flat(2),
				status: error.response.status,
			});
		}
	};

	return (
		<div className="m-auto">
			<div className="m-auto">
				<AppMutableAlert
					messages={requisitionResult?.messages}
					status={requisitionResult?.status}
				/>
			</div>
			<div className="font-bold text-white">
				<div className="lg:flex m-auto lg:w-1/2 px-3 lg:px-0 justify-evenly gap-x-5">
					<div className="lg:w-2/3 mx-5 py-5">
						<AppStaticSubmitOfferPath
							offer={offer}
							stepToCheck={"greenIfBrandModelCategoryIsFilled"}
							nextStep={() => setActualStep("first")}
							info={{
								header: "Marca, modelo e categoria",
								description: "Busque o modelo correspondente ao seu carro.",
							}}
							icon={<FaCar className="text-gray-600 drop-shadow" />}
						/>
						<AppStaticSubmitOfferPath
							offer={offer}
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
							offer={offer}
							stepToCheck={"greenIfContactZipCodeIsFilled"}
							nextStep={() => setActualStep("third")}
							info={{
								header: "Dados para contato e local",
								description: "Onde está o carro e como entrar em contato?",
							}}
							icon={<FaMap className="text-gray-600 drop-shadow" />}
						/>
						<AppStaticSubmitOfferPath
							offer={offer}
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
													{...submitOfferFindBrandInput}
													onChange={(e: ChangeEvent<HTMLInputElement>) =>
														setKeywordBrand(e.target.value)
													}
												/>
												<div className="h-40 overflow-auto mt-2">
													{brandsList &&
														brandsFiltered(keywordBrand, brandsList)?.map(
															(brand: Brand) => {
																return (
																	<div
																		className={`${
																			offer.brand_id === brand.id
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
													{...submitOfferFindVehicleInput}
													onChange={(e: ChangeEvent<HTMLInputElement>) =>
														setKeywordVehicle(e.target.value)
													}
												/>
												<div className="h-40 overflow-auto mt-2">
													{vehiclesList &&
														carsFiltered(keywordVehicle, vehiclesList)?.map(
															(vehicle: Vehicle) => {
																return (
																	<div
																		className={`${
																			offer.vehicle_id === vehicle.id
																				? "border border-purple-600 rounded"
																				: ""
																		}`}
																		key={vehicle.id}
																		onClick={() =>
																			setOffer({
																				...offer,
																				brand_id: vehicle.brand_id,
																				category_id: vehicle.category_id,
																				vehicle_id:
																					vehicle.id === offer.vehicle_id
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
										{...submitOfferSelectVehicleCategory}
										value={offer.category_id}
										onChange={(e: ChangeEvent<HTMLSelectElement>) =>
											setOffer({ ...offer, category_id: e.target.value })
										}
									>
										<option disabled key={0}>
											selecione a categoria do seu auto
										</option>
										{categories?.map((category: Category): ReactElement => {
											return (
												<option value={category.id} key={category.id}>
													{category.name}
												</option>
											);
										})}
									</AppStaticSelect>
								</div>
								<AppStaticButton
									{...submitOfferButtonNextStage}
									onClick={() => setActualStep("second")}
								/>
							</div>
						</AppStaticTab>
					</div>
					<div className={`w-full ${actualStep === "second" ? "" : "hidden"}`}>
						<AppStaticTab>
							<AppStaticInput
								{...submitOfferInputSecondStageTitle}
								value={offer.title}
								onChange={(e: ChangeEvent<HTMLInputElement>) =>
									setOffer({ ...offer, title: e.target.value })
								}
							/>
							<AppStaticInput
								{...submitOfferInputSecondStageDescription}
								value={offer.description}
								onChange={(e: ChangeEvent<HTMLInputElement>) =>
									setOffer({ ...offer, description: e.target.value })
								}
							/>

							<>
								<AppStaticInput
									{...submitOfferInputSecondStagePrice}
									value={offer.price}
									onChange={(e: ChangeEvent<HTMLInputElement>) => {
										setOffer({ ...offer, price: e.target.value });
									}}
								/>
								<p className="border-b-2 text-center text-white mb-5 rounded">
									{formatToBRL(offer.price)}
								</p>
							</>
							<AppStaticButton
								{...submitOfferButtonNextStage}
								onClick={() => setActualStep("third")}
							/>
						</AppStaticTab>
					</div>
					<div className={`w-full ${actualStep === "third" ? "" : "hidden"}`}>
						<AppStaticTab>
							<AppStaticInput
								{...submitOfferInputThirdStagePhone}
								value={offer.contact}
								onChange={(e: ChangeEvent<HTMLInputElement>) =>
									setOffer({ ...offer, contact: e.target.value })
								}
							/>

							<AppStaticInput
								{...submitOfferInputThirdStageZipCode}
								value={offer.zip_code}
								onChange={(e: ChangeEvent<HTMLInputElement>) =>
									setOffer({ ...offer, zip_code: e.target.value })
								}
							/>

							<AppStaticButton
								{...submitOfferButtonNextStage}
								onClick={() => setActualStep("fourth")}
							/>
						</AppStaticTab>
					</div>
					<div className={`w-full ${actualStep === "fourth" ? "" : "hidden"}`}>
						<AppStaticTab>
							<div className="flex flex-col gap-5 m-auto">
								{checkIfAreAllFilled(offer) ? (
									<div className="mb-2">
										<AppStaticPhotoUploader
											onSuccess={(url: string) => setPictureUrl(url)}
										/>

										{pictureUrl ? (
											<AppStaticButton
												{...submitOfferButtonSubmit}
												onClick={() => handlePublish()}
											/>
										) : (
											""
										)}
									</div>
								) : (
									<AppStaticSubmitOfferMissingFill />
								)}
							</div>
						</AppStaticTab>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FormSubmitOffer;
