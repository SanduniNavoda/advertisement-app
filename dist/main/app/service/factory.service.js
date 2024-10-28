import { UserServiceImpl } from "./custom/impl/user.service.impl.js";
import { AdServiceImpl } from "./custom/impl/ad.service.impl.js";
export var ServiceType;
(function (ServiceType) {
    ServiceType[ServiceType["USER"] = 0] = "USER";
    ServiceType[ServiceType["AD"] = 1] = "AD";
})(ServiceType || (ServiceType = {}));
export class FactoryService {
    static INSTANCE = new FactoryService();
    constructor() {
    }
    getInstance() {
        return FactoryService.INSTANCE;
    }
    getService(type) {
        switch (type) {
            case ServiceType.USER: return new UserServiceImpl();
            case ServiceType.AD: return new AdServiceImpl();
        }
    }
}
//# sourceMappingURL=factory.service.js.map