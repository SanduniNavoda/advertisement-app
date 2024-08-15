import { validate } from "class-validator";
import { ErrorTo } from "../to/error.to.js";
export class Validators {
    static async validateUser(req, res, next) {
        const user = req.body;
        //Data validation
        Object.assign(user, req.body);
        const errors = await validate(user);
        if (errors.length > 0) {
            res.sendStatus(400)
                .json(new ErrorTo(400, "Bad Request", "Data validation fail", req.baseUrl + req.url, errors));
        }
        else {
            next();
        }
    }
}
//# sourceMappingURL=validators.middleware.js.map