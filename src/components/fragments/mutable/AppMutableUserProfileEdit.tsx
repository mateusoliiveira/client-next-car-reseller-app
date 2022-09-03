import React from "react";
import FormAccountEdit from "../forms/FormAccountEdit";

const AppMutableUserProfileEdit = ({ user }: any) => {
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
			<FormAccountEdit />
		</div>
	);
};

export default AppMutableUserProfileEdit;
