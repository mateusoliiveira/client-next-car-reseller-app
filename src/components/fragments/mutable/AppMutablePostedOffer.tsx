import { Badge, Button } from "flowbite-react";
import { IOfferData } from "../../../../src/interfaces/Offer";
import { formatDate, formatToBRL, formatZipCode } from "../../../../src/_utils";

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
						<h2 className="text-sm title-font text-gray-500 tracking-widest">
							{offer.title}
						</h2>
						<h3 className="text-xs title-font text-gray-500 tracking-widest mb-3">
							{`publicado há ${formatDate(offer.created_at)}, em ${new Date(
								offer.created_at
							).toLocaleDateString()}`}
						</h3>
						<h1 className="text-gray-200 text-3xl title-font font-medium mb-1">
							{offer.vehicles.name}
						</h1>
						<div className="flex mb-4">
							<span className="flex items-center">
								<div className="text-gray-600 flex gap-3 ml-3">
									<img
										className="invert"
										src="https://img.icons8.com/external-icongeek26-outline-icongeek26/23/000000/external-car-door-car-parts-and-service-icongeek26-outline-icongeek26.png"
									/>
									{offer.vehicles.doors}
								</div>
								<div className="text-gray-600 flex gap-3 ml-3">
									<img
										className="invert"
										src="https://img.icons8.com/ios/25/000000/engine.png"
									/>
									{Number(offer.vehicles.liters).toFixed(1)}|
									{offer.vehicles.cylinders} cil.|
									{offer.vehicles.horsepower || "n/a "} cv
								</div>
							</span>
							<div className="flex ml-3 gap-2 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
								<a className="text-gray-500">
									<svg
										fill="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										className="w-5 h-5"
										viewBox="0 0 24 24"
									>
										<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
									</svg>
								</a>
								<a className="text-gray-500">
									<svg
										fill="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										className="w-5 h-5"
										viewBox="0 0 24 24"
									>
										<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
									</svg>
								</a>
								<a className="text-gray-500">
									<svg
										fill="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										className="w-5 h-5"
										viewBox="0 0 24 24"
									>
										<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
									</svg>
								</a>
							</div>
						</div>
						<p className="leading-relaxed text-blue-300 mb-5">
							{offer.description}
						</p>
						<div className="flex flex-wrap gap-2">
							<Badge color="info" size="sm">
								{formatZipCode(offer.zip_code)}
							</Badge>
						</div>
						<div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
						<div className="flex">
							<span className="title-font text-2xl font-extrabold text-gray-200">
								{formatToBRL(offer.price)}
							</span>
							<a
								href={`https://api.whatsapp.com/send?phone=55${offer.contact}&text=Gostaria%20de%20saber%20mais%20sobre%20seu/sua%20${offer.vehicles.name}%20a%20venda.%20Podemos%20conversar?`}
								className="ml-auto"
							>
								<button className="flex ml-auto bg-white border-0 py-2 px-8 focus:outline-none hover:scale-105 transition-all rounded">
									<svg
										fill="#35D24D"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 30 30"
										width="30px"
										height="30px"
										className="drop-shadow-md"
									>
										<path d="M 15 3 C 8.373 3 3 8.373 3 15 C 3 17.251208 3.6323415 19.350068 4.7109375 21.150391 L 3.1074219 27 L 9.0820312 25.431641 C 10.829354 26.425062 12.84649 27 15 27 C 21.627 27 27 21.627 27 15 C 27 8.373 21.627 3 15 3 z M 10.892578 9.4023438 C 11.087578 9.4023438 11.287937 9.4011562 11.460938 9.4101562 C 11.674938 9.4151563 11.907859 9.4308281 12.130859 9.9238281 C 12.395859 10.509828 12.972875 11.979906 13.046875 12.128906 C 13.120875 12.277906 13.173313 12.453437 13.070312 12.648438 C 12.972312 12.848437 12.921344 12.969484 12.777344 13.146484 C 12.628344 13.318484 12.465078 13.532109 12.330078 13.662109 C 12.181078 13.811109 12.027219 13.974484 12.199219 14.271484 C 12.371219 14.568484 12.968563 15.542125 13.851562 16.328125 C 14.986562 17.342125 15.944188 17.653734 16.242188 17.802734 C 16.540187 17.951734 16.712766 17.928516 16.884766 17.728516 C 17.061766 17.533516 17.628125 16.864406 17.828125 16.566406 C 18.023125 16.268406 18.222188 16.319969 18.492188 16.417969 C 18.766188 16.515969 20.227391 17.235766 20.525391 17.384766 C 20.823391 17.533766 21.01875 17.607516 21.09375 17.728516 C 21.17075 17.853516 21.170828 18.448578 20.923828 19.142578 C 20.676828 19.835578 19.463922 20.505734 18.919922 20.552734 C 18.370922 20.603734 17.858562 20.7995 15.351562 19.8125 C 12.327563 18.6215 10.420484 15.524219 10.271484 15.324219 C 10.122484 15.129219 9.0605469 13.713906 9.0605469 12.253906 C 9.0605469 10.788906 9.8286563 10.071437 10.097656 9.7734375 C 10.371656 9.4754375 10.692578 9.4023438 10.892578 9.4023438 z" />
									</svg>
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
