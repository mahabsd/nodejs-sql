const express = require('express');
const router = express.Router();
router.get('/fruits',(req,res)=>{
    const db = req.app.get('db');

    let sql = "CREATE TABLE fruits (name VARCHAR(255), id VARCHAR(255))"
         db.query(sql, err=>{
         if (err) {
             throw err
         }
         res.send('fruits table created')
     })
 })
router.get('/addfruit', (req,res)=>{
    const db = req.app.get('db');

    let sql = "INSERT INTO fruits(name, id) VALUES ('banana', '2')"
    db.query(sql, (err)=>{
        if(err) throw err
        res.send('fruit added successfully')
    })
})

module.exports = router;