import { Brand } from "./interfaces/Brand";
import { Offer } from "./interfaces/Offer";
import { Vehicle } from "./interfaces/Vehicle";

export const handleCleanFilter = (value: any) => value ?? undefined

export const cleanFilters = () => {
	return {
		name: undefined,
		doors: undefined,
		liters: undefined,
		cylinders: undefined,
		price_start: undefined,
		price_end: undefined,
		horsepower: undefined,
		is_automatic: undefined,
		year_start: 1900,
		year_end: 2022,
	}
}

export const cleanOffer = () => {
	return {
		brand_id: "",
		category_id: "",
		vehicle_id: "",
		title: "",
		description: "",
		picture: "",
		price: "",
		contact: "",
		zip_code: "",
	}
}

export const checkIfAreAllFilled = (offerToCheck: Offer): boolean => {
	const { picture, ...offerObject } = offerToCheck;
	return Object.values(offerObject).every((v) => v);
};


export const brandsFiltered = (keywordBrand: string, brandsList: Brand[]): Brand[] => {
	if (keywordBrand.trim() !== "") {
		return brandsList.filter((brand: Brand) =>
			brand.name.toLowerCase().includes(keywordBrand.toLowerCase())
		);
	}
	return brandsList;
};

export const carsFiltered = (keywordVehicle: string, vehiclesList: Vehicle[]): Vehicle[] => {
	if (keywordVehicle.trim() !== "") {
		return vehiclesList.filter((vehicle: Vehicle) =>
			vehicle.name.toLowerCase().includes(keywordVehicle.toLowerCase())
		);
	}
	return vehiclesList;
};

export const formatDate = (originalDate: Date) => {
	const date1 = new Date(originalDate)
	const date2 = new Date()
	const diffTime = Math.abs(Number(date2) - Number(date1))
	const finalTime = Number((diffTime / 1000 / 60).toFixed(0))
	if (finalTime < 60) {
		return `${finalTime}m`
	}
	if (finalTime >= 60 && finalTime <= 1440) {
		return `${Math.floor(finalTime / 60).toFixed(0)}h`
	}
	if (finalTime > 1440) {
		return `${(finalTime / 60 / 24).toFixed(0)}d`
	}
}

export const handleFeedbackColor = (status: number): string => {
	const SUCCESS: string = "green-500"
	const FAILURE: string = "red-500"
	const verifyFirstChar = (): string => status.toString().charAt(0)
	const availableColors: { [x: string]: string } = {
		"2": SUCCESS,
		"4": FAILURE,
	}
	return availableColors[verifyFirstChar()] ?? "yellow-500"
}

export function cpfMask(value: string) {
	return (
		value &&
		value
			.replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
			.replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
			.replace(/(\d{3})(\d)/, '$1.$2')
			.replace(/(\d{3})(\d{1,2})/, '$1-$2')
			.replace(/(-\d{2})\d+?$/, '$1')
	) // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
}

export function dateMask(date: any) {
	let maskedDate = date.replace(/\D/g, '').slice(0, 10)
	if (maskedDate.length >= 5) {
		return `${maskedDate.slice(0, 2)}/${maskedDate.slice(2, 4)}/${maskedDate.slice(4)}`
	} else if (maskedDate.length >= 3) {
		return `${maskedDate.slice(0, 2)}/${maskedDate.slice(2)}`
	}
	return maskedDate
}

export function parseSubmitOfferErrorFields(reqResErr: any) {
	return Object.values(
		reqResErr?.errors
	)
		.map((err: any) => err.map((err: string) => err.split(" ")[2]))
		.join(", ")
}

export function formatZipCode(zipCode: any) {
	zipCode = zipCode.replace(/\D/g, "")
	zipCode = zipCode.replace(/^(\d{5})(\d)/, "$1-$2")
	if (zipCode.length >= 10) {
		zipCode = zipCode.slice(0, 9)
	}
	return zipCode
}

export function formatToBRL(value: string | number): string {
	return value ? Number(value).toLocaleString("pt-br", {
		style: "currency",
		currency: "BRL",
	}) : 'Não disponível'
}

export function formatToOnlyDigits(value: any) {
	return value && value.replace(/[^0-9]+/g, '')
}

export function formatPhone(number: string) {
	if (!number) return 'Não disponível'

	number = number.replace(/[^0-9]+/g, '')
	if (number.length > 2) {
		number = '(' + number.substring(0, 2) + ') ' + number.substring(2)
	}
	if (number.length > 6) {
		number = number.substring(0, 6) + ' ' + number.substring(6)
	}
	if (number.length > 11) {
		number = number.substring(0, 11) + '-' + number.substring(11, 15)
	} //(XX) X XXXX-XXXX

	return number
}

export function formatDateString(date: any) {
	const date_arr = date.split('/')

	const dd = date_arr[0]
	const mm = date_arr[1]
	const yyyy = date_arr[2]

	return yyyy + '-' + mm + '-' + dd
}

const INITIAL_PERCENTAGE_TO_HIDE: number = 8
const FINAL_PERCENTAGE_TO_HIDE: number = 1.2

export function hideEmail(email: string) {
	const emailSplitted: string[] = email.split('@')
	return [[...emailSplitted[0]].map((c: string, i: number): string =>
		i >= email.length / INITIAL_PERCENTAGE_TO_HIDE &&
			i <= email.length / FINAL_PERCENTAGE_TO_HIDE
			? `${(i !== emailSplitted[0].length - 1 ? '*' : '*@')}`
			: c
	), ...emailSplitted[1]]
}

export function hideData(data: string) {
	return [...data].map((c, i) =>
		i >= data.length / INITIAL_PERCENTAGE_TO_HIDE &&
			i <= data.length / FINAL_PERCENTAGE_TO_HIDE
			? "*"
			: c
	)
}

const startCeps: any = [
	{ AC: [699, 699] },
	{ AL: [570, 579] },
	{ AM: [690, 692] },
	{ AM2: [694, 698] },
	{ AP: [689, 689] },
	{ BA: [400, 489] },
	{ CE: [600, 639] },
	{ DF: [700, 727] },
	{ DF2: [730, 736] },
	{ ES: [290, 299] },
	{ GO: [728, 729] },
	{ GO2: [737, 767] },
	{ MA: [650, 659] },
	{ MG: [300, 399] },
	{ MS: [790, 799] },
	{ MT: [780, 788] },
	{ PA: [660, 688] },
	{ PB: [580, 589] },
	{ PE: [500, 569] },
	{ PI: [640, 649] },
	{ PR: [800, 879] },
	{ RJ: [200, 289] },
	{ RN: [590, 599] },
	{ RO: [768, 769] },
	{ RR: [693, 693] },
	{ RS: [900, 999] },
	{ SC: [880, 899] },
	{ SE: [490, 499] },
	{ SP: [0o10, 199] },
	{ TO: [770, 779] }
]
const increaserRanger = (diff: any) => {
	let start: number = diff[0]
	let end: number = diff[1]
	let intermediate: number[] = []
	for (start; start < end; start++) {
		intermediate.push(start)
	}
	intermediate.push(end)
	return intermediate

}
let arrayNuns = startCeps.map((data: any) => Object.values(data))
