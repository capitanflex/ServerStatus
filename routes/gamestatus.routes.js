import Router from 'express';
const router = new Router();
import GamestatusRoutesController from '../controllers/gamestatus.controller.js'


router.post('/gamestatus/', GamestatusRoutesController.createGameStatus);
router.get('/gamestatus/', GamestatusRoutesController.getGameStats);
router.delete(' /gamestatus/:id', GamestatusRoutesController.deleteGameStatus)

export default router;