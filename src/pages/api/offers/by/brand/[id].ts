import type { NextApiRequest, NextApiResponse } from 'next'
import { ApiServer } from '../../../../../../src/_services'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<any>
) {
	if (req.method == 'GET') {
		try {
			const { data } = await ApiServer.get(`/offers/by/brand/${req.query.id}`)
			res.status(200).json(data)
		} catch (error: any) {
			res.status(error.response.data).json(error.response.data)
		}
	}
}
