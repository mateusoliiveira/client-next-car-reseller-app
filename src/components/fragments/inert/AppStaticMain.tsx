import React, { ReactElement } from "react";
import { ComponentChildren } from "../../../interfaces/ComponentChildren";
const AppStaticMain = ({ children }: ComponentChildren): ReactElement => {
	return <main className="bg-image w-full globalFont">{children}</main>;
};

export default AppStaticMain;
