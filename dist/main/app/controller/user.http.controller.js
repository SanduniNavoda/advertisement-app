var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import express, { json } from "express";
import { Validators } from "../middleware/validators.middleware.js";
import { DeleteMapping, GetMapping, Middleware, PostMapping, RestController } from "../config/core.config.js";
let userHttpController = class userHttpController {
    async createNewUser(req, res) {
        const user = req.body;
    }
    async deleteUser(req, res) {
        console.log("Delete User");
    }
    async getUserAccount(req, res) {
        console.log("get User");
    }
};
__decorate([
    Middleware([Validators.validateUser]),
    PostMapping("/")
], userHttpController.prototype, "createNewUser", null);
__decorate([
    DeleteMapping("/me")
], userHttpController.prototype, "deleteUser", null);
__decorate([
    GetMapping("/me")
], userHttpController.prototype, "getUserAccount", null);
userHttpController = __decorate([
    Middleware([json()]),
    RestController("/users")
], userHttpController);
export { userHttpController };
const router = express.Router();
const httpController = new userHttpController();
router.use(json());
router.get("/me", httpController.getUserAccount);
router.post("/", Validators.validateUser, httpController.createNewUser);
router.delete("/me", httpController.deleteUser);
//export {router as UserHttpController}
//# sourceMappingURL=user.http.controller.js.map