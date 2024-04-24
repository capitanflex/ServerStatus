import pool from "../db.js";

class GamestatusController {
    async createGameStatus(req, res) {
        const { gameid, ping, errors } = req.body;
        const newGameStats = await pool.query('INSERT INTO gamestatus (gameid, ping, errors) values ($1, $2, $3) RETURNING *', [gameid, ping, errors]);
        res.json(newGameStats.rows[0])
    }

    async getGameStats(req, res) {
        const gameid = req.query.gameid;
        const gameStats = await pool.query('SELECT * FROM gamestatus where gameid = $1', [gameid]);
        res.json(gameStats.rows)
    }

    async deleteGameStatus(req, res) {
        const statId = req.params.id;
        const gameStats = await pool.query('DELETE FROM gamestatus where id = $1', [statId])
        res.json(gameStats.rows[0])
    }
}

export default new GamestatusController()