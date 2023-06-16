import { Document } from "mongoose";
import { WineType } from "./wine-type";

export default interface Wine extends Document {
    name: String;
    description: String;
    pais: String;
    region: String;
    grape: String;
    type: WineType;
    visual: String;
    harmonizacao: String;
    aroma: String;
    sabor: String;
}
