import { Toast } from "flowbite-react";
import React from "react";
import { handleFeedbackColor } from "../../../../src/_utils";
import { RequisitionResult } from "../../../interfaces/RequisitionResult";

const AppMutableAlert = ({ message, status = 200 }: RequisitionResult) => {
	return (
		<div className="justify-center mb-5 mt-10">
			{message ? (
				Array.isArray(message) ? (
					message.map((msg: string, index: number) => {
						return (
							<div className="flex pb-3 flex-row gap-4 justify-center">
								<Toast key={index}>
									<div
										className={`font-extrabold inline-flex h-8 w-8 shrink-0 border-2 border-${handleFeedbackColor(
											status
										)} text-${handleFeedbackColor(
											status
										)} items-center justify-center rounded-lg ml-2 mr-4 shadow-sm text-sm font-normal`}
									>
										{"!"}
									</div>
									<div
										className={`mr-2 text-sm mx-auto font-normal text-${handleFeedbackColor(
											status
										)}`}
									>
										{msg}
									</div>
									<Toast.Toggle />
								</Toast>
							</div>
						);
					})
				) : (
					<div className="flex pb-3 flex-row gap-4 justify-center">
						<Toast>
							<div
								className={`font-extrabold inline-flex h-8 w-8 shrink-0 border-2 border-${handleFeedbackColor(
									status
								)} text-${handleFeedbackColor(
									status
								)} items-center justify-center rounded-lg ml-2 mr-4 shadow-sm text-sm font-normal`}
							>
								{"!"}
							</div>
							<div
								className={`mr-2 text-sm mx-auto font-normal text-${handleFeedbackColor(
									status
								)}`}
							>
								{String(Object.values(message))}
							</div>
							<Toast.Toggle />
						</Toast>
					</div>
				)
			) : (
				""
			)}
		</div>
	);
};

export default AppMutableAlert;
