import React, { ReactElement } from "react";
import { ComponentChildren } from "../../../interfaces/ComponentChildren";
const AppStaticMain = ({ children }: ComponentChildren): ReactElement => {
	return (
		<main className="bg-image min-h-100 min-h-screen globalFont">
			{children}
		</main>
	);
};

export default AppStaticMain;
