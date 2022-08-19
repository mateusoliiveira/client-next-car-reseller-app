import { Button, Navbar } from "flowbite-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import AppStaticLink from "./AppStaticLink";

const AppStaticNavbar = () => {
	const authed = useSession().data?.user;
	return (
		<Navbar fluid={true} className="bg-transparent py-9 pt-5 px-10 xl:px-80">
			<Navbar.Brand>
				<Link href="/">
					<div className="self-center text-4xl cursor-pointer">
						<span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-100 to-pink-600">
							outrachave
						</span>
					</div>
				</Link>
			</Navbar.Brand>
			<Navbar.Toggle />
			<Navbar.Collapse>
				{authed ? (
					<>
						<AppStaticLink href="/oferta/nova" title={"vender"} />
						<AppStaticLink href="/conta" title={"minha conta"} />
					</>
				) : (
					<>
						<AppStaticLink href="/login" title={"entrar"} />
						<AppStaticLink href="/register" title={"começar a vender"} />
					</>
				)}
			</Navbar.Collapse>
		</Navbar>
	);
};

export default AppStaticNavbar;
