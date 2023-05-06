console.log('hello this is from script.js file  under public directory...')


function getWeatherData() {
    console.log('Calling getWeatherData')
    const cityName = document.getElementById('cityName').value
    fetch('http://localhost:3000/weather?location=' + cityName)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            if (!json.isError) {
                document.getElementById('waetherData').innerHTML = `
                <p>
                    city: ${json.city}, <br>
                    country: ${json.country}, <br>
                    humidity: ${json.humidity}, <br>
                    temperature: ${json.temperature}, <br>
                    windSpeed: ${json.windSpeed} <br>
                </p>
                `
            } else {
                document.getElementById('waetherData').innerHTML = `
                <p>
                    Error: ${json.errorTitle}, <br>
                    Error Message: ${json.errorMessage}
                </p>
                `
            }
        })
}