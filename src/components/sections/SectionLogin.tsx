import { Breadcrumb } from "flowbite-react";
import React from "react";
import FormLogin from "../fragments/forms/FormLogin";
import AppStaticContainer from "../fragments/inert/AppStaticContainer";
import AppStaticHero from "../fragments/inert/AppStaticHero";

const SectionLogin = () => {
	return (
		<AppStaticContainer>
			<AppStaticHero />
			<FormLogin />
		</AppStaticContainer>
	);
};

export default SectionLogin;
