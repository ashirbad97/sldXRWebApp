const express = require('express')
const path = require('path')
const app = express()
const morgan = require('morgan')
app.use(morgan('combined'))
const publicDirectoryPath = path.join(__dirname,'../public')
console.log(publicDirectoryPath)
app.use(express.static(publicDirectoryPath))
app.get('/',(req,res)=>res.send("Hello To Test at port 8001"))
app.get('/health-check', (req, res) => res.sendStatus(200));
app.listen(8001,()=>{
    console.log('SSL Check Server Started on Port 8001')
})
