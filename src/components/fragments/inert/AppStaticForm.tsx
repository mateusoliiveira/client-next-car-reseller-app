import React, { ReactElement } from "react";
import { IComponentChildren } from "../../../interfaces/Pages";
const AppStaticForm = ({ children }: IComponentChildren): ReactElement => {
	return (
		<form
			className="flex flex-col gap-4 m-auto w-4/5 lg:w-2/4 py-3"
			onClick={(e) => e.preventDefault()}
		>
			{children}
		</form>
	);
};

export default AppStaticForm;
