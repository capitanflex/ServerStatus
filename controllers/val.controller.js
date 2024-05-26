import pool from "../db.js";

export async function parseValStatus(data) {
    try {
        console.log("data: " + JSON.stringify(data.id));
        const gameid = 1;
        const country = data.name;
        const incidents = data.incidents.join(';');
        const responseTime = data.responseTime;
        const formattedDateTime = new Date(Date.now() + 3 * 60 * 60 * 1000).toISOString().slice(0, 16).replace('T', ' ');

        await pool.query('INSERT INTO gamestatus (gameid, ping, errors, country, date ) values ($1, $2, $3, $4, $5) RETURNING *', [gameid, responseTime, incidents, country, formattedDateTime]);

    } catch (e) {
        console.error(e)
    }

}


