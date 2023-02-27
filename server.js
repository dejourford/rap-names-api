const express = require('express')
const app = express()
const PORT = 8

app.listen(PORT, () => {
    console.log(`the server is running on port ${PORT}`)
})

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/styles.css', (request, response) => {
    response.sendFile(__dirname + '/styles.css')
})

app.get('/main.js', (request, response) => {
    response.sendFile(__dirname + '/main.js')
})

app.get('/api', (request, response) => {
    response.json()
})
