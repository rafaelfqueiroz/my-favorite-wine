import express from "express";
import { routes } from "./routes";

import bodyParser from "body-parser";
import { serverConfig } from "./config/config";
import { MongoDbConnection } from "./config/mongodb.config";

export class Server {
    start() {
        const app = express();

        app.use("/api", routes);

        app.use(bodyParser.json);

        new MongoDbConnection().connect();

        app.listen(serverConfig.port, () => {
            console.log("Server started at port 3000");
        });
    }
}
