import React from "react";
import AppStaticContainer from "../fragments/inert/AppStaticContainer";
import AppMutableSuccessOfferCreate from "../fragments/mutable/AppMutableSuccessOfferCreate";
import AppMutableHeroAccount from "../fragments/mutable/AppMutableHeroAccount";
import { ISectionAccountAttributes } from "../../interfaces/Sections";

const SectionAccount = ({ cameAfter, user }: ISectionAccountAttributes) => {
	return (
		<AppStaticContainer>
			<AppMutableSuccessOfferCreate cameAfter={cameAfter} />
			<AppMutableHeroAccount user={user} />
		</AppStaticContainer>
	);
};

export default SectionAccount;
