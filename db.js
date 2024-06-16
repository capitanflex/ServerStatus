import pg from 'pg'
const { Pool, Client } = pg


const pool = new Pool({
    user: 'c92913_server_status_na4u_ru',
    host: 'postgres.c92913.h2',
    database: 'c92913_server_status_na4u_ru_web_app',
    password: 'WoBnaMucdutux38',
    port: 5432,
})

export default pool;