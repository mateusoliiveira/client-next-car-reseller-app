import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { ReactElement, useEffect, useState } from "react";
import SectionAccount from "../../components/sections/SectionAccount";
import { ApiClient } from "../../../src/_services";
import { IPageAccountAttributes } from "../../interfaces/Pages";

const Account: NextPage<IPageAccountAttributes> = ({ user }): ReactElement => {
	const router = useRouter();
	const [cameAfter, setCameAfter] = useState<{ [x: string]: string }>({
		createOffer: "Publicado. Boa sorte!",
		refreshedOffer: "Anúncio editado",
	});
	const [action, setAction] = useState<string>("");

	useEffect(() => {
		if (router.query.after) setAction(cameAfter[String(router.query.after)]);
	}, []);
	return <SectionAccount cameAfter={action} user={user} />;
};

export const getServerSideProps: GetServerSideProps = async ({
	req,
	res,
}: any) => {
	const { data } = await ApiClient.get("/users", {
		headers: { ...req.headers },
	});
	console.log(data);
	res.setHeader(
		"Cache-Control",
		"public, s-maxage=30, stale-while-revalidate=120"
	);
	if (!data) {
		return { notFound: true };
	}
	return {
		props: {
			user: data.user,
		},
	};
};

export default Account;
