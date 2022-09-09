export interface ICategory {
	name: string;
	picture?: string;
}

export interface ICategoryData extends ICategory {
	id: string;
	name: string;
	picture?: string;
	created_at: string;
	updated_at: string;
}
