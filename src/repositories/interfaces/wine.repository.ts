import { Wine } from "../../models";

export interface WineRepository {
    save(wine: Wine): void
    get(): Wine
    getAll(): Wine[]
}