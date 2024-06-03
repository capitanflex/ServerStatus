import Router from 'express';
const router = new Router();
import GameCommentsController from '../controllers/comments.controller.js'


router.post('/comments/', GameCommentsController.createComment);
router.post('/comments-read/', GameCommentsController.getGameComments);
router.post('/comments-day/', GameCommentsController.getGameCommentsForDay);

export default router;