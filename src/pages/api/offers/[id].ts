import type { NextApiRequest, NextApiResponse } from 'next'
import { getToken } from 'next-auth/jwt'
import { ApiServer } from '../../../../src/_services'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<any>
) {

	if (req.method == 'PATCH') {
		const { token }: any = await getToken({ req })
		try {
			const { data } = await ApiServer.patch(`/offers/${req.query.id}`, req.body, {
				headers: { Authorization: 'Bearer ' + token }
			})
			res.status(200).json(data)
		} catch (error: any) {
			res.status(error.response.status).json(error.response.data)
		}
	}

	if (req.method == 'DELETE') {
		const { token }: any = await getToken({ req })
		try {
			const { data } = await ApiServer.delete(`/offers/${req.query.id}`, {
				headers: { Authorization: 'Bearer ' + token }
			})
			res.status(200).json(data)
		} catch (error: any) {
			res.status(error.response.status).json(error.response.data)
		}
	}

	try {
		const { data } = await ApiServer.get(`/offers/${req.query.id}`)
		res.status(200).json(data)
	} catch (error: any) {
		res.status(error.response.status).json(error.response.data)
	}
}
