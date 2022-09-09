import React from "react";
import { ISectionOfferAttributes } from "../../interfaces/Sections";
import AppStaticContainer from "../fragments/inert/AppStaticContainer";
import AppMutablePostedOffer from "../fragments/mutable/AppMutablePostedOffer";

const SectionOffer = ({ offer }: ISectionOfferAttributes) => {
	return (
		<AppStaticContainer>
			<AppMutablePostedOffer offer={offer} />
		</AppStaticContainer>
	);
};

export default SectionOffer;
