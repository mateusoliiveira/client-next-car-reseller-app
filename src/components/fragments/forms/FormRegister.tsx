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
import { NewCredential } from "../../../interfaces/Credential";
import {
	emailRegisterInput,
	nameRegisterInput,
	passwordConfirmationRegisterInput,
	passwordRegisterInput,
} from "./FormRegisterComponents";
import { ApiClient } from "../../../_services";

const FormRegister = () => {
	const router = useRouter();
	const [confirmPassword, setConfirmPassword] = useState<string>("");
	const [requisitionResult, setRequisitionResult] = useState<any>(undefined);
	const [user, setUser] = useState<NewCredential>({
		email: "",
		name: "",
		password: "",
	});

	const handleRegister = async () => {
		setRequisitionResult(undefined);
		if (user.password !== confirmPassword)
			return setRequisitionResult({
				messages: ["Senhas não coincidem"],
				status: 400,
			});
		try {
			const request = await ApiClient.post("/guests/register", user);
			return setRequisitionResult({
				messages: [request.data.message],
				status: request.status,
			});
		} catch (error: any) {
			setRequisitionResult({
				messages: Object.values(error.response.data.errors).flat(2),
				status: error.response.status,
			});
		}
	};

	return (
		<AppStaticForm>
			<AppMutableAlert
				messages={requisitionResult?.messages}
				status={requisitionResult?.status}
			/>
			<AppStaticInput
				{...emailRegisterInput}
				onChange={(e: ChangeEvent<HTMLInputElement>) =>
					setUser({ ...user, email: e.target.value })
				}
			/>
			<AppStaticInput
				{...nameRegisterInput}
				onChange={(e: ChangeEvent<HTMLInputElement>) =>
					setUser({ ...user, name: e.target.value })
				}
			/>
			<div className="flex justify-between gap-2">
				<div className="w-1/2">
					<AppStaticInput
						{...passwordRegisterInput}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setUser({ ...user, password: e.target.value })
						}
					/>
				</div>
				<div className="w-1/2">
					<AppStaticInput
						{...passwordConfirmationRegisterInput}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setConfirmPassword(e.target.value)
						}
					/>
				</div>
			</div>
			<AppStaticButton {...loginButton} onClick={() => handleRegister()} />
		</AppStaticForm>
	);
};

export default FormRegister;
