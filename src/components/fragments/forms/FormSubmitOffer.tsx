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
		<div className="lg:w-5/6 container md:justify-evenly px-0 lg:px-40 m-auto font-bold">
			<div className="text-gray-600 body-font">
				<div className="container px-5 py-20 pb-24 mx-auto flex flex-wrap">
					<div className="m-auto">
						<AppMutableAlert
							messages={requisitionResult?.messages}
							status={requisitionResult?.status}
						/>
					</div>
					<div className="lg:flex flex-wrap w-full text-blue-600">
						<div className="lg:w-2/5 md:pr-10 md:py-3">
							<div className="flex relative pb-12">
								<AppStaticSubmitOfferPath
									offer={offer}
									stepToCheck={"greenIfBrandModelCategoryIsFilled"}
									nextStep={() => setActualStep("first")}
									info={{
										header: "Marca, modelo e categoria",
										description:
											"Busque o modelo correspondente ao seu carro e em qual categoria seu anúncio se encaixa: sedãs, hatches, etc.",
									}}
									icon={<FaCar className="text-gray-600 drop-shadow" />}
								/>
							</div>
							<div className="flex relative pb-12">
								<AppStaticSubmitOfferPath
									offer={offer}
									stepToCheck={"greenIfTitleDescriptionPriceIsFilled"}
									nextStep={() => setActualStep("second")}
									info={{
										header: "Informações sobre o carro",
										description:
											"O carro está em bom estado? Documento em dia? Há algo a fazer? A hora de dizer isso é agora!",
									}}
									icon={<FaInfo className="text-gray-600 drop-shadow" />}
								/>
							</div>
							<div className="flex relative pb-12">
								<AppStaticSubmitOfferPath
									offer={offer}
									stepToCheck={"greenIfContactZipCodeIsFilled"}
									nextStep={() => setActualStep("third")}
									info={{
										header: "Dados para contato e local",
										description:
											"Informe aqui telefone, com DDD, e o CEP de onde o carro está, para que o comprador lhe contacte",
									}}
									icon={<FaMap className="text-gray-600 drop-shadow" />}
								/>
							</div>
							<div className="flex relative pb-12">
								<div className="h-full w- absolute inset-0 flex items-center justify-center"></div>
								<AppStaticSubmitOfferPath
									offer={offer}
									stepToCheck={"greenIfContactZipCodeIsFilled"}
									nextStep={() => setActualStep("fourth")}
									last={true}
									info={{
										header: "Fotos",
										description:
											"Um anúncio com foto vende até 3x mais rápido do que anúncios sem foto. Capriche nas fotos! 📸🎇",
									}}
									icon={<FaCamera className="text-gray-600 drop-shadow" />}
								/>
							</div>
						</div>
						<div className="flex w-auto lg:w-3/5 object-cover object-center">
							<div className={actualStep === "first" ? "" : "hidden"}>
								<AppStaticTab>
									<div className="flex flex-col w-full gap-5">
										<div className="gap-3 flex w-100">
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
																						<small>{`${
																							vehicle.doors
																						}p | ${Number(
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
							<div className={actualStep === "second" ? "" : "hidden"}>
								<AppStaticTab>
									<div className="flex flex-col gap-5 w-full">
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
										<AppStaticInput
											{...submitOfferInputSecondStagePrice}
											value={offer.price}
											onChange={(e: ChangeEvent<HTMLInputElement>) => {
												setOffer({ ...offer, price: e.target.value });
											}}
										/>
										<AppStaticButton
											{...submitOfferButtonNextStage}
											onClick={() => setActualStep("third")}
										/>
									</div>
								</AppStaticTab>
							</div>
							<div className={actualStep === "third" ? "" : "hidden"}>
								<AppStaticTab>
									<form className="flex flex-col gap-5 m-auto">
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
									</form>
								</AppStaticTab>
							</div>
							<div className={actualStep === "fourth" ? "" : "hidden"}>
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
			</div>
		</div>
	);
};

export default FormSubmitOffer;
