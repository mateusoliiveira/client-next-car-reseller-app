import React, { ReactElement } from "react";
import AppMutableAlert from "./AppMutableAlert";

const AppMutableSuccessOfferCreate = ({
	cameAfterCreateOffer,
}: {
	cameAfterCreateOffer: boolean;
}): ReactElement => {
	return (
		<div className="mt-10">
			{cameAfterCreateOffer ? (
				<AppMutableAlert
					message={{ success: "Você criou um novo anúncio :) Boa sorte!" }}
				/>
			) : (
				""
			)}
		</div>
	);
};

export default AppMutableSuccessOfferCreate;
