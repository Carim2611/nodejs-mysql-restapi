import {Router} from 'express'
import {getReservas, getReserva, createReservas, updateReservas, deleteReservas} from '../controllers/reservas.controllers.js'

const router = Router()

router.get('/reservas', getReservas)

router.get('/reservas/:id', getReserva)

router.post('/reservas', createReservas)

router.patch('/reservas/:id', updateReservas)

router.delete('/reservas/:id', deleteReservas)

export default router