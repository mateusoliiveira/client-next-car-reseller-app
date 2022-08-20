import { clientURLApiDEV, clientURLDEV, serverURLApiDEV } from "../../apiDEV"

export const serverURLApi = serverURLApiDEV && "https://outrachave.herokuapp.com/api/v1"
export const clientURLApi = clientURLApiDEV && "https://outrachave.vercel.app/api"
export const clientURL = clientURLDEV && "https://outrachave.vercel.app"
