import {pool} from '../db.js'

export const getReservas = async (req, res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM reservas')
        res.json(rows)
    }catch (error){
        return res.status(500).json({
            message: "Something goes wrong"
        })
    }
}

export const getReserva = async (req, res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM reservas WHERE id = ?', [req.params.id])

        if (rows.length <= 0) return res.status(404).json({
            message: 'Reserva not found'
        })

        res.json(rows[0])
    }catch (error){
        return res.status(500).json({
            message: "Something goes wrong"
        })
    }
}

export const createReservas = async (req, res) => {
    const {usuario_id, viaje_id, fecha_reserva, estado} = req.body
    try{
        const [rows] = await pool.query(
            'INSERT INTO reservas (usuario_id, viaje_id, fecha_reserva, estado) VALUES (?, ?, ?, ?)',
            [usuario_id, viaje_id, fecha_reserva, estado]
        )
        res.send({
            id: rows.insertId,
            usuario_id,
            viaje_id,
            fecha_reserva,
            estado
        })
    }catch (error){
        return res.status(500).json({
            message: "Something goes wrong"
        })
    }
}
export const deleteReservas = async (req, res) => {
     try{
        const [result] = await pool.query('DELETE FROM reservas WHERE id = ?', [req.params.id])

        if (result.affectedRows === 0) return res.status(404).json({
            message: 'User not found'
        })

        res.sendStatus(204)
    }catch (error){
        return res.status(500).json({
            message: "Something goes wrong"
        })  
    }   
}

export const updateReservas = async (req, res) => {
    const {id} = req.params
    const {estado} = req.body
     try{
        const [result] = await pool.query(
            `UPDATE reservas estado = IFNULL(?, estado) WHERE id = ?`, 
            [estado, id])

        if (result.affectedRows <= 0) return res.status(404).json({
            message: 'Reserva not found'
        })

        const [rows] = await pool.query('SELECT * FROM reservas WHERE id = ?', [id])

        res.json(rows[0])
    }catch (error){
        return res.status(500).json({
            message: "Something goes wrong"
        })
    }
}