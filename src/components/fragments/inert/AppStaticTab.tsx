import React from "react";
import { ComponentChildren } from "../../../interfaces/ComponentChildren";
const AppStaticTab = ({ children }: ComponentChildren) => {
	return <div className="w-full h-screen">{children}</div>;
};

export default AppStaticTab;
