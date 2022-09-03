import React from "react";

const AppStaticInputValidation = ({
	validation,
}: {
	validation: string | string[];
}) => {
	return (
		validation &&
		(Array.isArray(validation) && validation.length > 1 ? (
			validation.map((msg: string) => {
				return (
					<>
						<small
							style={{
								color: "red",
								fontWeight: "bold",
							}}
						>
							{msg}
						</small>
						<hr />
					</>
				);
			})
		) : (
			<>
				<small
					style={{
						color: "red",
						fontWeight: "bold",
					}}
				>
					{String(validation)}
				</small>
				<hr />
			</>
		))
	);
};

export default AppStaticInputValidation;
