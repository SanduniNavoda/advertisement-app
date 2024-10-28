export interface CrudRepository <T, PK>{//define type parameters
    count(): Promise<number>;

    save(entity: T): Promise<PK>;//use the type parameters

    update(entity: T): Promise<void>;

    deleteById(pk: PK): Promise<void>;

    findById(pk: PK): Promise<T>;

    findAll(): Promise<Array<T>>;

    existsById(pk: PK): Promise<boolean>;
}