import {NextFunction, Request, Response} from "express";
import {UserTo} from "../to/user.to.js";
import {validate} from "class-validator";
import {ErrorTo} from "../to/error.to.js";

export class Validators{//all the validators will define within this
    static async validateUser(req: Request,
                                res: Response,
                                next: NextFunction) {

        const user = req.body as UserTo;
        //Data validation
        Object.assign(user, req.body);
        const errors = await validate(user);
        if (errors.length > 0) {
            res.sendStatus(400)
                .json(new ErrorTo(400, "Bad Request", "Data validation fail", req.baseUrl + req.url,errors))

        } else {
            next();
        }

    }
}