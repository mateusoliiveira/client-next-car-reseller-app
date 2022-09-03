import { Button, Spinner } from "flowbite-react";
import { ButtonHTMLAttributes, ReactElement } from "react";

const AppStaticButton = ({
	onClick,
	isLoading,
	disabled,
	title,
	id,
}: ButtonHTMLAttributes<HTMLButtonElement> & {
	isLoading: boolean;
}): ReactElement => {
	return (
		<Button id={id} disabled={disabled} onClick={onClick}>
			{isLoading && (
				<div className="mr-3">
					<Spinner size="sm" light={true} />
				</div>
			)}
			{title}
		</Button>
	);
};

export default AppStaticButton;
