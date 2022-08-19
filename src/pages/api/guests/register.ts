// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ApiServer } from '../../../../src/_services'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<any>
) {
	if (req.method == 'POST') {
		try {
			const { data } = await ApiServer.post('/guests/register', req.body, {
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				}
			})
			res.status(201).json(data)
		} catch (error: any) {
			res.status(error.response.status).json(error.response.data)
		}
	}
}
