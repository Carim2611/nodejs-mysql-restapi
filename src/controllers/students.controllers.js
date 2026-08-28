import {pool} from '../db.js'

export const getStudents = async (req, res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM students')
        res.json(rows)
    }catch (error){
        return res.status(500).json({
            message: "Something goes wrong"
        })
    }
}

export const getStudent = async (req, res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM students WHERE id = ?', [req.params.id])

        if (rows.length <= 0) return res.status(404).json({
            message: 'Student not found'
        })

        res.json(rows[0])
    }catch (error){
        return res.status(500).json({
            message: "Something goes wrong"
        })
    }
}

export const createStudents = async (req, res) => {
    const {name, note} = req.body
    try{
        const [rows] = await pool.query('INSERT INTO students (name, note) VALUES (?, ?)', [name, note])
        res.send({
            id: rows.insertId,
            name,
            note
        })
    }catch (error){
        return res.status(500).json({
            message: "Something goes wrong"
        })
    }
}
export const deleteStudents = async (req, res) => {
     try{
        const [result] = await pool.query('DELETE FROM students WHERE id = ?', [req.params.id])

        if (result.affectedRows === 0) return res.status(404).json({
            message: 'Student not found'
        })

        res.sendStatus(204)
    }catch (error){
        return res.status(500).json({
            message: "Something goes wrong"
        })
    }   
}

export const updateStudents = async (req, res) => {
    const {id} = req.params
    const {name, note} = req.body
     try{
        const [result] = await pool.query('UPDATE students SET name = IFNULL(?, name), note = IFNULL(?, note) WHERE id = ?', [name, note, id])

        if (result.affectedRows <= 0) return res.status(404).json({
            message: 'Student not found'
        })

        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id])

        res.json(rows[0])
    }catch (error){
        return res.status(500).json({
            message: "Something goes wrong"
        })
    }
}