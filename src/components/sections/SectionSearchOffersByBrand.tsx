import React, { ReactElement } from "react";
import AppMutableAvailableOffers from "../fragments/mutable/AppMutableAvailableOffers";
import AppStaticContainer from "../fragments/inert/AppStaticContainer";
import { ISectionSearchOfferAttributes } from "../../interfaces/Sections";

const SectionSearchOffersByBrand = ({
	query,
	offers,
}: ISectionSearchOfferAttributes): ReactElement => {
	return (
		<AppStaticContainer>
			<AppMutableAvailableOffers query={query} offers={offers} />
		</AppStaticContainer>
	);
};

export default SectionSearchOffersByBrand;
