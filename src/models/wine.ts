import { WineType } from "./wine-type";

export default class Wine {

    constructor(
        private readonly name: String, 
        private readonly description: String, 
        private readonly pais: String,
        private readonly region: String,
        private readonly grape: String,
        private readonly type: WineType,
        private readonly visual: String,
        private readonly harmonizacao: String,
        private readonly aroma: String,
        private readonly sabor: String
        ) {
    }
}