import {Router} from 'express'
import {getReservas, getReserva, createReservas, deleteReservas, updateReservas} from '../controllers/reservas.controllers.js'

const router = Router()

router.get('/reservas', getReservas)

router.get('/reservas/:id', getReserva)

router.post('/reservas', createReservas)

router.patch('/reservas/:id', deleteReservas)

router.delete('/reservas/:id', updateReservas)

export default router