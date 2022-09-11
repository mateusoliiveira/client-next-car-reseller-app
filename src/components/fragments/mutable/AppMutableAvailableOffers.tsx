import { Accordion, Select, TextInput } from "flowbite-react";
import React, { ChangeEvent, ReactElement, useEffect, useState } from "react";
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

const AppMutableAvailableOffers = ({
	query,
	offers,
}: ISectionSearchOfferAttributes): ReactElement => {
	const [availableOffersList, setAvailableOffersList] =
		useState<IOfferData[]>(offers);
	const [filters, setFilters] = useState<any>({ ...cleanFilters() });

	console.log(filters);

	const allOrFiltered = () => {
		let toFilter: IOfferData[] = availableOffersList;

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
	}, [filters]);

	return (
		<div className="px-5 lg:flex lg:justify-center gap-5 mt-10">
			<div className="flex-column lg:w-72 mb-6">
				<div className="text-2xl p-3 mb-3 text-gray-50 font-bold bg-gradient-to-r from-red-600 to-orange-200 rounded-lg">
					<p className="text-bold text-sm">filtrando por</p>
					{query}
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
					allOrFiltered().map((offer: IOfferData, index: number) => {
						return <AppMutablePostedOffer key={index} offer={offer} />;
					})) || (
					<div className="m-auto px-2 flex align-middle">
						<span className="text-gray-200 font-bold my-10">
							oops, não há veículos com esses parâmetros
						</span>
					</div>
				)}
			</AppStaticScrollCars>
		</div>
	);
};

export default AppMutableAvailableOffers;
