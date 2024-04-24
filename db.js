import pg from 'pg'
const { Pool, Client } = pg


const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'web-app',
    password: 'sql',
    port: 5432,
})

export default pool;