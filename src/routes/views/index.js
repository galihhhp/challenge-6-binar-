import express from 'express'
import ViewController from '../../controllers/ViewController'
import GameController from '../../controllers/GameController'

const router = express.Router()

router.get('/', ViewController.getHomeView)
router.get('/dashboard', ViewController.getDashboardView)
router.get('/details', ViewController.getDetailsView)
router.get('/history', ViewController.getHistoryView)
router.get('/alldetails', ViewController.getAllDetailsView)
router.get('/admin', ViewController.getAdminLoginView)
router.get('/createUser', ViewController.getFormsView)
router.get('/game', GameController.getIndexView)
router.get('/game/history', GameController.getHistoryView)

export default router