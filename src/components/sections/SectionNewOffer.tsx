import React from "react";
import { ISectionNewOfferAttributes } from "../../interfaces/Sections";
import FormSubmitOffer from "../fragments/forms/FormSubmitOffer";
import AppStaticContainer from "../fragments/inert/AppStaticContainer";

const SectionNewOffer = ({
	brands,
	categories,
	token,
}: ISectionNewOfferAttributes) => {
	return (
		<AppStaticContainer>
			<FormSubmitOffer brands={brands} categories={categories} token={token} />
		</AppStaticContainer>
	);
};

export default SectionNewOffer;
