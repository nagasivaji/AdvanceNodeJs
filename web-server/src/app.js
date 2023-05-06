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

const getWeatherMd1 = (location, res) => {
    console.log('Calling api...')
    fetch('http://api.weatherstack.com/current?access_key=ed3ea9627bb950b22b35cd2b31f98c44&query=' + location)
        .then(response => response.json())
        .then(json => {
            console.log('Received response: ', json.location.name)
            console.log('Sending responsed....')
            res.send(json)
        })
        .catch(err => console.log('Error: ', err))
    console.log('End of api function....')
}

const getWeatherMd2 = async(location, res) => {
    console.log('Calling api...')
    const response = await fetch('http://api.weatherstack.com/current?access_key=ed3ea9627bb950b22b35cd2b31f98c44&query=' + location)
    const json = await response.json()
    console.log('Received response: ', json.location.name)
    console.log('Sending responsed....')
    res.send(json)
    console.log('End of api function....')
}

app.get('/test', (req, res) => {
    console.log('Location: ', req.query.location)

    // Using promises and .then() 
    // getWeatherMd1('India', res)

    // Using async/await
    getWeatherMd2('India', res)

    console.log('End of test route')
})


app.get('*', (req, res) => {
    res.render('error')
})



app.listen(3000, () => {
    console.log('Server listening on port 3000!')
})