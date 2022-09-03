import { Button, Dropdown, TextInput } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import React, {
	ChangeEvent,
	ClipboardEvent,
	KeyboardEvent,
	useState,
} from "react";
import { Brand } from "../../../interfaces/Brand";
import AppStaticInput from "../inert/AppStaticInput";
import AppStaticLink from "../inert/AppStaticLink";
import { findInput, findLink } from "./FormSearchComponents";

const FormSearch = (props: any) => {
	const [brandsList, setBrandsList] = useState<Brand[]>(
		props.brands.filter(
			(b: any) =>
				b.name === "BMW" || b.name === "Mercedes" || b.name === "Volkswagen"
		)
	);
	const [keywordBrand, setKeywordBrand] = useState<string>("");
	const [keywordModel, setKeywordModel] = useState<string>("");

	const allOrFiltered = () => {
		if (keywordBrand.trim() !== "") {
			return brandsList.filter((brand) =>
				brand.name.toLowerCase().includes(keywordBrand.toLowerCase())
			);
		}
		return brandsList;
	};

	const keyDownCheck = (e: any) => {
		var e = window.event || e;
		var key = e.keyCode;
		if (key == 32) {
			e.preventDefault();
		}
	};

	const checkWhitespace = (event: any) => {
		var data = event.clipboardData.getData("text/plain");
		var isNullOrContainsWhitespace =
			!data || data.length === 0 || /\s/g.test(data);

		if (isNullOrContainsWhitespace) {
			event.preventDefault();
		}
	};

	return (
		<div className="pt-5">
			<h2
				className="text-4xl pb-10 text-center font-bold"
				style={{ color: "#F77365" }}
			>
				vamos começar?
			</h2>
			<div className="w-50 flex justify-center">
				<form onSubmit={(e) => e.preventDefault()}>
					<div className="md:flex justify-content-center gap-5 items-baseline rounded-3xl p-10 shadow-sm shadow-gray-500 hover:shadow-red-800 transition-all">
						<div className="mb-20 md:mb-10 lg:mb-0">
							<AppStaticInput
								validation={""}
								{...findInput}
								onKeyDown={(e: KeyboardEvent<HTMLInputElement>) =>
									keyDownCheck(e)
								}
								onPaste={(e: ClipboardEvent<HTMLInputElement>) =>
									checkWhitespace(e)
								}
								onChange={(e: ChangeEvent<HTMLInputElement>) =>
									setKeywordModel(
										`${
											e.target.value.split(e.target.value[1])[0].toUpperCase() +
											e.target.value.slice(1)
										}`
									)
								}
							/>
							<AppStaticLink
								{...findLink}
								disabled={!keywordModel}
								href={`/busca/veiculo?title=${keywordModel}`}
							/>
						</div>
						<div className="">
							<Dropdown
								label="ou busque por marcas"
								color="light"
								size="md"
								style={{
									padding: 3,
								}}
							>
								<div className="p-3">
									<TextInput
										list="brands"
										name="brands"
										helperText="busque pela marca do automóvel"
										onChange={(e: ChangeEvent<HTMLInputElement>) =>
											setKeywordBrand(e.target.value)
										}
									/>
								</div>

								<div className="h-30 overflow-auto">
									{brandsList &&
										allOrFiltered().map((brand: Brand) => {
											return (
												<Link
													key={brand.id}
													href={`/busca/marca?id=${brand.id}`}
												>
													<div>
														<Dropdown.Item>
															<div className="flex gap-x-3">
																<Image
																	src={brand.picture}
																	width="24rem"
																	height="24rem"
																	className=""
																	alt={brand.name}
																/>
																<span>{brand.name}</span>
															</div>
														</Dropdown.Item>
													</div>
												</Link>
											);
										})}
								</div>
							</Dropdown>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default FormSearch;
