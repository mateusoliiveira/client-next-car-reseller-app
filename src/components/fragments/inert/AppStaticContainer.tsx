import React, { ReactElement } from "react";
import { IComponentChildren } from "../../../interfaces/Pages";
import AppStaticFooter from "./AppStaticFooter";
import AppStaticMain from "./AppStaticMain";
import AppStaticNavbar from "./AppStaticNavbar";

const AppStaticContainer = ({ children }: IComponentChildren): ReactElement => {
	return (
		<AppStaticMain>
			<AppStaticNavbar />
			<section>
				<div className="mt-5 bg-transparent m-auto text-xs justify-center text-center text-white">
					site criado para fins de estudo sobre desenvolvimento web, todos os
					anúncios são fictícios e as imagens de seus respectivos donos
				</div>
				{children}
			</section>
			<AppStaticFooter />
		</AppStaticMain>
	);
};

export default AppStaticContainer;
