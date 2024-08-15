import express, {json,Request, Response} from "express";
import {UserTo} from "../to/user.to.js";
import {Validators} from "../middleware/validators.middleware.js";
import {DeleteMapping, GetMapping, Middleware, PostMapping, RestController} from "../config/core.config.js";


@Middleware([json()])
@RestController("/users")
export class userHttpController{

    @Middleware([Validators.validateUser])
    @PostMapping("/")
    async createNewUser(req: Request, res: Response){
        const user = req.body as UserTo;
    }

    @DeleteMapping("/me")
    async deleteUser(req: Request, res: Response){
        console.log("Delete User")
    }

    @GetMapping("/me")
    async getUserAccount(req: Request, res: Response){
        console.log("get User")
    }
}

const router = express.Router();
const httpController = new userHttpController();

router.use(json());

router.get("/me", httpController.getUserAccount);
router.post("/", Validators.validateUser, httpController.createNewUser);
router.delete("/me", httpController.deleteUser);

//export {router as UserHttpController}
