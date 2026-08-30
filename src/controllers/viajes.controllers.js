import {pool} from '../db.js'

export const getViajes = async (req, res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM viajes')
        res.json(rows)
    }catch (error){
        return res.status(500).json({
            message: "Something goes wrong"
        })
    }
}

export const getViaje = async (req, res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM viajes WHERE id = ?', [req.params.id])

        if (rows.length <= 0) return res.status(404).json({
            message: 'Viaje not found'
        })

        res.json(rows[0])
    }catch (error){
        return res.status(500).json({
            message: "Something goes wrong"
        })
    }
}

export const createViajes = async (req, res) => {
    const {origen, destino, fecha, precio, cupos} = req.body
    try{
        const [rows] = await pool.query(
            'INSERT INTO viajes (origen, destino, fecha, precio, cupos) VALUES (?, ?, ?, ?, ?)',
            [origen, destino, fecha, precio, cupos]
        )
        res.send({
            id: rows.insertId,
            origen,
            destino,
            fecha,
            precio,
            cupos
        })
    }catch (error){
        return res.status(500).json({
            message: "Something goes wrong"
        })
    }
}
export const deleteViajes = async (req, res) => {
     try{
        const [result] = await pool.query('DELETE FROM viajes WHERE id = ?', [req.params.id])

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

export const updateViajes = async (req, res) => {
    const {id} = req.params
    const {origen, destino, fecha, precio, cupos} = req.body
     try{   
        const [result] = await pool.query(
            `UPDATE viajes SET origen = IFNULL(?, origen), destino = IFNULL(?, destino), 
            fecha = IFNULL(?, fecha), precio = IFNULL(?, precio), cupos = IFNULL(?, cupos) WHERE id = ?`, 
            [origen, destino, fecha, precio, cupos, id])

        if (result.affectedRows <= 0) return res.status(404).json({
            message: 'Viaje not found'
        })

        const [rows] = await pool.query('SELECT * FROM viajes WHERE id = ?', [id])

        res.json(rows[0])
    }catch (error){
        return res.status(500).json({
            message: "Something goes wrong"
        })
    }
}