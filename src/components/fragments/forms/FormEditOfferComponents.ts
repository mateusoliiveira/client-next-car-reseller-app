export const editOfferFindBrandInput = {
	id: "edit-find-brand",
	type: "text",
	placeholder: "ex: bmw",
	required: false,
	helperText: "buscar marca",
	list: "brands",
	name: "brands",
}
export const editOfferFindVehicleInput = {
	id: "edit-find-vehicle",
	type: "text",
	placeholder: "ex: 320i",
	required: false,
	helperText: "buscar modelo",
	list: "vehicle",
	name: "vehicle",
}

export const editOfferSelectVehicleCategory = {
	id: "edit-categories",
	required: true,
	className: "mt-2",
	title: 'Categoria'
}

export const editOfferMainPropsStages = {
	type: "text",
	required: true,
}

export const editOfferInputSecondStageTitle = {
	...editOfferMainPropsStages,
	title: 'Título do anúncio',
	id: "edit-offer-title",
	helperText: "faça um título criativo, ele será o atrativo para o anúncio",
}

export const editOfferInputSecondStageDescription = {
	...editOfferMainPropsStages,
	title: 'Descrição',
	id: "edit-offer-description",
	helperText: "explicite detalhes sobre as condições do veículo",
}

export const editOfferInputSecondStagePrice = {
	...editOfferMainPropsStages,
	title: 'Valor',
	id: "edit-offer-price",
	placeholder: "25000",
}

export const editOfferInputThirdStagePhone = {
	...editOfferMainPropsStages,
	title: 'Telefone para contato',
	id: "edit-offer-phone",
	placeholder: "1199...",
	helperText: "será por esse número que clientes lhe farão contato",
}

export const editOfferInputThirdStageZipCode = {
	...editOfferMainPropsStages,
	title: 'CEP',
	id: "edit-offer-zip",
	placeholder: "01000200",
	helperText: "onde está o automóvel?",
}

export const editOfferButtonNextStage = {
	id: "edit-next-stage",
	title: 'próximo',
}

export const editOfferButtonSubmit = {
	id: "edit-submit",
	style: { marginTop: 10 },
	title: 'atualizar meu anúncio',
}

