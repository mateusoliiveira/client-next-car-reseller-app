import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import SectionSearchOffersByBrand from "../../../components/sections/SectionSearchOffersByBrand";
import { ApiClient } from "../../../../src/_services";
import { IPageSearchOffersAttributes } from "../../../interfaces/Pages";

const SearchBrand: NextPage<IPageSearchOffersAttributes> = ({
	query,
	offers,
}) => {
	return <SectionSearchOffersByBrand query={query} offers={offers} />;
};

export const getServerSideProps: GetServerSideProps = async (
	context: GetServerSidePropsContext
) => {
	const { query, res } = context;
	const { data } = await ApiClient.get(`/offers/by/brand/${query.id}`);
	res.setHeader(
		"Cache-Control",
		"public, s-maxage=30, stale-while-revalidate=180"
	);
	if (!data || !query.id) {
		return { notFound: true };
	}
	return {
		props: {
			offers: data.offers,
			query: data.name,
		},
	};
};

export default SearchBrand;
