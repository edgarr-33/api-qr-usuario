const express = require('express')
const routes = express.Router()

routes.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM qr_usuarios', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO qr_usuarios set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send(' added!')
        })
    })
})

//get by id


routes.get('/:id_paciente', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM qr_usuarios WHERE id_paciente = ?',(req.body,req.params.id_paciente), (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})


routes.put('/:id_qr', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE qr_usuarios set ? WHERE id_qr = ?', [req.body, req.params.id_qr], (err, rows)=>{
            if(err) return res.send(err)

            res.send('book updated!')
        })
    })
})


module.exports = routes