import { Toast } from "flowbite-react";
import React from "react";
import { handleFeedbackColor } from "../../../../src/_utils";

const AppMutableAlert = ({
	messages,
	status = 200,
}: {
	messages: string[];
	status?: number;
}) => {
	return (
		<div className="justify-center mb-10">
			{messages ? (
				Array.isArray(messages) ? (
					messages.map((msg: string, index: number) => {
						return (
							<div className="flex pb-3 flex-col gap-4">
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
										className={`mr-2 text-sm font-normal text-${handleFeedbackColor(
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
					<div className="flex pb-3 flex-col gap-4">
						<Toast>
							<div
								className={`font-extrabold inline-flex h-8 w-8 shrink-0 border-2 border-${handleFeedbackColor(
									status
								)} text-${handleFeedbackColor(
									status
								)} items-center justify-center rounded-lg ml-2 mr-4 shadow-sm text-sm font-normal`}
							>
								{">"}
							</div>
							<div
								className={`ml-2 text-sm font-normal text-${handleFeedbackColor(
									status
								)}`}
							>
								{messages}
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
