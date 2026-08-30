import {pool} from '../db.js'

export const getUsers = async (req, res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM usuarios')
        res.json(rows)
    }catch (error){
        return res.status(500).json({
            message: "Something goes wrong"
        })
    }
}

export const getUser = async (req, res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM usuarios WHERE id = ?', [req.params.id])

        if (rows.length <= 0) return res.status(404).json({
            message: 'User not found'
        })

        res.json(rows[0])
    }catch (error){
        return res.status(500).json({
            message: "Something goes wrong"
        })
    }
}

export const createUsers = async (req, res) => {
    const {nombre, apellido, email, fecha_nac, pais} = req.body
    try{
        const [rows] = await pool.query(
            'INSERT INTO usuarios (nombre, apellido, email, fecha_nac, pais) VALUES (?, ?, ?, ?, ?)',
            [nombre, apellido, email, fecha_nac, pais]
        )
        res.send({
            id: rows.insertId,
            nombre,
            apellido,
            email,
            fecha_nac,
            pais
        })
    }catch (error){
        return res.status(500).json({
            message: "Something goes wrong"
        })
    }
}
export const deleteUsers = async (req, res) => {
     try{
        const [result] = await pool.query('DELETE FROM usuarios WHERE id = ?', [req.params.id])

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

export const updateUsers = async (req, res) => {
    const {id} = req.params
    const {nombre, apellido, email, fecha_nac, pais} = req.body
     try{
        const [result] = await pool.query(
            `UPDATE usuarios SET nombre = IFNULL(?, nombre), apellido = IFNULL(?, apellido), 
            email = IFNULL(?, email), fecha_nac = IFNULL(?, fecha_nac), pais = IFNULL(?, pais) WHERE id = ?`, 
            [nombre, apellido, email, fecha_nac, pais, id])

        if (result.affectedRows <= 0) return res.status(404).json({
            message: 'User not found'
        })

        const [rows] = await pool.query('SELECT * FROM usuarios WHERE id = ?', [id])

        res.json(rows[0])
    }catch (error){
        return res.status(500).json({
            message: "Something goes wrong"
        })
    }
}