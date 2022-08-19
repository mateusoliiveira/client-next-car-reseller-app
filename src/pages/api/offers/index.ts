import type { NextApiRequest, NextApiResponse } from 'next'
import { getToken, JWT } from 'next-auth/jwt'
import { ApiServer } from '../../../../src/_services'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<any>
) {

	if (req.method == 'POST') {
		try {
			const { token }: any = await getToken({ req });
			console.log(token)
			const { data } = await ApiServer.post(`/offers`, req.body,
				{ headers: { Authorization: `Bearer ${token}` } }
			)
			res.status(201).json(data)
		} catch (error: any) {
			res.status(error.response.status).json(error.response.data)
		}
	}

	try {
		const { data } = await ApiServer.get(`/offers`)
		res.status(200).json(data)
	} catch (error: any) {
		res.status(error.response.status).json(error.response.data)
	}

}
