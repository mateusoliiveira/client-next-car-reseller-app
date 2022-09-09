import React, { ReactElement } from "react";
import { IComponentChildren } from "../../../interfaces/Pages";
const AppStaticMain = ({ children }: IComponentChildren): ReactElement => {
	return <main className="bg-image w-full globalFont h-100">{children}</main>;
};

export default AppStaticMain;
