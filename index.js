const express = require('express')
const app = express()
const frases = require('./frases.json')
const port = process.env.PORT || 3300


app.get('/frases', async (req, res) => {
    try {
        const randomFrases = await frases[Math.floor(Math.random() * frases.length)]
        res.status(200).json(randomFrases)
        res.send(randomFrases)
    }
    catch (err) {

    }
})

app.listen(port, () => { console.log('serviodr rodando') }) 