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
	const [requisitionResult, setRequisitionResult] = useState<
		RequisitionResult | undefined
	>({
		messages: "",
		status: 0,
	});
	const [user, setUser] = useState<Credential>({
		email: "",
		password: "",
	});

	const handleLogin = async () => {
		await signIn("credentials", { ...user });
	};

	useEffect(() => {
		setRequisitionResult({
			messages: Object.values(router.query)[0],
			status: Number(router.query.status),
		});
	}, [router.query]);

	return (
		<AppStaticForm>
			<AppMutableAlert
				messages={requisitionResult?.messages}
				status={requisitionResult?.status}
			/>

			<AppStaticInput
				{...emailLoginInput}
				onChange={(e: ChangeEvent<HTMLInputElement>) =>
					setUser({ ...user, email: e.target.value })
				}
			/>
			<AppStaticInput
				{...passwordLoginInput}
				onChange={(e: ChangeEvent<HTMLInputElement>) =>
					setUser({ ...user, password: e.target.value })
				}
			/>

			<AppStaticButton {...loginButton} onClick={() => handleLogin()} />
		</AppStaticForm>
	);
};

export default FormLogin;
