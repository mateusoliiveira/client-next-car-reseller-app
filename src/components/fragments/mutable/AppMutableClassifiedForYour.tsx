import Link from "next/link";
import React from "react";
import { formatToBRL } from "../../../../src/_utils";

const AppMutableClassifiedForYour = ({ offers }: any) => {
	return offers?.length > 5 ? (
		<div className="text-gray-600 w-full overflow-hidden">
			<div className="container px-5 py-24 mx-auto flex flex-wrap">
				<div className="flex w-full mb-20 flex-wrap border-b-orange-400">
					<h1 className="sm:text-3xl text-2xl font-semibold text-gray-100 lg:w-1/3 lg:mb-0 mb-4">
						selecionamos esses pra você
					</h1>
					<p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-end">
						os que acabaram de chegar e que ainda não foram vendidos, tá
						esperando o quê?!
					</p>
				</div>
				<div className="flex flex-wrap md:-m-2">
					<div className="flex flex-wrap w-1/2">
						<Link href={`/oferta/${offers.at(-1).id}`}>
							<div className="p-auto w-1/2 relative flex justify-center cursor-pointer items-center hover:scale-[1.01] transition-all">
								<div className="absolute p-0 flex h-full w-full transition ease-in-out hover:bg-gradient-to-t from-[#EF5F67] to-transparent">
									<div
										className="md:flex-1 f-row-col overflow-hidden mb-2 text-xs md:text-md lg:text-2xl font-extrabold text-transparent
                  transition ease-in-out hover:text-white "
										style={{ padding: "7%" }}
									>
										<h3 className="">{offers.at(-1).title}</h3>
										<p className="">{formatToBRL(offers.at(-1).price)}</p>
									</div>
								</div>
								<img
									alt="gallery"
									className="w-full object-cover h-full object-center block"
									src={offers.at(-1).picture}
								/>
							</div>
						</Link>
						<Link href={`/oferta/${offers.at(-2).id}`}>
							<div className="w-1/2 relative flex justify-center cursor-pointer items-center hover:scale-[1.01] transition-all">
								<div className="absolute p-0 flex h-full w-full transition ease-in-out hover:bg-gradient-to-t from-[#EF5F67] to-transparent">
									<div
										className="md:flex-1 f-row-col overflow-hidden mb-2 text-xs md:text-md lg:text-2xl font-extrabold text-transparent
                  transition ease-in-out hover:text-white"
										style={{ padding: "7%" }}
									>
										<h3 className="">{offers.at(-2).title}</h3>
										<p className="">{formatToBRL(offers.at(-2).price)}</p>
									</div>
								</div>
								<img
									alt="gallery"
									className="w-full object-cover h-full object-center block"
									src={offers.at(-2).picture}
								/>
							</div>
						</Link>
						<Link href={`/oferta/${offers.at(-3).id}`}>
							<div className="w-full relative flex justify-center cursor-pointer items-center hover:scale-[1.01] transition-all">
								<div className="absolute p-0 flex h-full w-full transition ease-in-out hover:bg-gradient-to-t from-[#EF5F67] to-transparent">
									<div
										className="md:flex-1 flex-col  overflow-hiddenmb-2 text-xs md:text-md lg:text-2xl font-extrabold text-transparent
                  transition ease-in-out hover:text-white"
										style={{ padding: "7%" }}
									>
										<h3 className="">{offers.at(-3).title}</h3>
										<p className="">{formatToBRL(offers.at(-3).price)}</p>
									</div>
								</div>
								<img
									alt="gallery"
									className="w-full h-full object-cover object-center block"
									src={offers.at(-3).picture}
								/>
							</div>
						</Link>
					</div>
					<div className="flex flex-wrap w-1/2">
						<Link href={`/oferta/${offers.at(-4).id}`}>
							<div className="w-full relative flex justify-center cursor-pointer items-center hover:scale-[1.01] transition-all">
								<div className="absolute p-0 flex h-full w-full transition ease-in-out hover:bg-gradient-to-t from-[#EF5F67] to-transparent">
									<div
										className="md:flex-1 flex-col  overflow-hiddenmb-2 text-xs md:text-md lg:text-2xl font-extrabold text-transparent
                  transition ease-in-out hover:text-white "
										style={{ padding: "7%" }}
									>
										<h3 className="">{offers.at(-4).title}</h3>
										<p className="">{formatToBRL(offers.at(-4).price)}</p>
									</div>
								</div>
								<img
									alt="gallery"
									className="w-full h-full object-cover object-center block"
									src={offers.at(-4).picture}
								/>
							</div>
						</Link>
						<Link href={`/oferta/${offers.at(-5).id}`}>
							<div className="w-1/2 relative flex justify-center cursor-pointer items-center hover:scale-[1.01] transition-all">
								<div className="absolute p-0 flex h-full w-full transition ease-in-out hover:bg-gradient-to-t from-[#EF5F67] to-transparent">
									<div
										className="md:flex-1 flex-col  overflow-hiddenmb-2 text-xs md:text-md lg:text-2xl font-extrabold text-transparent
                  transition ease-in-out hover:text-white"
										style={{ padding: "7%" }}
									>
										<h3 className="">{offers.at(-5).title}</h3>
										<p className="">{formatToBRL(offers.at(-5).price)}</p>
									</div>
								</div>
								<img
									alt="gallery"
									className="w-full object-cover h-full object-center block"
									src={offers.at(-5).picture}
								/>
							</div>
						</Link>
						<Link href={`/oferta/${offers.at(-6).id}`}>
							<div className="w-1/2 relative flex justify-center cursor-pointer items-center hover:scale-[1.01] transition-all">
								<div className="absolute p-0 flex h-full w-full transition ease-in-out hover:bg-gradient-to-t from-[#EF5F67] to-transparent">
									<div
										className="md:flex-1 flex-col  overflow-hiddenmb-2 text-xs md:text-md lg:text-2xl font-extrabold text-transparent
                  transition ease-in-out hover:text-white"
										style={{ padding: "7%" }}
									>
										<h3 className="">{offers.at(-6).title}</h3>
										<p className="">{formatToBRL(offers.at(-6).price)}</p>
									</div>
								</div>
								<img
									alt="gallery"
									className="w-full object-cover h-full object-center block"
									src={offers.at(-6).picture}
								/>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	) : (
		<div></div>
	);
};

export default AppMutableClassifiedForYour;
