import Router from 'express';
const router = new Router();
import GameController from '../controllers/game.controller.js'

router.post('/game', GameController.createGame)
router.get('/game', GameController.getGames)
router.get('/game/:id', GameController.getOneGame)
router.put('/game', GameController.updateGame)
router.delete(' /game/:id', GameController.deleteGame)

export default router;