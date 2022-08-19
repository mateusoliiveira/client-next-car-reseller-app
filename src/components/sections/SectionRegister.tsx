import React from "react";
import FormRegister from "../fragments/forms/FormRegister";
import AppStaticContainer from "../fragments/inert/AppStaticContainer";
import AppStaticHero from "../fragments/inert/AppStaticHero";

const SectionRegister = () => {
	return (
		<AppStaticContainer>
			<AppStaticHero />
			<FormRegister />
		</AppStaticContainer>
	);
};

export default SectionRegister;
