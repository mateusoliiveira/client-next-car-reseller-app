import { GetServerSideProps, NextPage } from "next";
import { ReactElement, useEffect, useState } from "react";
import { ApiClient } from "../../../../src/_services";
import { PostedOffer } from "../../../interfaces/Offer";
import SectionAccountOffers from "../../../components/sections/SectionAccountOffers";

const AccountOffers: NextPage<{ offers: PostedOffer[] }> = ({
	offers,
}: {
	offers: PostedOffer[];
}): ReactElement => {
	return <SectionAccountOffers offers={offers} />;
};

export const getServerSideProps: GetServerSideProps = async ({
	req,
	res,
}: any) => {
	const { data } = await ApiClient.get("/offers/my", {
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
			offers: data,
		},
	};
};

export default AccountOffers;
