
import { IPageAccountAttributes, IPageAccountOffersAttributes, IPageEditOfferAttributes, IPageIndexAttributes, IPageNewOfferAttributes, IPageOfferAttributes, IPageSearchOffersAttributes } from "./Pages";

type SubmitOfferSteps = {
	first: JSX.Element;
	second: JSX.Element;
	third: JSX.Element;
	fourth: JSX.Element;
};
export type StepsOffer = keyof SubmitOfferSteps;

type StepsAlreadyDone = {
	greenIfBrandModelCategoryIsFilled: string;
	greenIfTitleDescriptionPriceIsFilled: string;
	greenIfContactZipCodeIsFilled: string;
};
export type StepsOfferDone = keyof StepsAlreadyDone;


export interface IPageAttributes {
	token: string;
}

export interface ISectionAccountAttributes extends IPageAccountAttributes {
	cameAfter?: string
}

export interface ISectionAccountOffersAttributes extends IPageAccountOffersAttributes {
}

export interface ISectionNewOfferAttributes extends IPageNewOfferAttributes {
}

export interface ISectionEditOfferAttributes extends IPageEditOfferAttributes {
}

export interface ISectionIndexAttributes extends IPageIndexAttributes {
}

export interface ISectionOfferAttributes extends IPageOfferAttributes {
}

export interface ISectionSearchOfferAttributes extends IPageSearchOffersAttributes {
}
