import React, { ReactElement } from "react";
import { IComponentChildren } from "../../../interfaces/Pages";
const AppStaticScrollCars = ({
	children,
}: IComponentChildren): ReactElement => {
	return (
		<div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-h-screen overflow-y-scroll scroll-cars pr-1">
			{children}
		</div>
	);
};

export default AppStaticScrollCars;
