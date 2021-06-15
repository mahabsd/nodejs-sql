const express = require('express');
const router = express.Router();

router.get('/addcustomer', (req, res) => {
    const db = req.app.get('db');

    var sql = "INSERT INTO customers (name, address) VALUES ('helene', 'NYK city')";
    let query = db.query(sql, err => {
        if (err) {
            throw err
        }
        res.send('customer added')
    })
})

router.get('/getcustomer', (req, res) => {
    const db = req.app.get('db');

    db.query("SELECT * FROM customers", function (err, result, fields) {
        if (err) throw err;
        res.send(result)
    });
})

router.get('/getOnecustomer', (req, res) => {
    const db = req.app.get('db');

    let sql = "SELECT * FROM customers WHERE address = 'beverly hills 69'"
    db.query(sql, function (err, result, fields) {
        if (err) throw err;
        res.send(result)
    });

})
router.get('/orderbyname', (req, res) => {
    const db = req.app.get('db');

    let sql = "SELECT * FROM customers ORDER BY address"
    db.query(sql, (err, result, fields) => {
        if (err) throw err;
        res.send(`the results are : ${result} and the fields are : ${fields}`)
    })
})
router.get('/deletecustomer', (req, res) => {
    const db = req.app.get('db');

    let sql = "DELETE FROM customers WHERE address = 'beverly hills 69'"
    db.query(sql, (err, result, fields) => {
        if (err) throw err;
        res.send("customer deleted" + result)
    })
})
router.get('/updatecustomer', (req, res) => {
    const db = req.app.get('db');

    var sql = "UPDATE customers SET name = 'mike' WHERE name = 'harvey specter'";
    db.query(sql, (err, result, fields) => {
        if (err) throw err;
        res.send("customer updated" + result)
    })
})
router.get('/getLimitedCustomers', (req, res) => {
    const db = req.app.get('db');

    let sql = "SELECT * FROM customers LIMIT 5";
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send("5 customers " + result)
        console.log(result);
    })
})

module.exports = router;