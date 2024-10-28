import express, {json, Request, Response} from "express";
import {DeleteMapping, GetMapping, Middleware, PostMapping, RestController} from "../config/core.config.js";


@Middleware([json()])
@RestController("/users/:user/ads")
export class AdvertisementHttpController{//now we can import this clas in another module
    @GetMapping("/")
    async findAllAdvertisements(req: Request,
                                  res: Response){
        console.log("Get all Advertisements");
    }


    @PostMapping("/")
     async postAdvertisement(req: Request,
                               res: Response){
        console.log("Post Advertisement");
    }

    @DeleteMapping("/:id")
     async deleteAdvertisement(req: Request,
                                 res: Response){
        console.log("Delete Advertisement");
    }

}


//export {router as AdvertisementHttpController};


