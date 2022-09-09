import Image from "next/image";
import Link from "next/link";
import React, { ReactElement, useState } from "react";
import { IoMdSwap } from "react-icons/io";
import { BsTrash } from "react-icons/bs";
import { IOfferData } from "../../../../src/interfaces/Offer";
import { formatToBRL } from "../../../_utils";
import AppStaticLink from "../inert/AppStaticLink";
import { TiDelete, TiEdit } from "react-icons/ti";
import { ApiClient } from "../../../_services";
import { Spinner } from "flowbite-react";

const AppMutableUserProfilePostedOffers = ({
	offers,
}: {
	offers: IOfferData[];
}): ReactElement => {
	const [actualOffers, setActualOffers] = useState<IOfferData[]>(offers);
	const [areYouSure, setAreYouSure] = useState<{
		isLoading: boolean;
		id: string;
	}>({
		isLoading: false,
		id: "",
	});

	const handleDelete = async (id: string) => {
		try {
			setAreYouSure({ id, isLoading: true });
			await ApiClient.delete("/offers/" + id);
			setActualOffers([...offers.filter((o: IOfferData) => o.id !== id)]);
		} catch (error: any) {
			alert("tente novamente mais tarde");
		} finally {
			setAreYouSure({ id: "", isLoading: false });
		}
	};
	return (
		<div className="col">
			<div className="container px-5 mx-auto">
				<div className="flex flex-col mb-10 lg:items-start items-center">
					<div className="flex-grow">
						<div className="flex items-center gap-3">
							<div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
								<IoMdSwap />
							</div>
							<div className="flex-column">
								<div className="flex gap-2">
									<h2 className="text-gray-200 text-lg title-font font-bold mb-3">
										meus anúncios
									</h2>
									{!!areYouSure.isLoading && !!areYouSure.id && (
										<Spinner size="sm" light={true} />
									)}
								</div>
								<div className="row">
									<AppStaticLink href="/conta" title="voltar" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-wrap -m-4">
					{actualOffers?.map((offer: IOfferData, index: number) => {
						return (
							<div className="p-4 lg:w-1/2" key={index}>
								<div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
									<div className="flex-shrink-0 w-80 h-48 object-cover aspect-video object-center sm:mb-0 mb-4 relative cursor-pointer">
										<Link href={`/oferta/${offer.id}`}>
											<Image
												src={offer.picture}
												className="rounded-lg"
												layout="fill"
											/>
										</Link>
									</div>
									<div className="flex-grow sm:pl-8">
										<h2 className="title-font font-medium text-lg text-gray-400">
											{offer.vehicles.name}
										</h2>
										<hr className="my-3" />
										<h3 className="text-gray-200 mb-3 font-bold">
											{offer.title}
										</h3>
										<h3 className="text-gray-400 mb-3">{offer.title}</h3>
										<p className="mb-4 text-gray-600">
											{formatToBRL(offer.price)}
										</p>
										<span className="inline-flex text-2xl gap-3">
											<Link href={`/conta/anunciados/${offer.id}/editar`}>
												<TiEdit className="text-yellow-300 hover:text-yellow-400 cursor-pointer" />
											</Link>
											<div className="flex">
												{areYouSure.id !== offer.id && !areYouSure.isLoading ? (
													<TiDelete
														className="text-red-400 hover:text-red-600 cursor-pointer"
														onClick={() =>
															setAreYouSure({ ...areYouSure, id: offer.id })
														}
													/>
												) : (
													<BsTrash
														className="text-red-600 text-xl ml-0.5 mt-0.5 cursor-pointer hover:scale-110 transition-all"
														onClick={() => handleDelete(offer.id)}
													/>
												)}
											</div>
										</span>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default AppMutableUserProfilePostedOffers;
