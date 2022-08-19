import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import SectionSearchOffersByVehicle from "../../../components/sections/SectionSearchOffersByVehicle";
import { SearchOffer } from "../../../../src/interfaces/SearchOffer";
import { ApiClient } from "../../../../src/_services";

const SearchVehicle: NextPage<SearchOffer> = ({
	query,
	offers,
}: SearchOffer) => {
	return <SectionSearchOffersByVehicle query={query} offers={offers} />;
};

export const getServerSideProps: GetServerSideProps = async (
	context: GetServerSidePropsContext
) => {
	const { query, res } = context;
	const { data } = await ApiClient.get(`/offers/by/vehicle/${query.title}`);
	res.setHeader(
		"Cache-Control",
		"public, s-maxage=30, stale-while-revalidate=180"
	);
	if (!data || !query.title) {
		return { notFound: true };
	}
	return {
		props: {
			offers: data,
			query: query.title,
		},
	};
};

export default SearchVehicle;
