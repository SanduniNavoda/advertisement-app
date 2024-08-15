import {Module} from "./config/core.config.js";
import {userHttpController} from "./controller/user.http.controller.js";
import {AdvertisementHttpController} from "./controller/advertisement.http.controller.js";

@Module([userHttpController, AdvertisementHttpController])
export class AppModule{}