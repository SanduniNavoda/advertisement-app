import express, {json, Request, Response} from "express";
import {DeleteMapping, GetMapping, Middleware, PostMapping, RestController} from "../config/core.config.js";


@Middleware([json])
@RestController("/ads")
export class AdvertisementHttpController{//now we can import this clas in another module
    @GetMapping("/")
    async getAllAdvertisements(req: Request,
                                  res: Response){
        console.log("Get all Advertisements")
    }


    @PostMapping("/")
     async postAdvertisement(req: Request,
                               res: Response){
        console.log("Post Advertisement");
    }

    @DeleteMapping("/")
     async deleteAdvertisement(req: Request,
                                 res: Response){
        console.log("Delete Advertisement");
    }

}

const router = express.Router();
const httpController = new AdvertisementHttpController();

router.get('/', httpController.getAllAdvertisements);
router.post('/', httpController.postAdvertisement);
router.delete('/:id', httpController.deleteAdvertisement);

//export {router as AdvertisementHttpController};


