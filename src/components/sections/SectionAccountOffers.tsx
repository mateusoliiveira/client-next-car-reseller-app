import React from "react";
import AppStaticContainer from "../fragments/inert/AppStaticContainer";
import { PostedOffer } from "../../interfaces/Offer";
import AppMutableUserProfilePostedOffers from "../fragments/mutable/AppMutableUserProfilePostedOffers";
import AppStaticTab from "../fragments/inert/AppStaticTab";

const SectionAccountOffers = ({ offers }: { offers: PostedOffer[] }) => {
	return (
		<AppStaticContainer>
			<AppStaticTab>
				<AppMutableUserProfilePostedOffers offers={offers} />
			</AppStaticTab>
		</AppStaticContainer>
	);
};

export default SectionAccountOffers;
