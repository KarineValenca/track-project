const express = require('express')
const mongoose = require('mongoose')

const app = express()

const mongoUri = 'mongodb+srv://admin:admin@greatecluster-azzir.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(mongoUri, {
    useNewUrlParser: true, 
    useCreateIndex: true
})

mongoose.connection.on('connected', () => {
    console.log('Connected to mongo instance')
})

mongoose.connection.on('error', (err) => {
    console.log('Erro connecting to mongo', err)
})

app.get('/', (req, res) => {
    res.send("Hi There!")
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})
