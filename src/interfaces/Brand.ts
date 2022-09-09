import { IVehicleData } from './Vehicle'

export interface IBrand {
	name: string;
	picture: string;
}

export interface IBrandData extends IBrand {
	id: string;
	created_at: string;
	updated_at: string;
	vehicles: IVehicleData[];
}
