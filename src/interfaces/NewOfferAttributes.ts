import { Brand } from "./Brand"
import { Offer } from "./Offer"

export interface NewOfferAttributes {
  brands: Brand[]
  categories: Offer[]
  token: string
}
