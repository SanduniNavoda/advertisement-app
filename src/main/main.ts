import {AppModule} from "./app/app.module.js";
import {ExpressApp} from "./app/config/core.config.js";

function bootstrap(){
    const app = ExpressApp.create(AppModule);
    app.listen(5050, ()=>{
        console.log("Server is listening at 5050");
    });
}

bootstrap();