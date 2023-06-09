import { Router } from "express";
import { wineController } from "../controllers";

const wineRoute: Router = Router();
const BASE_PATH = "/wine";

let test = "";

test = "aaa";

export default (app: Router) => {
    app.use(BASE_PATH, wineRoute);

    wineRoute.get("/", wineController.get);
};
