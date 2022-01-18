const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const res = require('express/lib/response')

const app = express()

app.use('/api', require('./routes/auth.routes'))

const PORT = config.get('port') || 5000

async function start(){
    try{
        await mongoose.connect("mongodb+srv://koala:qwerty12@cluster0.5e57m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", () =>
        console.log("mongo connected")
        /*{
            //useNewUrlParser: true,
            //useUnifiedTopology: true,
            //useCreateIndex: true
        }*/)         
    } catch (e) {
        console.log('Server error', e.message)
        process.exit(1)
    }
}

start()

app.listen(PORT, () => console.log("Server started on port http://localhost:" + PORT))