import { NextPage } from "next";
import AppStaticContainer from "../components/fragments/inert/AppStaticContainer";
import AppStaticHero from "../components/fragments/inert/AppStaticHero";

const Custom500: NextPage = () => {
	return (
		<AppStaticContainer>
			<AppStaticHero />
			<div className=" m-auto text-xs justify-center text-center text-white">
				<h1>
					{"Oooops, erro interno aqui com a gente. Desculpe, e já voltamos!"}
				</h1>
			</div>
		</AppStaticContainer>
	);
};

export default Custom500;
