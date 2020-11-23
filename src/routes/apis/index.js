import express from 'express'
import UserController from '../../controllers/UserController'
import BiodataController from '../../controllers/BiodataController'
import HistoryController from '../../controllers/HistoryController'
import GameController from '../../controllers/GameController'

const router = express.Router()

router.get('/all', UserController.getAll)
router.get('/users', UserController.get)
router.get('/users/:id', UserController.getById)
router.post('/users', UserController.create)
router.post('/users/all', UserController.createAll)
router.patch('/users/:id', UserController.update)
router.delete('/users/:id', UserController.delete)
router.delete('/users/del/all', UserController.deleteAll)

router.get('/bios', BiodataController.get)
router.get('/bios/:id', BiodataController.getById)
router.post('/bios/:id', BiodataController.create)
router.patch('/bios/:id', BiodataController.update)
router.delete('/bios/:id', BiodataController.delete)

router.get('/histories', HistoryController.get)
router.get('/histories/:id', HistoryController.getById)
router.post('/histories/:id', HistoryController.create)
router.patch('/histories/:id', HistoryController.update)
router.delete('/histories/:id', HistoryController.delete)

router.get('/history', GameController.getHistory)
router.post('/history', GameController.createHistory)
router.delete('/history', GameController.deleteHistory)

export default router