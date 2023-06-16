import mongoose from "mongoose";
import { Wine } from "../../models";

export interface WineRepository extends mongoose.Model<Wine> {}
