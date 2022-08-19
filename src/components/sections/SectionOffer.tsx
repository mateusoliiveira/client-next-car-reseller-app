import React from "react";
import { Offer, PostedOffer } from "../../../src/interfaces/Offer";
import AppStaticContainer from "../fragments/inert/AppStaticContainer";
import AppMutablePostedOffer from "../fragments/mutable/AppMutablePostedOffer";

const SectionOffer = ({ offer }: { offer: PostedOffer }) => {
	return (
		<AppStaticContainer>
			<AppMutablePostedOffer offer={offer} />
		</AppStaticContainer>
	);
};

export default SectionOffer;
