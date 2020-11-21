import express from 'express'
import UserController from '../../controllers/UserController'
import BiodataController from '../../controllers/BiodataController'
import HistoryController from '../../controllers/HistoryController'

const router = express.Router()

router.get('/users', UserController.get)
router.post('/users/:id', UserController.create)
router.patch('/users:id', UserController.update)
router.delete('/users:id', UserController.delete)

router.get('/bios', BiodataController.get)
router.post('/bios/:id', BiodataController.create)
router.patch('/bios:id', BiodataController.update)
router.delete('/bios:id', BiodataController.delete)

router.get('/histories', HistoryController.get)
router.post('/histories/:id', HistoryController.create)
router.patch('/histories:id', HistoryController.update)
router.delete('/histories:id', HistoryController.delete)

export default router