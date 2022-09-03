import React, { ChangeEvent, useState } from "react";
import AppMutableAlert from "../mutable/AppMutableAlert";
import AppStaticInput from "../inert/AppStaticInput";
import AppStaticForm from "../inert/AppStaticForm";
import AppStaticButton from "../inert/AppStaticButton";
import {
	editNameButton,
	editPasswordButton,
	nameEditInput,
	newPasswordEditInput,
	oldPasswordEditInput,
	newPasswordConfirmationEditInput,
} from "./FormAccountEditComponents";
import { ApiClient } from "../../../_services";

const FormAccountEdit = () => {
	const [confirmPassword, setConfirmPassword] = useState<string>("");
	const [requisitionResult, setRequisitionResult] = useState<{
		errors?: {
			[x: string]: string | string[];
		};
		success?: {
			[x: string]: string | string[];
		};
	} | null>(null);
	const [isLoading, setIsLoading] = useState<{ [x: string]: boolean }>({
		name: false,
		password: false,
	});
	const [user, setUser] = useState<{ [x: string]: string }>({});

	const handleEditName = async () => {
		setRequisitionResult(null);
		try {
			setIsLoading({ name: true });
			const request = await ApiClient.patch("/users", { name: user.name });
			setRequisitionResult({
				success: request.data.message,
			});
		} catch (error: any) {
			setRequisitionResult({ errors: error.response.data.errors });
		} finally {
			setIsLoading({ name: false });
		}
	};

	const handleEditPassword = async () => {
		setRequisitionResult(null);
		if (user.password && user.password !== confirmPassword)
			return setRequisitionResult({
				errors: {
					confirmPassword: "senhas não conferem",
				},
			});
		try {
			setIsLoading({ password: true });
			const request = await ApiClient.patch("/users", {
				password: user.password,
				old_password: user.old_password,
			});
			setRequisitionResult({
				success: request.data.message,
			});
		} catch (error: any) {
			setRequisitionResult({ errors: error.response.data.errors });
		} finally {
			setIsLoading({ password: false });
		}
	};

	return (
		<AppStaticForm>
			<AppMutableAlert message={requisitionResult?.success} />
			<AppStaticInput
				{...nameEditInput}
				validation={requisitionResult?.errors?.name ?? ""}
				onChange={(e: ChangeEvent<HTMLInputElement>) =>
					setUser({ name: e.target.value })
				}
			/>
			<AppStaticButton
				disabled={!user.name}
				{...editNameButton}
				isLoading={isLoading.name}
				onClick={() => handleEditName()}
			/>
			<hr className="my-5" />
			<AppStaticInput
				{...oldPasswordEditInput}
				validation={requisitionResult?.errors?.password ?? ""}
				onChange={(e: ChangeEvent<HTMLInputElement>) =>
					setUser({ ...user, old_password: e.target.value })
				}
			/>
			<div className="flex justify-between gap-2">
				<div className="w-1/2">
					<AppStaticInput
						{...newPasswordEditInput}
						validation={requisitionResult?.errors?.password ?? ""}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setUser({ ...user, password: e.target.value })
						}
					/>
				</div>
				<div className="w-1/2">
					<AppStaticInput
						{...newPasswordConfirmationEditInput}
						validation={requisitionResult?.errors?.confirmPassword ?? ""}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setConfirmPassword(e.target.value)
						}
					/>
				</div>
			</div>
			<AppStaticButton
				disabled={!user.password && !confirmPassword}
				{...editPasswordButton}
				isLoading={isLoading.password}
				onClick={() => handleEditPassword()}
			/>
		</AppStaticForm>
	);
};

export default FormAccountEdit;
