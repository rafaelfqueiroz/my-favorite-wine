import { Wine } from "../../models";
import { WineRepository } from "../interfaces/wine.repository";

export class WineMongoDbRepository implements WineRepository {
    get(): Wine {
        throw new Error("Method not implemented.");
    }
    getAll(): Wine[] {
        throw new Error("Method not implemented.");
    }
    save(wine: Wine): void {
        throw new Error("Method not implemented.");
    }
    
}