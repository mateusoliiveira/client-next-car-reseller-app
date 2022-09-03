import { Tabs } from "flowbite-react";
import React from "react";
import AppMutableUserProfilePage from "./AppMutableUserProfilePage";
import AppMutableUserProfilePostedOffers from "./AppMutableUserProfilePostedOffers";
import { User } from "../../../../src/interfaces/User";
import { PostedOffer } from "../../../../src/interfaces/Offer";
import AppStaticTab from "../inert/AppStaticTab";
import AppMutableUserProfileEdit from "./AppMutableUserProfileEdit";

const AppMutableHeroAccount = ({
	user,
	offers,
}: {
	user: User;
	offers: PostedOffer[];
}) => {
	return (
		<div
			className="lg:px-32 container md:justify-evenly m-auto mt-10 font-bold"
			style={{ color: "#E34C67" }}
		>
			<Tabs.Group aria-label="Tabs with underline" style="underline">
				<Tabs.Item active={true} title="Perfil">
					<AppStaticTab>
						<AppMutableUserProfilePage user={user} />
					</AppStaticTab>
				</Tabs.Item>
				<Tabs.Item title="Editar minha conta">
					<AppStaticTab>
						<AppMutableUserProfileEdit user={user} />
					</AppStaticTab>
				</Tabs.Item>
				<Tabs.Item title="Meus Anúncios (em breve)" disabled={true}>
					<AppStaticTab>
						<AppMutableUserProfilePostedOffers offers={offers} />
					</AppStaticTab>
				</Tabs.Item>
			</Tabs.Group>
		</div>
	);
};

export default AppMutableHeroAccount;
