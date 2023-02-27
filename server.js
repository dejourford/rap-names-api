const express = require('express')
const app = express()
const PORT = 8


const rappers = {
    'drake': {
        'age': 30,
        'birthLocation': 'Canada',
        'birthName': 'Aubrey Drake Graham'
    },
    'lil wayne': {
        'age': 40,
        'birthLocation': 'New Orleans, Louisiana',
        'birthName': 'Dwayne Michaael Carter Jr.'
    },
    'lil baby': {
        'age': 28,
        'birthLocation': 'Atlanta',
        'birthName': 'Dominique Armani Jones'
    },
    'da baby': {
        'age': 31,
        'birthLocation': 'Charlotte, North Carolina',
        'birthName': 'Jonathan Lyndale Kirk'
    }

}


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
