import { Request, Response } from "express";
import { WineService } from "../services/wine.service";

export class WineController {

    constructor(private readonly service: WineService) {}

    get = (req: Request, res: Response) => {
        res.json(this.service.get())
    }

}