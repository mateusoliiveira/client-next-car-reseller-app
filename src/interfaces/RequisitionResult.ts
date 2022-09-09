export interface IRequisitionResult {
	errors?: {
		[x: string]: string | string[];
	};
	success?: {
		[x: string]: string | string[];
	};
};
