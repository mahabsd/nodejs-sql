const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
    const db = req.app.get('db');
    let sql = "CREATE TABLE users (name VARCHAR(255), fruitid VARCHAR(255))"
    db.query(sql, err => {
        if (err) {
            throw err
        }
        res.send('users table created')
    })
})
router.get('/adduser', (req, res) => {
    const db = req.app.get('db');

    let sql = "INSERT INTO users (name, fruitid) VALUES ('maha', '1')"
    db.query(sql, err => {
        if (err) {
            throw err
        }
        res.send('user added')
    })
})
router.get('/joinUsersFruits',(req,res)=>{
    let sql = 'SELECT users.name AS user ,fruits.name AS fruitid FROM users JOIN fruits ON users.fruitid = fruits.id  '
    const db = req.app.get('db');
db.query(sql, (err, result)=>{
    if (err) throw err;
res.send(result)
})

})
module.exports = router;