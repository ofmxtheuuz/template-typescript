import { Request, Response } from "express"

export function Index(req: Request, res: Response) {
    res.render("client/index", { title: "Home"})
}