//@ts-ignore
//@ts-nocheck
import React from "react";
const SimpleFileUpload = require("react-simple-file-upload").default;

export default function AppStaticPhotoUploader({
	onSuccess,
}: {
	onSuccess: (url: string) => void;
}) {
	return (
		<div className="flex bg-gray-800 justify-center border rounded-md p-2">
			<SimpleFileUpload
				apiKey="9c124e6cfcc1638f4a5c54d8a5429fc8"
				preview="true"
				resizeWidth="500"
				data-accepted="image/*"
				data-maxFileSize="1"
				onSuccess={onSuccess}
			/>
		</div>
	);
}
