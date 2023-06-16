import { Wine } from "../models";
import { WineRepository } from "../repositories/interfaces/wine.repository";

export class WineService {
    private randomN: Number = Math.random();
    constructor() {}

    async save(wine: Wine) {
        //return await this.repository.create(wine);
    }
    async getAll() {
        //return await this.repository.find();
    }
    async get(id: String) {
        //return await this.repository.findById(id);
    }
}
