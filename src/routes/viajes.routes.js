import {Router} from 'express'
import {getViajes, getViaje, createViajes, deleteViajes, updateViajes} from '../controllers/viajes.controllers.js'

const router = Router()

router.get('/viajes', getViajes)

router.get('/viajes/:id', getViaje)

router.post('/viajes', createViajes)

router.patch('/viajes/:id', deleteViajes)

router.delete('/viajes/:id', updateViajes)

export default router