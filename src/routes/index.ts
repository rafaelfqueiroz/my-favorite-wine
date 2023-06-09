import { Router } from "express"
import wineRoute from "./wine.route"

const routes = Router()
wineRoute(routes)

export { routes }