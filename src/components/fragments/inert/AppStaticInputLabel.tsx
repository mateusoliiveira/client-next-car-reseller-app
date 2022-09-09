import React, { ReactElement } from "react";

const AppStaticInputLabel = ({
	id,
	title,
}: {
	id?: string;
	title?: string;
}): ReactElement => {
	return (
		<label htmlFor={id} className="text-red-500 font-extrabold">
			{title}
		</label>
	);
};

export default AppStaticInputLabel;
