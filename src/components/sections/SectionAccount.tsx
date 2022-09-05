import React from "react";
import { User } from "../../../src/interfaces/User";
import AppStaticContainer from "../fragments/inert/AppStaticContainer";
import AppMutableSuccessOfferCreate from "../fragments/mutable/AppMutableSuccessOfferCreate";
import AppMutableHeroAccount from "../fragments/mutable/AppMutableHeroAccount";
import { PostedOffer } from "../../interfaces/Offer";

const SectionAccount = ({
	cameAfter,
	user,
}: {
	cameAfter?: string;
	user: User;
}) => {
	return (
		<AppStaticContainer>
			<AppMutableSuccessOfferCreate cameAfter={cameAfter} />
			<AppMutableHeroAccount user={user} />
		</AppStaticContainer>
	);
};

export default SectionAccount;
