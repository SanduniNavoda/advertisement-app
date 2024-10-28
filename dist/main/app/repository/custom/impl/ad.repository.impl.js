export class AdRepositoryImpl {
    connection;
    constructor(connection) {
        this.connection = connection;
    }
    count() {
        const { rowCount } = await this.connection.query('SELECT * FROM ad');
        return rowCount;
    }
    deleteById(pk) {
        return Promise.resolve(undefined);
    }
    existsById(pk) {
        return Promise.resolve(false);
    }
    findAll() {
        return Promise.resolve(undefined);
    }
    findById(pk) {
        return Promise.resolve(undefined);
    }
    save(entity) {
        return Promise.resolve(undefined);
    }
    update(entity) {
        return Promise.resolve(undefined);
    }
}
//# sourceMappingURL=ad.repository.impl.js.map