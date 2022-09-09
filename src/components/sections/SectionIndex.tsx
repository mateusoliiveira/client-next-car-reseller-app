import React from "react";
import { ISectionIndexAttributes } from "../../interfaces/Sections";
import FormSearch from "../fragments/forms/FormSearch";
import AppStaticContainer from "../fragments/inert/AppStaticContainer";
import AppStaticHero from "../fragments/inert/AppStaticHero";
import AppMutableClassifiedForYour from "../fragments/mutable/AppMutableClassifiedForYour";

const SectionIndex = ({ brands, offers }: ISectionIndexAttributes) => {
	return (
		<AppStaticContainer>
			<AppStaticHero />
			<FormSearch brands={brands} />
			<AppMutableClassifiedForYour offers={offers} />
		</AppStaticContainer>
	);
};

export default SectionIndex;
