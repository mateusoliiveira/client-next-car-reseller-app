import React, { ReactElement } from "react";
const AppStaticOfferNotFound = (): ReactElement => {
	return (
		<div className="flex-row justify-between w-96 text-white">
			<p className="text-lg font-bold">não encontrado :(</p>
			<p className="text-gray-400">revise seus filtros e redefina sua busca</p>
		</div>
	);
};

export default AppStaticOfferNotFound;
