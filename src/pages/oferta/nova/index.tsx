import { GetServerSideProps, NextPage } from "next";
import { getToken } from "next-auth/jwt";
import SectionNewOffer from "../../../components/sections/SectionNewOffer";
import { ApiClient } from "../../../../src/_services";

const OfferNew: NextPage = ({ brands, categories, token }: any) => {
	return (
		<SectionNewOffer brands={brands} categories={categories} token={token} />
	);
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
	const brands = await ApiClient.get("/brands/vehicles");
	const categories = await ApiClient.get("/categories");
	const { token }: any = await getToken({ req });
	res.setHeader(
		"Cache-Control",
		"public, s-maxage=360, stale-while-revalidate=3600"
	);
	if (!brands || !categories) {
		return { notFound: true };
	}
	return {
		props: {
			brands: brands.data,
			categories: categories.data,
			token,
		},
	};
};

export default OfferNew;
