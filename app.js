const express = require('express')
const config = require('config')
const path = require('path')
const mongoose = require('mongoose')

const app = express()

app.use(express.json({ extended: true }))

app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/donation', require('./routes/donationData.routes'))


const PORT = config.get('port') || 5000

async function start(){
    try{
        await mongoose.connect("mongodb+srv://koala:qwerty12@cluster0.52ayn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true
    }, console.log("mongo connected"))       
    app.listen(PORT, () => console.log("Server started on port http://localhost:" + PORT))
    //console.log("mongo connected")  
    } catch (e) {
        console.log('Server error', e.message)
        process.exit(1)
    }
}

start()