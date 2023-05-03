const path = require('path');
const express = require('express')

const app = express()

app.set('view engine', 'hbs')

app.use(express.static(path.join(__dirname, '../public')))


app.get('/', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.send({
        id: 3,
        page: 'about',
        titile: 'About',
        description: 'This is from about page!',
    })
})


app.listen(3000, () => {
    console.log('Server listening on port 3000!')
})