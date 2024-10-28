import {AdRepository} from "../ad.repository";
import {AdEntity} from "../../../entity/ad.entity";

export class AdRepositoryImpl implements AdRepository{

    constructor(private connection: PoolClient) {
    }

    count(): Promise<number> {
        const {rowCount} = await this.connection.query('SELECT * FROM ad');
        return rowCount!;
    }

    deleteById(pk: number): Promise<void> {
        return Promise.resolve(undefined);
    }

    existsById(pk: number): Promise<boolean> {
        return Promise.resolve(false);
    }

    findAll(): Promise<Array<AdEntity>> {
        return Promise.resolve(undefined);
    }

    findById(pk: number): Promise<AdEntity> {
        return Promise.resolve(undefined);
    }

    save(entity: AdEntity): Promise<number> {
        return Promise.resolve(undefined);
    }

    update(entity: AdEntity): Promise<void> {
        return Promise.resolve(undefined);
    }
}