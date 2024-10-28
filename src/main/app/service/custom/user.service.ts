import {UserTo} from "../../to/user.to";

export interface UserService{

    createNewUserAccount(user: UserTo): void
}