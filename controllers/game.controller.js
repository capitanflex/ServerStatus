import pool from '../db.js';

class GameController {
    async createGame(req, res) {
        const { title } = req.body;
        const newGame = await pool.query('INSERT INTO game (title) values ($1) RETURNING *', [title]);
        res.json(newGame.rows[0])
    }

    async getGames(req, res) {
        const games = await pool.query('SELECT * FROM game')
        res.json(games.rows)
    }

    async getOneGame(req, res) {
        const id = req.params.id;
        const games = await pool.query('SELECT * FROM game where id = $1', [id])
        res.json(games.rows[0])
    }

    async updateGame(req, res) {
        const {id, title} = req.body;
        const games = await pool.query('UPDATE game set title = $1 where id = $2 RETURNING *', [title, id]);
        res.json(games.rows[0])
    }

    async deleteGame(req, res) {
        const id = req.params.id;
        const games = await pool.query('DELETE FROM game where id = $1', [id])
        res.json(games.rows[0])
    }
}

export default new GameController();