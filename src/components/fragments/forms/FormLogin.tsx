import React, { ChangeEvent, useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import AppMutableAlert from "../mutable/AppMutableAlert";
import { useRouter } from "next/router";
import AppStaticInput from "../inert/AppStaticInput";
import {
	emailLoginInput,
	loginButton,
	passwordLoginInput,
} from "./FormLoginComponents";
import AppStaticForm from "../inert/AppStaticForm";
import AppStaticButton from "../inert/AppStaticButton";
import { Credential } from "../../../interfaces/Credential";
import { RequisitionResult } from "../../../interfaces/RequisitionResult";

const FormLogin = () => {
	const router = useRouter();
	const [requisitionResult, setRequisitionResult] = useState<{
		errors?: {
			[x: string]: string | string[];
		};
		success?: {
			[x: string]: string | string[];
		};
	} | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [user, setUser] = useState<Credential>({
		email: "",
		password: "",
	});

	const handleLogin = async () => {
		setRequisitionResult(null);
		setIsLoading(true);
		await signIn("credentials", { ...user });
	};
	console.log(router.query);
	useEffect(() => {
		setIsLoading(false);
		setRequisitionResult({
			errors: { password: router.query.error ?? "" },
		});
	}, [router.query]);

	return (
		<AppStaticForm>
			<AppMutableAlert message={requisitionResult?.success} />
			<AppStaticInput
				{...emailLoginInput}
				validation={requisitionResult?.errors?.email ?? ""}
				onChange={(e: ChangeEvent<HTMLInputElement>) =>
					setUser({ ...user, email: e.target.value })
				}
			/>
			<AppStaticInput
				{...passwordLoginInput}
				validation={requisitionResult?.errors?.password ?? ""}
				onChange={(e: ChangeEvent<HTMLInputElement>) =>
					setUser({ ...user, password: e.target.value })
				}
			/>

			<AppStaticButton
				{...loginButton}
				isLoading={isLoading}
				onClick={() => handleLogin()}
			/>
		</AppStaticForm>
	);
};

export default FormLogin;
