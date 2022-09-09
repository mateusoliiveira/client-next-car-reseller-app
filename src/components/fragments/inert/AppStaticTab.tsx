import React from "react";
import { IComponentChildren } from "../../../interfaces/Pages";
const AppStaticTab = ({ children }: IComponentChildren) => {
	return <div className="w-full h-screen mt-10">{children}</div>;
};

export default AppStaticTab;
