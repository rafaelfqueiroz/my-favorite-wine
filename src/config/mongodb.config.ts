import * as Mongoose from "mongoose";
import { dbConfig } from "./config";

export class MongoDbConnection {
    connect() {
        Mongoose.connect(dbConfig.url, { retryWrites: true, w: "majority" })
            .then(() => {
                console.log("Successfuly connected to mongo database.");
            })
            .catch((error) => {
                console.log(
                    "Could not connect to mongo database due to following error: ",
                    error
                );
            });
    }
}
