import {Connection, PoolClient} from "pg";
import {UserRepositoryImpl} from "./custom/impl/user.repository.impl";
import {ImageRepositoryImpl} from "./custom/impl/image.repository.impl";
import {AdRepositoryImpl} from "./custom/impl/ad.repository.impl";
import {AdRepository} from "./custom/ad.repository";
import {ImageRepository} from "./custom/image.repository";
import {UserRepository} from "./custom/user.repository";
import {SuperRepository} from "./super.repository";
import {QueryRepositoryImpl} from "./custom/impl/query.repository.impl";


export enum RepositoryType{
    AD, USER, IMAGE, QUERY
}
export class FactoryRepository {

    private static INSTANCE: FactoryRepository = new FactoryRepository();

    private constructor() {
    }

    static getInstance(): FactoryRepository{
        return FactoryRepository.INSTANCE
    }

    getRepository(type: RepositoryType, connection: PoolClient): SuperRepository | null{//make only this method generic
        switch (type){
            case RepositoryType.USER: return new UserRepositoryImpl(connection);
            case RepositoryType.IMAGE: return new ImageRepositoryImpl(connection);
            case RepositoryType.AD: return new AdRepositoryImpl(connection);
            case RepositoryType.QUERY: return new QueryRepositoryImpl(connection);
            default: return null;
        }
    }
}