// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ApiServer } from '../../../../../src/_services'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<any>
) {
	if (req.method == 'GET') {
		try {
			const { data } = await ApiServer.get(`/brands/vehicles`,
				{
					headers: {
						'Content-Type': 'application/json',
					}
				})
			res.status(200).json(data)
		} catch (error: any) {
			res.status(error.response.status).json(error.response.data)
		}
	}
}
