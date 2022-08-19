import { GetServerSideProps, NextPage } from "next";
import { ApiClient } from "../../../../src/_services";
import SectionOffer from "../../../components/sections/SectionOffer";
import { PostedOffer } from "../../../../src/interfaces/Offer";

const OfferPage: NextPage<{ offer: PostedOffer }> = ({
	offer,
}: {
	offer: PostedOffer;
}) => {
	return <SectionOffer offer={offer} />;
};

export const getServerSideProps: GetServerSideProps = async ({
	query,
	res,
}) => {
	const { data } = await ApiClient.get(`/offers/${query.id}`);
	res.setHeader(
		"Cache-Control",
		"public, s-maxage=30, stale-while-revalidate=180"
	);
	if (!data || !query) {
		return { notFound: true };
	}
	return {
		props: {
			offer: data,
		},
	};
};

export default OfferPage;
