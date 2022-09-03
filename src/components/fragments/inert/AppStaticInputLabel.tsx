import React from "react";

const AppStaticInputLabel = ({ id, title }) => {
	return (
		<label htmlFor={id} className="text-red-500 font-extrabold">
			{title}
		</label>
	);
};

export default AppStaticInputLabel;
