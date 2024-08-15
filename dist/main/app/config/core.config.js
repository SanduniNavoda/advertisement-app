import express from "express";
const CONTROLLERS = {}; //this object keeps all the controller objects such as user.http.controller.ts, advertisement.http.controller.ts
export function Module(controllers) {
    return function (constructor) { };
}
export function RestController(path = "/") {
    return function (constructor) {
        CONTROLLERS[constructor.name].path = path;
        CONTROLLERS[constructor.name].constructor = constructor;
    };
}
export function Middleware(middlewares) {
    return function (target, name, descriptor) {
        //to identify whether the decorator is put into class or method
        if (!name && !descriptor) {
            //class
            if (!CONTROLLERS[target.constructor.name])
                CONTROLLERS[target.constructor.name] = {};
            CONTROLLERS[target.constructor.name].middleware = middlewares;
        }
        else {
            //method
            if (!CONTROLLERS[target.constructor.name].handlers)
                CONTROLLERS[target.constructor.name].handlers = {};
            CONTROLLERS[target.constructor.name].handlers[name].middleware = middlewares;
        }
    };
}
export function GetMapping(path = "/") {
    return function (prototype, name, descriptor) {
        if (!CONTROLLERS[prototype.constructor.name])
            CONTROLLERS[prototype.constructor.name] = {};
        if (!CONTROLLERS[prototype.constructor.name].handlers)
            CONTROLLERS[prototype.constructor.name].handlers = {};
        CONTROLLERS[prototype.constructor.name].handlers[name] = {
            path,
            method: 'GET'
        };
    }; //since we use this in a method, method mapping
}
export function PostMapping(path = "/") {
    return function (prototype, name, descriptor) {
        if (!CONTROLLERS[prototype.constructor.name])
            CONTROLLERS[prototype.constructor.name] = {};
        if (!CONTROLLERS[prototype.constructor.name].handlers)
            CONTROLLERS[prototype.constructor.name].handlers = {};
        CONTROLLERS[prototype.constructor.name].handlers[name] = {
            path,
            method: 'POST'
        };
    };
}
export function PutMapping(path = "/") {
    return function (prototype, name, descriptor) {
        if (!CONTROLLERS[prototype.constructor.name])
            CONTROLLERS[prototype.constructor.name] = {};
        if (!CONTROLLERS[prototype.constructor.name].handlers)
            CONTROLLERS[prototype.constructor.name].handlers = {};
        CONTROLLERS[prototype.constructor.name].handlers[name] = {
            path,
            method: 'PUT'
        };
    };
}
export function DeleteMapping(path = "/") {
    return function (prototype, name, descriptor) {
        if (!CONTROLLERS[prototype.constructor.name])
            CONTROLLERS[prototype.constructor.name] = {};
        if (!CONTROLLERS[prototype.constructor.name].handlers)
            CONTROLLERS[prototype.constructor.name].handlers = {};
        CONTROLLERS[prototype.constructor.name].handlers[name] = {
            path,
            method: 'DELETE'
        };
    };
}
export function PatchMapping(path = "/") {
    return function (prototype, name, descriptor) {
        if (!CONTROLLERS[prototype.constructor.name])
            CONTROLLERS[prototype.constructor.name] = {};
        if (!CONTROLLERS[prototype.constructor.name].handlers)
            CONTROLLERS[prototype.constructor.name].handlers = {};
        CONTROLLERS[prototype.constructor.name].handlers[name] = {
            path,
            method: 'PATCH'
        };
    };
}
export class ExpressApp {
    static create(module) {
        const app = express();
        console.log(CONTROLLERS);
        return app;
    }
}
//# sourceMappingURL=core.config.js.map