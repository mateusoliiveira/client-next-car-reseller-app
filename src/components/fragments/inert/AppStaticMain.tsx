import React, { ReactElement } from "react";
import { ComponentChildren } from "../../../interfaces/ComponentChildren";
const AppStaticMain = ({ children }: ComponentChildren): ReactElement => {
	return <main className="bg-image w-full globalFont h-100">{children}</main>;
};

export default AppStaticMain;
