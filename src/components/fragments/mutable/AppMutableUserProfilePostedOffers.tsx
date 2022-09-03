import Image from "next/image";
import React, { ReactElement } from "react";
import { PostedOffer } from "../../../../src/interfaces/Offer";
import { formatDate } from "../../../../src/_utils";

const AppMutableUserProfilePostedOffers = ({
	offers,
}: {
	offers: PostedOffer[];
}): ReactElement => {
	return (
		<div className="col">
			<div className="flex flex-col lg:py-3 -mb-10 lg:pl-12 pl-5 pt-10 rounded-md my-3 lg:text-left bg-white w-full lg:bg-transparent lg:w-1/2 items-start">
				<div className="flex flex-col mb-10 lg:items-start items-center">
					<div className="flex-grow">
						<div className="flex items-center gap-3">
							<div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
								<svg
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="w-6 h-6"
									viewBox="0 0 24 24"
								>
									<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
									<circle cx="12" cy="7" r="4"></circle>
								</svg>
							</div>
							<h2 className="lg:text-gray-200 text-lg title-font font-bold mb-3">
								editar minhas informações
							</h2>
						</div>
					</div>
				</div>
			</div>
			<div className="container px-5 mx-auto">
				<div className="flex flex-wrap -m-4">
					<div className="p-4 lg:w-1/2">
						<div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
							<img
								alt="gallery"
								className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
								src={
									"https://cdn-w31zu3jn.resize-files-simplefileupload.com/ak8gU1cgRXtCr5u-wdelkrzFNO6UMmj8VKG9qJzCUz0/plain/s3://static.files-simplefileupload.com/ju68hrqmgvdierfw2b0jrnvvhqmq"
								}
							/>

							<div className="flex-grow sm:pl-8">
								<h2 className="title-font font-medium text-lg text-gray-900">
									Holden Caulfield
								</h2>
								<h3 className="text-gray-500 mb-3">UI Developer</h3>
								<p className="mb-4">
									DIY tote bag drinking vinegar cronut adaptogen squid fanny
									pack vaporware.
								</p>
								<span className="inline-flex">
									<a className="text-gray-500">
										<svg
											fill="none"
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											className="w-5 h-5"
											viewBox="0 0 24 24"
										>
											<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
										</svg>
									</a>
									<a className="ml-2 text-gray-500">
										<svg
											fill="none"
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											className="w-5 h-5"
											viewBox="0 0 24 24"
										>
											<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
										</svg>
									</a>
									<a className="ml-2 text-gray-500">
										<svg
											fill="none"
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											className="w-5 h-5"
											viewBox="0 0 24 24"
										>
											<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
										</svg>
									</a>
								</span>
							</div>
						</div>
					</div>
					<div className="p-4 lg:w-1/2">
						<div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
							<img
								alt="gallery"
								className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
								src={
									"https://cdn-w31zu3jn.resize-files-simplefileupload.com/ak8gU1cgRXtCr5u-wdelkrzFNO6UMmj8VKG9qJzCUz0/plain/s3://static.files-simplefileupload.com/ju68hrqmgvdierfw2b0jrnvvhqmq"
								}
							/>
							<div className="flex-grow sm:pl-8">
								<h2 className="title-font font-medium text-lg text-gray-900">
									Alper Kamu
								</h2>
								<h3 className="text-gray-500 mb-3">Designer</h3>
								<p className="mb-4">
									DIY tote bag drinking vinegar cronut adaptogen squid fanny
									pack vaporware.
								</p>
								<span className="inline-flex">
									<a className="text-gray-500">
										<svg
											fill="none"
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											className="w-5 h-5"
											viewBox="0 0 24 24"
										>
											<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
										</svg>
									</a>
									<a className="ml-2 text-gray-500">
										<svg
											fill="none"
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											className="w-5 h-5"
											viewBox="0 0 24 24"
										>
											<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
										</svg>
									</a>
									<a className="ml-2 text-gray-500">
										<svg
											fill="none"
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											className="w-5 h-5"
											viewBox="0 0 24 24"
										>
											<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
										</svg>
									</a>
								</span>
							</div>
						</div>
					</div>
					<div className="p-4 lg:w-1/2">
						<div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
							<img
								alt="gallery"
								className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
								src={
									"https://cdn-w31zu3jn.resize-files-simplefileupload.com/ak8gU1cgRXtCr5u-wdelkrzFNO6UMmj8VKG9qJzCUz0/plain/s3://static.files-simplefileupload.com/ju68hrqmgvdierfw2b0jrnvvhqmq"
								}
							/>
							<div className="flex-grow sm:pl-8">
								<h2 className="title-font font-medium text-lg text-gray-900">
									Atticus Finch
								</h2>
								<h3 className="text-gray-500 mb-3">UI Developer</h3>
								<p className="mb-4">
									DIY tote bag drinking vinegar cronut adaptogen squid fanny
									pack vaporware.
								</p>
								<span className="inline-flex">
									<a className="text-gray-500">
										<svg
											fill="none"
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											className="w-5 h-5"
											viewBox="0 0 24 24"
										>
											<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
										</svg>
									</a>
									<a className="ml-2 text-gray-500">
										<svg
											fill="none"
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											className="w-5 h-5"
											viewBox="0 0 24 24"
										>
											<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
										</svg>
									</a>
									<a className="ml-2 text-gray-500">
										<svg
											fill="none"
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											className="w-5 h-5"
											viewBox="0 0 24 24"
										>
											<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
										</svg>
									</a>
								</span>
							</div>
						</div>
					</div>
					<div className="p-4 lg:w-1/2">
						<div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
							<img
								alt="gallery"
								className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
								src={
									"https://cdn-w31zu3jn.resize-files-simplefileupload.com/ak8gU1cgRXtCr5u-wdelkrzFNO6UMmj8VKG9qJzCUz0/plain/s3://static.files-simplefileupload.com/ju68hrqmgvdierfw2b0jrnvvhqmq"
								}
							/>
							<div className="flex-grow sm:pl-8">
								<h2 className="title-font font-medium text-lg text-gray-900">
									Henry Letham
								</h2>
								<h3 className="text-gray-500 mb-3">Designer</h3>
								<p className="mb-4">
									DIY tote bag drinking vinegar cronut adaptogen squid fanny
									pack vaporware.
								</p>
								<span className="inline-flex">
									<a className="text-gray-500">
										<svg
											fill="none"
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											className="w-5 h-5"
											viewBox="0 0 24 24"
										>
											<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
										</svg>
									</a>
									<a className="ml-2 text-gray-500">
										<svg
											fill="none"
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											className="w-5 h-5"
											viewBox="0 0 24 24"
										>
											<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
										</svg>
									</a>
									<a className="ml-2 text-gray-500">
										<svg
											fill="none"
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											className="w-5 h-5"
											viewBox="0 0 24 24"
										>
											<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
										</svg>
									</a>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AppMutableUserProfilePostedOffers;
