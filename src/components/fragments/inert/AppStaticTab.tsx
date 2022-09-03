import React from "react";
import { ComponentChildren } from "../../../interfaces/ComponentChildren";
const AppStaticTab = ({ children }: ComponentChildren) => {
	return <div className="w-full h-screen mt-10">{children}</div>;
};

export default AppStaticTab;
