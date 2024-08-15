import express from 'express';
import { controller as AdvertisementController } from "./controller/advertisement.http.controller.js";
import { controller as UserController } from "./controller/user.http.controller.js";
import { pingToDatabase } from "./database/pool.db.js";
const app = express();
app.use('/advertisements', AdvertisementController);
app.use('/users', UserController);
app.listen(5050, async () => {
    console.log("trying to connect with db server");
    await pingToDatabase();
    console.log("Server is listening at 5050");
});
//# sourceMappingURL=main.js.map