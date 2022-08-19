import { Vehicle } from "./Vehicle";

export interface Offer {
  brand_id: string;
  category_id: string;
  vehicle_id: string;
  title: string;
  description: string;
  picture: any;
  price: string;
  contact: string;
  zip_code: string;
}


export interface PostedOffer extends Offer {
  id: string;
  created_at: Date;
  updated_at: Date;
  vehicles: Vehicle
}
