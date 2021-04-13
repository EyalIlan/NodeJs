const express = require('express')
const app  = express()
const body = require('body-parser')
const MainRoutes = require('./routes/main')
const port = 8080


app.use(body.urlencoded({extended:true}))
app.use(body.json())


app.use(MainRoutes)

app.listen(port,(req,res) =>{
    console.log('server is up and running')
})