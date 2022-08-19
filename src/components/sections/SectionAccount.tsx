import React from "react";
import { User } from "../../../src/interfaces/User";
import AppStaticContainer from "../fragments/inert/AppStaticContainer";
import AppMutableSuccessOfferCreate from "../fragments/mutable/AppMutableSuccessOfferCreate";
import AppMutableHeroAccount from "../fragments/mutable/AppMutableHeroAccount";

const SectionAccount = ({
	cameAfterCreateOffer,
	user,
}: {
	cameAfterCreateOffer: boolean;
	user: User;
}) => {
	return (
		<AppStaticContainer>
			<AppMutableSuccessOfferCreate
				cameAfterCreateOffer={cameAfterCreateOffer}
			/>
			<AppMutableHeroAccount user={user} offers={[]} />
		</AppStaticContainer>
	);
};

export default SectionAccount;
