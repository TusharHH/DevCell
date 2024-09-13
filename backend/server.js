const express = require('express')
const app = express()

const mongoose = require('mongoose')
const cors = require('cors')
const bodyPaser = require('body-parser')
const todorouter = require('./routes/todoRoute')

require('dotenv').config();


( async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Connected");

        app.listen(process.env.PORT,()=>{
            console.log(process.env.PORT);
        })
        
    } catch (error) {
        console.log("Server: MongoDB: ",error);
    }
})()


app.use(cors())
app.use(bodyPaser.json())

app.use('/api',todorouter)

