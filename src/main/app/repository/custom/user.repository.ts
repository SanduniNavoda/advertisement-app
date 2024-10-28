import {UserTo} from "../../to/user.to";
import {UserEntity} from "../../entity/user.entity";
import {CrudRepository} from "../crud.repository";

export interface UserRepository extends CrudRepository<UserEntity, string>{

}