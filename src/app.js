import express from 'express'
import usersRoutes from './routes/usuarios.routes.js'
import viajesRoutes from './routes/viajes.routes.js'
import reservasRoutes from './routes/reservas.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()

app.use(express.json())

app.use(indexRoutes)
app.use('/api', usersRoutes)
app.use('/api', viajesRoutes)
app.use('/api', reservasRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: 'endpoint not found'
    })
})

export default app;