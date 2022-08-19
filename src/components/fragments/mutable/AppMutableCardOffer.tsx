import { Badge, Card } from "flowbite-react";
import Link from "next/link";
import React, { ReactElement } from "react";
import { PostedOffer } from "../../../../src/interfaces/Offer";
import { formatToBRL } from "../../../../src/_utils";

const AppMutableCardOffer = ({
	offer,
}: {
	offer: PostedOffer;
}): ReactElement => {
	return (
		<Link href={`/oferta/${offer.id}`}>
			<div className="max-w-sm h-95 hover:animate-[scaleUp_0.5s_ease-in-out_forwards] p-0.5">
				<Card
					imgAlt="Image Car"
					style={{ minHeight: "100%" }}
					imgSrc={offer.picture}
				>
					<h5 className="text-1xl md:text-1xl font-bold tracking-tight text-gray-900 dark:text-white truncate">
						{`${offer.title}`}
					</h5>
					<div className="flex items-center gap-x-2">
						<Badge color="info" className="block">
							<span className="font-extrabold">
								{`${offer.vehicles.year} | ${offer.vehicles.doors}p | ${
									offer.vehicles.is_automatic ? "AT" : "MT"
								} | ${Number(offer.vehicles.liters).toFixed(1)} | ${
									offer.vehicles.cylinders
								} cil.`}
							</span>
						</Badge>
					</div>

					<span className="text-start sm:text-2xl truncate font-extrabold">
						{formatToBRL(offer.price)}
					</span>
				</Card>
			</div>
		</Link>
	);
};

export default AppMutableCardOffer;
