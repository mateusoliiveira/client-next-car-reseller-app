import React, { ReactElement } from "react";
import { SearchOffer } from "../../../src/interfaces/SearchOffer";
import AppMutableAvailableOffers from "../fragments/mutable/AppMutableAvailableOffers";
import AppStaticContainer from "../fragments/inert/AppStaticContainer";

const SectionSearchOffersByBrand = ({
	query,
	offers,
}: SearchOffer): ReactElement => {
	return (
		<AppStaticContainer>
			<AppMutableAvailableOffers query={query} offers={offers} />
		</AppStaticContainer>
	);
};

export default SectionSearchOffersByBrand;
