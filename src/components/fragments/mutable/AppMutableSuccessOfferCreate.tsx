import React, { ReactElement } from "react";
import AppMutableAlert from "./AppMutableAlert";

const AppMutableSuccessOfferAction = ({
	cameAfter,
}: {
	cameAfter?: string;
}): ReactElement => {
	return (
		<div className="mt-10">
			{cameAfter ? (
				<AppMutableAlert message={{ success: { cameAfter } }} />
			) : (
				""
			)}
		</div>
	);
};

export default AppMutableSuccessOfferAction;
