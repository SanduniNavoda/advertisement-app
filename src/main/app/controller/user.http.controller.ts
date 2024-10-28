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

    @DeleteMapping("/:user")
    async deleteUser(req: Request, res: Response){
        console.log("Delete User");
    }

    @GetMapping("/:user")//this path segment can be change , so we calls them as path parameters / route parameters.
    async getUserAccount(req: Request, res: Response){
        console.log("get User");
    }
}

//export {router as UserHttpController}
