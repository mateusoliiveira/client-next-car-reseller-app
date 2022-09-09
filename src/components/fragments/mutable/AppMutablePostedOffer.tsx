import { Badge, Button } from "flowbite-react";
import { IOfferData } from "../../../../src/interfaces/Offer";
import { formatDate, formatToBRL, formatZipCode } from "../../../../src/_utils";
import { TbEngine } from "react-icons/tb";
import { GiCarDoor } from "react-icons/gi";
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebook, FaTwitter } from "react-icons/fa";

const AppMutablePostedOffer = ({ offer }: { offer: IOfferData }) => {
	return (
		<section className="text-gray-600 body-font overflow-hidden">
			<div className="container px-5 py-24 mx-auto">
				<div className="lg:w-4/5 mx-auto flex flex-wrap">
					<img
						alt="ecommerce"
						className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
						src={`${offer.picture}`}
					/>
					<div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
						<h2 className="text-sm title-font text-gray-300 tracking-widest">
							{offer.title}
						</h2>
						<h3 className="text-xs title-font text-gray-500 tracking-widest mb-3">
							{`publicado há ${formatDate(offer.created_at)}, em ${new Date(
								offer.created_at
							).toLocaleDateString()}`}
						</h3>

						<div className="bg-gray-800 p-3 rounded-lg mb-5">
							<h1 className="text-gray-200 text-3xl title-font font-medium mb-1">
								{offer.vehicles.name}
							</h1>
							<div className="flex mb-4">
								<div className="flex items-center gap-3">
									<div className="text-gray-600 flex gap-2">
										<div className="w-6 h-6 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500">
											<GiCarDoor />
										</div>
										{offer.vehicles.doors}
									</div>
									<div className="text-gray-600 flex gap-2">
										<div className="w-6 h-6 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500">
											<TbEngine />
										</div>
										{Number(offer.vehicles.liters).toFixed(1)}|
										{offer.vehicles.cylinders} cil.|
										{offer.vehicles.horsepower || "n/a "} cv
									</div>
								</div>
								<div className="flex ml-3 gap-2 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
									<a className="text-gray-500">
										<FaFacebook />
									</a>
									<a className="text-gray-500">
										<FaTwitter />
									</a>
								</div>
							</div>
							<h3>o que o dono disse:</h3>
							<p className="leading-relaxed text-blue-300 mb-2">
								{offer.description}
							</p>
						</div>
						<div className="flex flex-wrap gap-2">
							<Badge color="info" size="sm">
								{`localizado em ${formatZipCode(offer.zip_code)}`}
							</Badge>
						</div>
						<div className="flex mt-4	 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
						<div className="flex">
							<span className="title-font text-2xl font-extrabold text-gray-200">
								{formatToBRL(offer.price)}
							</span>
							<a
								href={`https://api.whatsapp.com/send?phone=55${offer.contact}&text=Gostaria%20de%20saber%20mais%20sobre%20seu/sua%20${offer.vehicles.name}%20a%20venda.%20Podemos%20conversar?`}
								className="ml-auto"
							>
								<button className="flex ml-auto bg-white border-0 py-2 px-8 focus:outline-none hover:scale-105 transition-all rounded">
									<BsWhatsapp />
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AppMutablePostedOffer;
