import { wineMongoDbRepository } from "../repositories"
import { WineService } from "./wine.service"

const wineService = new WineService(wineMongoDbRepository)

export { wineService }