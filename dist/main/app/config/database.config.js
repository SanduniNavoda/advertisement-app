import pg from 'pg';
const { Pool } = pg;
import 'dotenv/config';
export const pool = new Pool({
    user: process.env['DB_USER'],
    password: process.env['DB_PASSWORD'],
    database: process.env['DB_NAME'],
    host: process.env['DB_HOST'],
    port: +process.env['DB_PORT'],
    max: +(process.env['DB_POOL_MAX_CONNECTION'] ?? 10)
});
export async function pingToDatabase() {
    const connection = await pool.connect();
    connection.release();
}
//# sourceMappingURL=database.config.js.map