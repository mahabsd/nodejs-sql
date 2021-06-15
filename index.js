const express = require('express');
const mysql = require('mysql');
let bodyParser = require('body-parser');

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database: 'nodemysql'
})
db.connect(err=>{
    if (err) {
        throw err
    }
    console.log('hello mysql');
})


const app =express()
app.set('db', db);
app.get('/createDB',(req,res)=>{
    let sql='CREATE DATABASE nodemysql'
    db.query(sql, err=>{
        if (err) {
            throw err
        }
        res.send('db created')
    })
})

let cors = require('cors');

const users = require('./users');
const fruits = require('./fruits');
const customers = require('./customer');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use('/users', users);
app.use('/fruits', fruits);
app.use('/customers', customers);






//combine two or more tables : 
app.get('/joinTables', (req,res)=>{
    let sql = "SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id";


})
app.listen(3000,'127.0.0.1', ()=>{
    console.log('server started');
})