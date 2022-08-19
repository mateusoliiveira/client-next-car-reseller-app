import { TextInput, TextInputProps } from "flowbite-react";
import { InputHTMLAttributes, ReactElement } from "react";

const AppStaticInput = ({
	placeholder,
	type,
	defaultValue,
	id,
	name,
	title,
	helperText,
	onChange,
	onKeyDown,
	onPaste,
}: TextInputProps & InputHTMLAttributes<HTMLInputElement>): ReactElement => {
	return (
		<div className="relative mb-4 my-1">
			<label htmlFor={id} className="text-red-500 font-extrabold">
				{title}
			</label>
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
		</div>
	);
};

export default AppStaticInput;
