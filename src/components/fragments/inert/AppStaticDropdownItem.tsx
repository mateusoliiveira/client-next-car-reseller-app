import React, { ReactElement } from "react";
import { ComponentChildren } from "../../../interfaces/ComponentChildren";
const AppStaticDropdownItem = ({
	children,
}: ComponentChildren): ReactElement => {
	return (
		<div className="cursor-pointer shadow text-black border-b-2 p-3 text-xs hover:bg-gray-100 transition-all">
			{children}
		</div>
	);
};

export default AppStaticDropdownItem;
