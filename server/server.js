const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 8080


//Muestra los registros (logs) de todas las peticiones HTTP por consola
app.use(morgan('tiny'))

// Route
app.get('/nfts', (req, res) => {
    const data = {
        id: 1,
        NFT: {
            serialNumber: '#0001',
            artName: 'Hunting',
            price: 0.089,
            url: ''
        },
        author: {
            name: 'Andrés Espinoza',
            country: 'Chile',
            age: 27,
            profileUrl: 'https://github.com/andres-espinoza'
        }
    }

    res.json(data)
})

app.listen(PORT, console.log(`Server is starting at ${PORT}`))