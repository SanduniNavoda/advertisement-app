import express from "express";

type Handler = {
    path?: string,
    method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
    middleware?: Array<Function>
}

type Handlers = {
    [handler: string]: Handler
}

type Controller= {
    path?: string,
    middleware?: Array<Function>,
    handlers?: Handlers,
    constructor: Function
}

type Controllers = {
    [controller: string]: Controller
}

const CONTROLLERS: Controllers = {}//this object keeps all the controller objects such as user.http.controller.ts, advertisement.http.controller.ts
export function Module(controllers: Array<Function>){
    return function (constructor: Function){}
}
export function RestController(path: string = "/"){
    return function (constructor: Function){
        CONTROLLERS[constructor.name].path = path;
        CONTROLLERS[constructor.name].constructor = constructor;
    }
}
export function Middleware(middlewares: Array<Function>){
    return function(target: Object | Function, name?: string, descriptor?: PropertyDescriptor){
        //to identify whether the decorator is put into class or method
        if(!name && !descriptor){
            //class
            if (!CONTROLLERS[target.constructor.name]) CONTROLLERS[target.constructor.name] = {};
            CONTROLLERS[target.constructor.name].middleware = middlewares;
        }else{
            //method
            if (!CONTROLLERS[target.constructor.name].handlers) CONTROLLERS[target.constructor.name].handlers = {}
            CONTROLLERS[target.constructor.name].handlers![name!].middleware = middlewares;
        }
    }
}

export function GetMapping(path: string = "/"){
    return function(prototype: Object, name: string, descriptor: PropertyDescriptor){
        if (!CONTROLLERS[prototype.constructor.name]) CONTROLLERS[prototype.constructor.name] = {};
        if (!CONTROLLERS[prototype.constructor.name].handlers) CONTROLLERS[prototype.constructor.name].handlers = {}
        CONTROLLERS[prototype.constructor.name].handlers![name] = {
            path,
            method: 'GET'
        }
    }//since we use this in a method, method mapping
}
export function PostMapping(path: string = "/"){
    return function(prototype: Object, name: string, descriptor: PropertyDescriptor){
        if (!CONTROLLERS[prototype.constructor.name]) CONTROLLERS[prototype.constructor.name] = {}
        if (!CONTROLLERS[prototype.constructor.name].handlers) CONTROLLERS[prototype.constructor.name].handlers = {}
        CONTROLLERS[prototype.constructor.name].handlers![name] = {
            path,
            method: 'POST'
        }
    }
}
export function PutMapping(path: string = "/"){
    return function(prototype: Object, name: string, descriptor: PropertyDescriptor){
        if (!CONTROLLERS[prototype.constructor.name]) CONTROLLERS[prototype.constructor.name] = {};
        if (!CONTROLLERS[prototype.constructor.name].handlers) CONTROLLERS[prototype.constructor.name].handlers = {}
        CONTROLLERS[prototype.constructor.name].handlers![name] = {
            path,
            method: 'PUT'
        }
    }
}
export function DeleteMapping(path: string = "/"){
    return function(prototype: Object, name: string, descriptor: PropertyDescriptor){
        if (!CONTROLLERS[prototype.constructor.name]) CONTROLLERS[prototype.constructor.name] = {};
        if (!CONTROLLERS[prototype.constructor.name].handlers) CONTROLLERS[prototype.constructor.name].handlers = {}
        CONTROLLERS[prototype.constructor.name].handlers![name] = {
            path,
            method: 'DELETE'
        }
    }
}
export function PatchMapping(path: string = "/"){
    return function(prototype: Object, name: string, descriptor: PropertyDescriptor){
        if (!CONTROLLERS[prototype.constructor.name]) CONTROLLERS[prototype.constructor.name] = {};
        if (!CONTROLLERS[prototype.constructor.name].handlers) CONTROLLERS[prototype.constructor.name].handlers = {}
        CONTROLLERS[prototype.constructor.name].handlers![name] = {
            path,
            method: 'PATCH'
        }
    }
}

export class ExpressApp{
    static create(module: Function){
        const app = express();
        console.log(CONTROLLERS)
        return app;
    }
}