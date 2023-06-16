import { Request, Response } from "express";
import { WineService } from "../services/wine.service";

export class WineController {
    constructor(private readonly service: WineService) {}

    get = (req: Request, res: Response) => {
        res.json(this.service.get("1"));
    };

    post = (req: Request, res: Response) => {
        const wine = req.body;
        this.service.save(wine);
    };
}
