import React from "react";
import { ComponentChildren } from "../../../interfaces/ComponentChildren";
const AppStaticScrollCars = ({ children }: ComponentChildren) => {
	return (
		<div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-h-screen overflow-y-scroll scroll-cars pr-1">
			{children}
		</div>
	);
};

export default AppStaticScrollCars;
