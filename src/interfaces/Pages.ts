import { ReactElement } from "react";
import { IBrand, IBrandData } from "./Brand"
import { ICategoryData } from "./Category"
import { IOfferData } from "./Offer"
import { IUserData } from "./User";

export interface IComponentChildren {
	children: ReactElement | ReactElement[]
}

export interface IPageAttributes {
	token: string;
}

export interface IPageIndexAttributes {
	brands: IBrandData[]
	offers: IOfferData[]
}

export interface IPageOfferAttributes {
	offer: IOfferData
}

export interface IPageNewOfferAttributes extends IPageAttributes {
	brands: IBrandData[]
	categories: ICategoryData[]
}

export interface IPageEditOfferAttributes extends IPageAttributes {
	offer: IOfferData
	brands: IBrand[]
	categories: ICategoryData[]
}

export interface IPageSearchOffersAttributes {
	query: string;
	offers: IOfferData[]
}

export interface IPageAccountAttributes {
	user: IUserData
}

export interface IPageAccountOffersAttributes {
	offers: IOfferData[]
}
