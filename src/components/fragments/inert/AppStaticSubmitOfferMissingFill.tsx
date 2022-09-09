import React, { ReactElement } from "react";

const AppStaticSubmitOfferMissingFill = (): ReactElement => {
	return (
		<div>
			<h5 className="p-5">um breve aviso.</h5>
			<p className="border-red-500 border-2 p-5 w-auto rounded-md">
				preencha todos os campos para poder escolher sua imagem, de até 1mb.
			</p>
		</div>
	);
};

export default AppStaticSubmitOfferMissingFill;
