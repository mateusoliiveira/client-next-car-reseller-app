import React from "react";
import { EditOfferAttributes } from "../../interfaces/NewOfferAttributes";
import FormEditOffer from "../fragments/forms/FormEditOffer";
import AppStaticContainer from "../fragments/inert/AppStaticContainer";

const SectionEditOffer = ({
	brands,
	categories,
	token,
	offer,
}: EditOfferAttributes) => {
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
