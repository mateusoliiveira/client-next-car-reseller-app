export interface IUser {
	email: string;
}

export interface IUserPartial {
	email: string;
	name: string;
}

export interface IUserData extends IUserPartial {
	id: string;
	updated_at: Date;
	created_at: Date;
}

export interface IUserLogin extends IUser {
	password: string;
};

export interface IUserRegister extends IUserPartial {
	password: string;
};

