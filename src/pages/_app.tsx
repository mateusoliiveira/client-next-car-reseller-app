import App from "next/app";
import Head from "next/head";
import React from "react";
import "../styles/index.css";
import { SessionProvider } from "next-auth/react";
import { formatToBRL } from "../_utils";
import Script from "next/script";

export default class MyApp extends App {
	static async getInitialProps({ Component, ctx }: any) {
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}
		return { pageProps };
	}
	render() {
		const { Component, pageProps } = this.props;
		return (
			<SessionProvider session={pageProps.session} refetchInterval={0}>
				<React.Fragment>
					<Head>
						<meta
							name="viewport"
							content="width=device-width, initial-scale=1, shrink-to-fit=no"
						/>
						<link rel="preconnect" href="https://fonts.googleapis.com" />
						<link rel="preconnect" href="https://fonts.gstatic.com" />
						<link
							href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;800&display=swap"
							rel="stylesheet"
						/>
						<title>
							{pageProps.offer
								? `${pageProps.offer.title} | ${formatToBRL(
										pageProps.offer.price
								  )}`
								: "outrachave"}
						</title>
					</Head>
					<Script src="https://app.simplefileupload.com/buckets/9c124e6cfcc1638f4a5c54d8a5429fc8.js" />

					<Component {...pageProps} />
				</React.Fragment>
			</SessionProvider>
		);
	}
}
