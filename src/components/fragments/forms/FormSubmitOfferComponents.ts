export const submitOfferFindBrandInput = {
	id: "find-brand",
	type: "text",
	placeholder: "ex: bmw",
	required: false,
	helperText: "buscar marca",
	list: "brands",
	name: "brands",
}
export const submitOfferFindVehicleInput = {
	id: "find-vehicle",
	type: "text",
	placeholder: "ex: 320i",
	required: false,
	helperText: "buscar modelo",
	list: "vehicle",
	name: "vehicle",
}

export const submitOfferSelectVehicleCategory = {
	id: "categories",
	required: true,
	className: "mt-2",
	title: 'Categoria'
}

export const submitOfferMainPropsStages = {
	type: "text",
	required: true,
}

export const submitOfferInputSecondStageTitle = {
	...submitOfferMainPropsStages,
	title: 'Título do anúncio',
	id: "offer-title",
	helperText: "faça um título criativo, ele será o atrativo para o anúncio",
}

export const submitOfferInputSecondStageDescription = {
	...submitOfferMainPropsStages,
	title: 'Descrição',
	id: "offer-description",
	helperText: "explicite detalhes sobre as condições do veículo",
}

export const submitOfferInputSecondStagePrice = {
	...submitOfferMainPropsStages,
	title: 'Valor',
	id: "offer-price",
	placeholder: "25000",
}

export const submitOfferInputThirdStagePhone = {
	...submitOfferMainPropsStages,
	title: 'Telefone para contato',
	id: "offer-phone",
	placeholder: "1199...",
	helperText: "será por esse número que clientes lhe farão contato",
}

export const submitOfferInputThirdStageZipCode = {
	...submitOfferMainPropsStages,
	title: 'CEP',
	id: "offer-zip",
	placeholder: "01000200",
	helperText: "onde está o automóvel?",
}

export const submitOfferButtonNextStage = {
	id: "next-stage",
	title: 'próximo',
}

export const submitOfferButtonSubmit = {
	id: "submit",
	style: { marginTop: 10 },
	title: 'enviar meu anúncio',
}

