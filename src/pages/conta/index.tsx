import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { ReactElement, useEffect, useState } from "react";
import SectionAccount from "../../components/sections/SectionAccount";
import { User } from "../../../src/interfaces/User";
import { ApiClient } from "../../../src/_services";

const Account: NextPage<{ user: User }> = ({
	user,
}: {
	user: User;
}): ReactElement => {
	const router = useRouter();
	const [cameAfterCreateOffer, setCameAfterCreateOffer] =
		useState<boolean>(false);

	useEffect(() => {
		if (router.query.after) setCameAfterCreateOffer(true);
	}, []);
	return (
		<SectionAccount cameAfterCreateOffer={cameAfterCreateOffer} user={user} />
	);
};

export const getServerSideProps: GetServerSideProps = async ({
	req,
	res,
}: any) => {
	const { data } = await ApiClient.get("/users", {
		headers: { ...req.headers },
	});
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
