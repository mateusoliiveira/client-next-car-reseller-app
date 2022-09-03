import { TextInput, TextInputProps } from "flowbite-react";
import { InputHTMLAttributes, ReactElement } from "react";
import AppStaticInputLabel from "./AppStaticInputLabel";
import AppStaticInputValidation from "./AppStaticInputValidation";

const AppStaticInput = ({
	placeholder,
	type,
	defaultValue,
	id,
	name,
	title,
	helperText,
	validation,
	onChange,
	onKeyDown,
	onPaste,
}: TextInputProps &
	InputHTMLAttributes<HTMLInputElement> & {
		validation: string | string[];
	}): ReactElement => {
	return (
		<div className="relative mb-4 my-1">
			<AppStaticInputLabel id={id} title={title} />
			<TextInput
				type={type}
				id={id}
				name={name}
				defaultValue={defaultValue}
				placeholder={placeholder}
				helperText={helperText}
				onChange={onChange}
				onKeyDown={onKeyDown}
				onPaste={onPaste}
			/>
			<AppStaticInputValidation validation={validation} />
		</div>
	);
};

export default AppStaticInput;
