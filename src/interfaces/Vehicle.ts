export interface IVehicle {
	brand_id: string;
	category_id: string;
	is_electric: boolean;
	is_automatic: boolean;
	name: string;
	year: number;
	doors: number;
	liters: string;
	cylinders: number;
	horsepower: number;
}

export interface IVehicleData extends IVehicle {
	id: string;
	created_at: string;
	updated_at: string;
}
