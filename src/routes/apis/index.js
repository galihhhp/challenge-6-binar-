import express from 'express'
import UserController from '../../controllers/UserController'
import BiodataController from '../../controllers/BiodataController'
import HistoryController from '../../controllers/HistoryController'

const router = express.Router()

router.get('/users', UserController.get)
router.get('/users/:id', UserController.getById)
router.post('/users/', UserController.create)
router.patch('/users/:id', UserController.update)
router.delete('/users/:id', UserController.delete)

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

export default router