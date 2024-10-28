import {ImageRepository} from "../image.repository";
import {ImageEntity} from "../../../entity/image.entity";
import {PoolClient} from "pg";

export class ImageRepositoryImpl implements ImageRepository{

    constructor(private connection: PoolClient) {
    }
    async count(): Promise<number> {
        const {rowCount} = await this.connection.query('SELECT * FROM image');
        return rowCount!;
    }

    async deleteById(imageId: number): Promise<void> {
        await this.connection.query('DELETE FROM "image" WHERE image_id = $1', [imageId]);
    }

    async existsById(imageId: number): Promise<boolean> {
        return (!!(await this.findById(imageId)));
    }

    async findAll(): Promise<Array<ImageEntity>> {
        const {rows} = await this.connection.query('SELECT * FROM "image"');
        return rows;
    }

    async findById(imageId: number): Promise<ImageEntity> {
        const {rows: [image]} = await this.connection.query('SELECT * FROM image WHERE imageId = $1',
            [imageId]);
        return image;
    }

    async save(image: ImageEntity): Promise<number> {
        await this.connection.query('INSERT INTO image (imageId, adId, url) VALUES ($1, $2, $3)',
            [image.imageId, image.adId, image.url]);
        return image.imageId;
    }

    async update(image: ImageEntity): Promise<void> {
        await this.connection.query('UPDATE image SET adId=$1, url=$2 WHERE imageId=$3',
            [image.adId, image.url, image.imageId])

    }
}