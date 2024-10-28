import {ImageEntity} from "../../entity/image.entity";
import {AdEntity} from "../../entity/ad.entity";
import {CrudRepository} from "../crud.repository";

export interface AdRepository extends CrudRepository<AdEntity, number>{

}