const path = require('path');
const express = require('express')
const hbs = require('hbs')

const app = express()

// Setting up handlebar engine
app.set('view engine', 'hbs')
    // define path for views
app.set('views', path.join(__dirname, '../templates/views'))

// configuring partials using hbs
hbs.registerPartials(path.join(__dirname, '../templates/partials'))

// setting up express  static directory
app.use(express.static(path.join(__dirname, '../public')))


app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home Page',
        description: 'Welcome to this weather application!!!'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Page',
        firstname: 'nagasivaji',
        lastname: 'sirigineedi'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page',
        data: 'Please enter your quire here...'
    })
})




app.listen(3000, () => {
    console.log('Server listening on port 3000!')
})