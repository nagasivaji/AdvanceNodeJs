console.log('hello this is from script.js file  under public directory...')


function getWeatherData() {
    console.log('Calling getWeatherData')
    fetch('http://localhost:3000/test?location=India')
        .then(res => res.json())
        .then(json => {
            console.log(json)
            document.getElementById('waetherData').innerHTML = `
            <p>
                city: ${json.city}, 
                country: ${json.country}, 
                humidity: ${json.humidity}, 
                temperature: ${json.temperature}, 
                windSpeed: ${json.windSpeed}
            </p>
            `
        })
}