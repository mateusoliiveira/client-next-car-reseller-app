//@ts-ignore
//@ts-nocheck
import React from "react";
import SimpleFileUpload from "react-simple-file-upload";

const AppStaticPhotoUploader = ({
	onSuccess,
}: {
	onSuccess: (url: string) => void;
}) => {
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
};

export default AppStaticPhotoUploader;
