import React, { ReactElement } from "react";
import { IOfferData } from "../../../../src/interfaces/Offer";
import { StepsOfferDone } from "../../../interfaces/Sections";

const AppStaticSubmitOfferPath = ({
	stepToCheck,
	offer,
	info,
	icon,
	last = false,
	nextStep,
}: {
	stepToCheck: StepsOfferDone;
	offer: IOfferData;
	info: {
		header: string;
		description: string;
	};
	icon: ReactElement;
	last?: boolean;
	nextStep: () => void;
}): ReactElement => {
	const handleStepAlreadyDone = (stepToCheck: StepsOfferDone) => {
		const checkFill = (inputs: unknown[]): string => {
			return inputs.every((input) => input) ? "bg-green-400" : "bg-gray-200";
		};
		const alreadyDone = {
			greenIfBrandModelCategoryIsFilled: checkFill([
				offer.brand_id && offer.category_id && offer.vehicle_id,
			]),
			greenIfTitleDescriptionPriceIsFilled: checkFill([
				offer.title && offer.description && offer.price,
			]),
			greenIfContactZipCodeIsFilled: checkFill([
				offer.contact && offer.zip_code,
			]),
		};
		return alreadyDone[stepToCheck] ?? "bg-gray-200";
	};

	return (
		<div className="flex relative pb-16">
			<div className="h-full w-10 absolute inset-0 flex items-center justify-center">
				<div
					className={`${!!last || "h-full"} w-1 ${handleStepAlreadyDone(
						stepToCheck
					)} pointer-events-none`}
				></div>
			</div>
			<div
				className={`flex-shrink-0 w-10 h-10 rounded-full ${handleStepAlreadyDone(
					stepToCheck
				)}  inline-flex items-center justify-center text-black relative z-10`}
			>
				{icon}
			</div>
			<div
				className="flex-grow pl-4 cursor-pointer hover:ml-1 transition-all"
				onClick={nextStep}
			>
				<h2 className="title-font text-sm text-gray-300 mb-1 font-extrabold tracking-wider">
					{info.header}
				</h2>
				<p className="leading-relaxed text-xs">{info.description}</p>
			</div>
		</div>
	);
};

export default AppStaticSubmitOfferPath;
