// request url 
// http://api.weatherstack.com/current?access_key=ed3ea9627bb950b22b35cd2b31f98c44&query=India

fetch('http://api.weatherstack.com/current?access_key=ed3ea9627bb950b22b35cd2b31f98c44&query=India')
    .then(res => res.json())
    .then(json => {
        // console.log(json)
        const temperatureDetails = 'The current temperature in ' + json.location.name + ' is ' + json.current.temperature + ' degrees'
        console.log(temperatureDetails)
    })


// fetch('https://jsonplaceholder.typicode.com/todos/?id=1')
//     .then((res) => {
//         return res.json()
//     })
//     .then(json => console.log(json))