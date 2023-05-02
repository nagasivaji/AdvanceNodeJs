const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('<h1>Hello World! </h1>')
})


app.get('/about', (req, res) => {
    res.send({
        id: 2,
        page: 'about',
        titile: 'About',
        description: 'This is from about page!',
    })
})


app.listen(3000, () => {
    console.log('Server listening on port 3000!')
})