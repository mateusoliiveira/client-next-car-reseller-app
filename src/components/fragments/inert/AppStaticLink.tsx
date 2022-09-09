import Link, { LinkProps } from "next/link";
import React, { ReactElement } from "react";

const AppStaticLink = ({
	href,
	title,
	disabled = false,
}: LinkProps & { title: string; disabled?: boolean }): ReactElement => {
	return (
		(!disabled && (
			<Link href={href}>
				<span className="border-b-red-400 border-b-2 text-white font-bold cursor-pointer hover:border-b-red-600 transition-all">
					{title.charAt(0).toUpperCase() + title.slice(1)}
				</span>
			</Link>
		)) || (
			<span className="border-b-gray-400 border-b-2 text-gray-500 font-bold cursor-pointer hover:border-b-gray-600 transition-all">
				{title.charAt(0).toUpperCase() + title.slice(1)}
			</span>
		)
	);
};

export default AppStaticLink;
