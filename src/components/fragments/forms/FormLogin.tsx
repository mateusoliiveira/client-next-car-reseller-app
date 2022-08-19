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

const FormLogin = () => {
	const router = useRouter();
	const [requisitionResult, setRequisitionResult] = useState<any>({});
	const [user, setUser] = useState<Credential>({
		email: "",
		password: "",
	});

	const handleLogin = async () => {
		try {
			setRequisitionResult(undefined);
			await signIn("credentials", { ...user });
		} catch (error: any) {
			setRequisitionResult({
				messages: Object.values(error.response.data.errors).flat(2),
				status: error.response.status,
			});
		}
	};

	const catchLoginFailedAttempt = () => router.query.error;

	useEffect(() => {
		const getErrorIfExists = catchLoginFailedAttempt();
		if (
			typeof getErrorIfExists === "string" &&
			getErrorIfExists !== undefined
		) {
			setRequisitionResult({
				messages: ["Usuário ou senha incorretos"],
				status: Number(getErrorIfExists.match(/\d+/g)),
			});
		}
	}, []);

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
