import { GetServerSideProps, NextPage } from "next";
import { ApiClient } from "../_services";
import SectionIndex from "../../src/components/sections/SectionIndex";
import { IPageIndexAttributes } from "../interfaces/Pages";

const Index: NextPage<IPageIndexAttributes> = ({
	brands,
	offers,
}: IPageIndexAttributes) => {
	return <SectionIndex brands={brands} offers={offers} />;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
	const brands = await ApiClient.get("/brands");
	const offers = await ApiClient.get("/offers");
	res.setHeader(
		"Cache-Control",
		"public, s-maxage=30, stale-while-revalidate=300"
	);
	if (!brands || !offers) {
		return { notFound: true };
	}
	return {
		props: {
			brands: brands.data,
			offers: offers.data,
		},
	};
};

export default Index;
