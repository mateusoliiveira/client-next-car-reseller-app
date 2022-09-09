import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import SectionSearchOffersByVehicle from "../../../components/sections/SectionSearchOffersByVehicle";
import { ApiClient } from "../../../../src/_services";
import { IPageSearchOffersAttributes } from "../../../interfaces/Pages";

const SearchVehicle: NextPage<IPageSearchOffersAttributes> = ({
	query,
	offers,
}) => {
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
