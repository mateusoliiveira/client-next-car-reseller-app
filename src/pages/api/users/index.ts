import type { NextApiRequest, NextApiResponse } from 'next'
import { getToken } from 'next-auth/jwt'
import { ApiServer } from '../../../_services'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<any>
) {
	const { token }: any = await getToken({ req })
	if (req.method == 'GET') {
		try {
			const { data } = await ApiServer.get(`/users/me`, {
				headers: { Authorization: 'Bearer ' + token }
			})
			res.status(200).json(data)
		} catch (error: any) {
			res.status(error.response.status).json(error.response.data)
		}
	}

	if (req.method == 'PATCH') {
		try {
			const { data } = await ApiServer.patch(`/users`, req.body, {
				headers: { Authorization: 'Bearer ' + token }
			})
			res.status(201).json(data)
		} catch (error: any) {
			res.status(error.response.status).json(error.response.data)
		}
	}
}
