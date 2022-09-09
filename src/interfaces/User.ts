export interface IUser {
	email: string;
	name?: string;
}

export interface IUserLogin extends IUser {
	password: string;
};

export interface IUserRegister extends IUser {
	password: string;
};

export interface IUserData extends IUser {
	id: string;
	updated_at: Date;
	created_at: Date;
}
