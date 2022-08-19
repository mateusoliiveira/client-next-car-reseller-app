import { NextPage } from "next";
import AppStaticContainer from "../components/fragments/inert/AppStaticContainer";
import AppStaticHero from "../components/fragments/inert/AppStaticHero";

const Custom404: NextPage = () => {
	return (
		<AppStaticContainer>
			<AppStaticHero />
			<div className=" m-auto text-xs justify-center text-center text-white">
				<h1>
					{
						"Não encontrado, assim o carrinho aí de cima correrá até o infinito!"
					}
				</h1>
			</div>
		</AppStaticContainer>
	);
};

export default Custom404;
