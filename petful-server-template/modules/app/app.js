const express = require('express')
const cors = require('cors')

const app = express()

app.get('/', (req, res) => {
    res
       .status(200)
       .send('Hello, world!')
});

app.use(cors())

app.use('/api/people', require('../people/people.router'))
app.use('/api/pets', require('../pets/pets.router'))

module.exports = app
