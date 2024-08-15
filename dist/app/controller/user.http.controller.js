import express, { json } from "express";
import { pool } from "../database/pool.db.js";
import { validate } from "class-validator";
import { ErrorTo } from "../to/error.to.js";
export const controller = express.Router();
controller.use(json());
controller.get("/me", getUserAccount);
controller.post("/", validateUser, createNewUser);
controller.delete("/me", deleteUser);
async function validateUser(req, res, next) {
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
async function createNewUser(req, res) {
    const user = req.body;
    const connection = await pool.connect();
    //business validation
    //1. Find whether this email already exist
    //2. Find whether this contact number is already associated with another user
    try {
        await connection.query('INSERT INTO "user" (email, name, contact) VALUES ($1, $2, $3)', [user.email, user.name, user.contact]);
        connection.release();
        res.sendStatus(201);
    }
    catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
    finally {
        connection.release();
    }
}
function deleteUser(req, res) {
    console.log("Delete User");
}
function getUserAccount(req, res) {
    console.log("get User");
}
//# sourceMappingURL=user.http.controller.js.map