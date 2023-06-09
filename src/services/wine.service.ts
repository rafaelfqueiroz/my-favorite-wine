import { Wine } from "../models"
import { WineRepository } from "../repositories/interfaces/wine.repository"

export class WineService {
    private randomN: Number = Math.random()
    constructor(private readonly repository: WineRepository) {}

    save(wine: Wine) {
    }
    getAll(): Wine[] {
        return []
    }
    get(): String[] {
        return [
            "Wine-"+this.randomN
        ]
    }
}