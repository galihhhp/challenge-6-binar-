import express from 'express'
import ViewController from '../../controllers/ViewController'

const router = express.Router()

router.get('/', ViewController.getHomeView)
router.get('/dashboard', ViewController.getDashboardView)
router.get('/details', ViewController.getDetailsView)
router.get('/history', ViewController.getHistoryView)
router.get('/alldetails', ViewController.getAllDetailsView)
router.get('/admin', ViewController.getAdminLoginView)

export default router