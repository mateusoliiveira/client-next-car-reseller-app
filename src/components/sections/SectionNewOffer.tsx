import React from "react";
import { NewOfferAttributes } from "../../../src/interfaces/NewOfferAttributes";
import FormSubmitOffer from "../fragments/forms/FormSubmitOffer";
import AppStaticContainer from "../fragments/inert/AppStaticContainer";

const SectionNewOffer = ({ brands, categories, token }: NewOfferAttributes) => {
	return (
		<AppStaticContainer>
			<FormSubmitOffer brands={brands} categories={categories} token={token} />
		</AppStaticContainer>
	);
};

export default SectionNewOffer;
