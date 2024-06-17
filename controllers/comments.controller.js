import pool from "../db.js";

class GameCommentsController {
    async createComment(req, res) {
        try {
            const {gameid, comment, author, date} = req.body;
            const newComment = await pool.query('INSERT INTO comments (gameid, comment, author, date) values ($1, $2, $3, $4) RETURNING *', [gameid, comment, author, date]);
            res.json(newComment.rows[0])
        }
        catch (err) {
            console.error('Error set comment:', err);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async getGameComments (req, res) {
        try {
            console.log(req.body)
            const { gameid, lastCommentId, count = 15 } = req.body;

            let query;
            let params;

            if (lastCommentId) {
                query = `
                SELECT * FROM comments
                WHERE gameid = $1 AND id < $2
                ORDER BY id DESC
                LIMIT $3
            `;
                params = [gameid, lastCommentId, count];
            } else {
                query = `
                SELECT * FROM comments
                WHERE gameid = $1
                ORDER BY id DESC
                LIMIT $2
            `;
                params = [gameid, count];
            }

            const comments = await pool.query(query, params);
            console.log(comments.rows)
            res.json(comments.rows);
        } catch (err) {
            console.error('Error fetching game comments:', err);
            res.status(500).json({ error: 'Internal server error' });
        }
    };

    async getGameCommentsForDay(req, res) {
        console.log(req.body)
        try {
            console.log(req.body);
            const { gameid } = req.body;

            const query = `
            SELECT * FROM comments
            WHERE gameid = $1 AND date >= NOW() - INTERVAL '24 hours'
        `;
            const params = [gameid];

            const comments = await pool.query(query, params);
            console.log(comments.rows);
            res.json(comments.rows);
        } catch (err) {
            console.error('Error fetching game comments:', err);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}

export default new GameCommentsController()