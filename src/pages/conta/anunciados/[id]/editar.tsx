import { GetServerSideProps, NextPage } from "next";
import { getToken } from "next-auth/jwt";
import { ApiClient } from "../../../../_services";
import SectionEditOffer from "../../../../components/sections/SectionEditOffer";

const OfferEdit: NextPage = ({ offer, brands, categories, token }: any) => {
	return (
		<SectionEditOffer
			offer={offer}
			brands={brands}
			categories={categories}
			token={token}
		/>
	);
};

export const getServerSideProps: GetServerSideProps = async ({
	req,
	res,
	query,
}) => {
	const brands = await ApiClient.get("/brands/vehicles");
	const categories = await ApiClient.get("/categories");
	const offer = await ApiClient.get("/offers/" + query.id);

	console.log(offer);

	const { token }: any = await getToken({ req });
	// res.setHeader(
	// 	"Cache-Control",
	// 	"public, s-maxage=360, stale-while-revalidate=3600"
	// );
	if (!brands || !categories) {
		return { notFound: true };
	}
	return {
		props: {
			offer: offer.data,
			brands: brands.data,
			categories: categories.data,
			token,
		},
	};
};

export default OfferEdit;
