const path = require('path');
const express = require('express')
const hbs = require('hbs');
const { get } = require('http');

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



const getWeather = async(location, res) => {
    try {
        const response = await fetch('http://api.weatherstack.com/current?access_key=ed3ea9627bb950b22b35cd2b31f98c44&query=' + location)
        const json = await response.json()
            // console.log(json)
        const data = {
            city: json.location.name,
            country: json.location.country,
            temperature: json.current.temperature,
            humidity: json.current.humidity,
            windSpeed: json.current.wind_speed
        }
        res.send(data)
    } catch (err) {
        if (err.name === 'TypeError') {
            res.send({
                message: 'Please enter a valid location',
                errorMessage: err.message
            })
        }
        res.send(err.message)
    }
}

app.get('/test', (req, res) => {
    console.log('Location: ', req.query.location)
    const location = req.query.location
    getWeather(location, res)
})


app.get('*', (req, res) => {
    res.render('error')
})



app.listen(3000, () => {
    console.log('Server listening on port 3000!')
})