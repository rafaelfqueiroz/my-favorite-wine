import { WineController } from "./wine.controller"

import { wineService } from "../services"


const wineController = new WineController(wineService)
export { wineController }