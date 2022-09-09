import React from "react";
import { ISectionEditOfferAttributes } from "../../interfaces/Sections";
import FormEditOffer from "../fragments/forms/FormEditOffer";
import AppStaticContainer from "../fragments/inert/AppStaticContainer";

const SectionEditOffer = ({
	brands,
	categories,
	token,
	offer,
}: ISectionEditOfferAttributes) => {
	return (
		<AppStaticContainer>
			<FormEditOffer
				offer={offer}
				brands={brands}
				categories={categories}
				token={token}
			/>
		</AppStaticContainer>
	);
};

export default SectionEditOffer;
