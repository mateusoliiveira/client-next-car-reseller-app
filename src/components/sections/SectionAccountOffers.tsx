import React from "react";
import AppStaticContainer from "../fragments/inert/AppStaticContainer";
import AppMutableUserProfilePostedOffers from "../fragments/mutable/AppMutableUserProfilePostedOffers";
import AppStaticTab from "../fragments/inert/AppStaticTab";
import { ISectionAccountOffersAttributes } from "../../interfaces/Sections";

const SectionAccountOffers = ({ offers }: ISectionAccountOffersAttributes) => {
	return (
		<AppStaticContainer>
			<AppStaticTab>
				<AppMutableUserProfilePostedOffers offers={offers} />
			</AppStaticTab>
		</AppStaticContainer>
	);
};

export default SectionAccountOffers;
