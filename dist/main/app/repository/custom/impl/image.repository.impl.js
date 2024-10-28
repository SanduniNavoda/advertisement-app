export class ImageRepositoryImpl {
    connection;
    constructor(connection) {
        this.connection = connection;
    }
    async count() {
        const { rowCount } = await this.connection.query('SELECT * FROM image');
        return rowCount;
    }
    async deleteById(imageId) {
        await this.connection.query('DELETE FROM "image" WHERE image_id = $1', [imageId]);
    }
    async existsById(imageId) {
        return (!!(await this.findById(imageId)));
    }
    async findAll() {
        const { rows } = await this.connection.query('SELECT * FROM "image"');
        return rows;
    }
    async findById(imageId) {
        const { rows: [image] } = await this.connection.query('SELECT * FROM image WHERE imageId = $1', [imageId]);
        return image;
    }
    async save(image) {
        await this.connection.query('INSERT INTO image (imageId, adId, url) VALUES ($1, $2, $3)', [image.imageId, image.adId, image.url]);
        return image.imageId;
    }
    async update(image) {
        await this.connection.query('UPDATE image SET adId=$1, url=$2 WHERE imageId=$3', [image.adId, image.url, image.imageId]);
    }
}
//# sourceMappingURL=image.repository.impl.js.map