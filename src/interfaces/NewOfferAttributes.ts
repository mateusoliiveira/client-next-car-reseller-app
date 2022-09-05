import { Brand } from "./Brand"
import { Offer, PostedOffer } from "./Offer"

export interface NewOfferAttributes {
	brands: Brand[]
	categories: Offer[]
	token: string
}

export interface EditOfferAttributes {
	offer: PostedOffer
	brands: Brand[]
	categories: Offer[]
	token: string
}
