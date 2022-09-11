import React, { ReactElement } from "react";

const AppStaticInputLabel = ({
	id,
	title,
	style,
}: {
	id?: string;
	title?: string;
	style?: string;
}): ReactElement => {
	return (
		<label
			htmlFor={id}
			className={style ? style : "text-red-500 font-extrabold"}
		>
			{title}
		</label>
	);
};

export default AppStaticInputLabel;
