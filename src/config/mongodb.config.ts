import * as Mongoose from "mongoose";
import { dbConfig } from "./config";

export class MongoDbConnection {
    connect() {
        console.log("Connecting to mongodb.");
        Mongoose.connect(dbConfig.url, {
            dbName: "my-favorite-wine",
            user: "root",
            pass: "pass",
        })
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
