import React from "react";
import { IndexAttributes } from "../../../src/interfaces/IndexAttributes";
import FormSearch from "../fragments/forms/FormSearch";
import AppStaticContainer from "../fragments/inert/AppStaticContainer";
import AppStaticHero from "../fragments/inert/AppStaticHero";
import AppMutableClassifiedForYour from "../fragments/mutable/AppMutableClassifiedForYour";

const SectionIndex = ({ brands, offers }: IndexAttributes) => {
	return (
		<AppStaticContainer>
			<AppStaticHero />
			<FormSearch brands={brands} />
			<AppMutableClassifiedForYour offers={offers} />
		</AppStaticContainer>
	);
};

export default SectionIndex;
