import { IVehicleData } from "./Vehicle";

export interface IOffer {
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

export interface IOfferData extends IOffer {
	id: string;
	created_at: Date;
	updated_at: Date;
	vehicles: IVehicleData
}
