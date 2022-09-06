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
	const [confirmPassword, setConfirmPassword] = useState<string>("");
	const [requisitionResult, setRequisitionResult] = useState<{
		errors?: {
			[x: string]: string | string[];
		};
		success?: {
			[x: string]: string | string[];
		};
	} | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [errors, setErrors] = useState<null>();
	const [user, setUser] = useState<NewCredential>({
		email: "",
		name: "",
		password: "",
	});

	const handleRegister = async () => {
		setErrors(null);
		if (user.password !== confirmPassword)
			return setRequisitionResult({
				errors: {
					confirmPassword: "senhas não conferem",
				},
			});
		try {
			setIsLoading(true);
			const request = await ApiClient.post("/guests/register", user);
			setRequisitionResult({
				success: request.data,
			});
		} catch (error: any) {
			setRequisitionResult({ errors: error.response.data.errors });
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<AppStaticForm>
			<AppMutableAlert message={requisitionResult?.success} />
			<AppStaticInput
				{...emailRegisterInput}
				validation={requisitionResult?.errors?.email ?? ""}
				onChange={(e: ChangeEvent<HTMLInputElement>) =>
					setUser({ ...user, email: e.target.value })
				}
			/>
			<AppStaticInput
				{...nameRegisterInput}
				validation={requisitionResult?.errors?.name ?? ""}
				onChange={(e: ChangeEvent<HTMLInputElement>) =>
					setUser({ ...user, name: e.target.value })
				}
			/>
			<div className="flex justify-between gap-2">
				<div className="w-1/2">
					<AppStaticInput
						{...passwordRegisterInput}
						validation={requisitionResult?.errors?.password ?? ""}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setUser({ ...user, password: e.target.value })
						}
					/>
				</div>
				<div className="w-1/2">
					<AppStaticInput
						{...passwordConfirmationRegisterInput}
						validation={requisitionResult?.errors?.confirmPassword ?? ""}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setConfirmPassword(e.target.value)
						}
					/>
				</div>
			</div>
			<AppStaticButton
				{...loginButton}
				isLoading={isLoading}
				onClick={() => handleRegister()}
			/>
		</AppStaticForm>
	);
};

export default FormRegister;
