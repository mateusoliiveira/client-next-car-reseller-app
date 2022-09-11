import { Accordion, Select, TextInput } from "flowbite-react";
import React, { useReducer, ReactElement, useEffect, useState } from "react";
import AppMutablePostedOffer from "./AppMutableCardOffer";
import AppStaticScrollCars from "../inert/AppStaticScrollCars";
import { IOfferData } from "../../../interfaces/Offer";
import { cleanFilters, handleCleanFilter } from "../../../_utils";
import { ISectionSearchOfferAttributes } from "../../../interfaces/Sections";
import AppStaticInput from "../inert/AppStaticInput";
import {
	cylindersFilterInput,
	displacementFilterInput,
	doorsVehicleFilterInput,
	endPriceFilterInput,
	endYearFilterInput,
	modelVehicleFilterInput,
	startPriceFilterInput,
	startYearFilterInput,
} from "../forms/FormFilterOffersComponents";
import AppStaticInputLabel from "../inert/AppStaticInputLabel";
import AppStaticOfferNotFound from "../inert/AppStaticOfferNotFound";

const AppMutableAvailableOffers = ({
	query,
	offers,
}: ISectionSearchOfferAttributes): ReactElement => {
	const [availableOffersList, setAvailableOffersList] =
		useState<IOfferData[]>(offers);
	const [changeSort, setChangeSort] = useState<number>(0);
	const [filters, setFilters] = useState<any>({ ...cleanFilters() });
	const [offersListedBy, dispatch] = useReducer(
		reducerShowBy,
		availableOffersList
	);

	function reducerShowBy(offersListedBy: IOfferData[], action: any) {
		setChangeSort(new Date().getTime());
		switch (action.type) {
			case "new":
				return offersListedBy.sort(
					(a: IOfferData, b: IOfferData) =>
						new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
				);
			case "old":
				return offersListedBy.sort(
					(a: IOfferData, b: IOfferData) =>
						new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
				);
			case "cheap":
				return offersListedBy.sort(
					(a: IOfferData, b: IOfferData) => Number(a.price) - Number(b.price)
				);
			case "expensive":
				return offersListedBy.sort(
					(a: IOfferData, b: IOfferData) => Number(b.price) - Number(a.price)
				);
			default:
				return offersListedBy;
		}
	}

	const allOrFiltered = () => {
		let toFilter: IOfferData[] = offersListedBy;

		if (filters.name && filters.name.trim() !== "") {
			toFilter = toFilter.filter((offer: IOfferData) =>
				offer.vehicles.name.toLowerCase().includes(filters.name.toLowerCase())
			);
		}

		if (filters.year_start <= filters.year_end) {
			toFilter = toFilter.filter(
				(offer: IOfferData) =>
					Number(offer.vehicles.year) >= Number(filters.year_start) &&
					Number(offer.vehicles.year) <= Number(filters.year_end)
			);
		}

		if (filters.price_start <= filters.price_end) {
			toFilter = toFilter.filter(
				(offer: IOfferData) =>
					parseFloat(offer.price) > parseFloat(filters.price_start) &&
					parseFloat(offer.price) < parseFloat(filters.price_end)
			);
		}

		if (filters.cylinders && parseInt(filters.cylinders) > 0) {
			toFilter = toFilter.filter(
				(offer: IOfferData) =>
					parseInt(String(offer.vehicles.cylinders)) ===
					parseInt(filters.cylinders)
			);
		}

		if (filters.liters && parseFloat(filters.liters) > 0) {
			toFilter = toFilter.filter(
				(offer: IOfferData) =>
					parseFloat(offer.vehicles.liters) === parseFloat(filters.liters)
			);
		}

		if (filters.doors && Number(filters.doors) > 0) {
			toFilter = toFilter.filter(
				(offer: IOfferData) =>
					Number(offer.vehicles.doors) === Number(filters.doors)
			);
		}

		if (filters.horsepower && Number(filters.horsepower) > 0) {
			toFilter = toFilter.filter(
				(offer: IOfferData) =>
					Number(offer.vehicles.horsepower) > Number(filters.horsepower)
			);
		}

		if (filters.is_automatic) {
			toFilter = toFilter.filter((offer: IOfferData) => {
				if (filters.is_automatic === 1) return !offer.vehicles.is_automatic;
				if (filters.is_automatic === 2) return offer.vehicles.is_automatic;
			});
		}

		return toFilter;
	};

	useEffect(() => {
		allOrFiltered();
	}, [filters, changeSort]);

	return (
		<div className="px-5 lg:flex lg:justify-center gap-5 mt-10">
			<div className="flex-column lg:w-72 mb-6">
				<div className="text-2xl p-3 mb-3 text-gray-50 font-bold bg-gradient-to-r from-red-600 to-orange-200 rounded-lg">
					<p className="text-bold text-sm">filtrando por</p>
					<p>{query}</p>
					<div className="flex-col justify-center text-red-600 font-bold min-w-100">
						<AppStaticInputLabel
							id="select-transmission"
							style="text-white text-sm"
							title={"mostrando por"}
						/>

						<Select
							id="select-transmission"
							onChange={(e) => dispatch({ type: e.target.value })}
						>
							<option className="mx-36" value={"new"}>
								Mais recentes
							</option>
							<option className="mx-36" value={"old"}>
								Mais antigos
							</option>
							<option className="mx-36" value={"cheap"}>
								Menor Preço
							</option>
							<option className="mx-36" value={"expensive"}>
								Maior Preço
							</option>
						</Select>
					</div>
				</div>
				<Accordion>
					<Accordion.Panel>
						<Accordion.Title>Modelo e litragem</Accordion.Title>
						<Accordion.Content>
							<div className="flex-col justify-center gap-4 text-red-600 font-bold">
								<AppStaticInput
									{...modelVehicleFilterInput}
									onChange={(e: any) =>
										setFilters({
											...filters,
											name: e.target.value,
										})
									}
								/>
								<div className="flex row justify-evenly lg:justify-center gap-1">
									<AppStaticInput
										{...doorsVehicleFilterInput}
										onChange={(e: any) =>
											setFilters({
												...filters,
												doors: e.target.value,
											})
										}
									/>
									<AppStaticInput
										{...displacementFilterInput}
										onChange={(e: any) =>
											setFilters({
												...filters,
												liters: e.target.value,
											})
										}
									/>
								</div>
							</div>
						</Accordion.Content>
					</Accordion.Panel>
					<Accordion.Panel>
						<Accordion.Title>Ano</Accordion.Title>
						<Accordion.Content>
							<div className="flex-col justify-center gap-4 text-red-600 font-bold ">
								<div className="flex row justify-evenly lg:justify-center gap-1">
									<AppStaticInput
										{...startYearFilterInput}
										onChange={(e: any) =>
											setFilters({
												...filters,
												year_start: e.target.value,
											})
										}
									/>
									<AppStaticInput
										{...endYearFilterInput}
										onChange={(e: any) =>
											setFilters({
												...filters,
												year_end: e.target.valee,
											})
										}
									/>
								</div>
							</div>
						</Accordion.Content>
					</Accordion.Panel>
					<Accordion.Panel>
						<Accordion.Title>Preço</Accordion.Title>
						<Accordion.Content>
							<div className="flex-col justify-center gap-4 text-red-600 font-bold ">
								<div className="flex row justify-evenly lg:justify-center gap-1">
									<AppStaticInput
										{...startPriceFilterInput}
										onChange={(e: any) =>
											setFilters({
												...filters,
												price_start: e.target.value,
											})
										}
									/>
									<AppStaticInput
										{...endPriceFilterInput}
										onChange={(e: any) =>
											setFilters({
												...filters,
												price_end: e.target.value,
											})
										}
									/>
								</div>
							</div>
						</Accordion.Content>
					</Accordion.Panel>
					<Accordion.Panel>
						<Accordion.Title>Motorização</Accordion.Title>
						<Accordion.Content>
							<div className="flex-col justify-center gap-4 text-red-600 font-bold ">
								<div className="flex row justify-evenly lg:justify-center gap-1">
									<AppStaticInput
										{...cylindersFilterInput}
										onChange={(e: any) =>
											setFilters({
												...filters,
												cylinders: e.target.value,
											})
										}
									/>
								</div>
							</div>
						</Accordion.Content>
					</Accordion.Panel>
					<Accordion.Panel>
						<Accordion.Title>Câmbio</Accordion.Title>
						<Accordion.Content>
							<div className="flex-col justify-center text-red-600 font-bold -mx-1 min-w-100">
								<AppStaticInputLabel
									id="select-transmission"
									title={"transmissão"}
								/>

								<Select
									id="select-transmission"
									onChange={(e: any) =>
										setFilters({
											...filters,
											is_automatic: Number(e.target.value),
										})
									}
								>
									<option className="mx-36" value={0}>
										Todos
									</option>
									<option className="mx-36" value={1}>
										Manual
									</option>
									<option className="mx-36" value={2}>
										Automático
									</option>
								</Select>
							</div>
						</Accordion.Content>
					</Accordion.Panel>
				</Accordion>
			</div>
			<AppStaticScrollCars>
				{(availableOffersList.length > 0 &&
					allOrFiltered().length > 0 &&
					allOrFiltered().map((offer: IOfferData, index: number) => {
						return <AppMutablePostedOffer key={index} offer={offer} />;
					})) || <AppStaticOfferNotFound />}
			</AppStaticScrollCars>
		</div>
	);
};

export default AppMutableAvailableOffers;
