import { PostedOffer } from "./Offer";

export interface SearchOffer {
  query: string;
  offers: PostedOffer[]
}
