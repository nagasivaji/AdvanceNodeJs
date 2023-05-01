// request url 
// http://api.weatherstack.com/current?access_key=ed3ea9627bb950b22b35cd2b31f98c44&query=India

fetch('http://api.weatherstack.com/current?access_key=ed3ea9627bb950b22b35cd2b31f98c44&query=India')
    .then(res => res.json())
    .then(json => {
        // console.log(json)
        const temperatureDetails = 'The current temperature in ' + json.location.name + ' is ' + json.current.temperature + ' degrees'
        console.log(temperatureDetails)
    }).catch(err => console.log('Error: ', err))


// fetch('https://jsonplaceholder.typicode.com/todos/?id=1')
//     .then((res) => {
//         return res.json()
//     })
//     .then(json => console.log(json))


///////////// Calllbacks ////////////////

// without callback

// const callingApi = (input) => {
//     setTimeout(() => {
//         const data = {
//             input: input,
//             data: '......'
//         }
//         return data
//     }, 2000)
// }

// const data = callingApi('sivaji')
// console.log('Data: ', data) 

/*
    In without callback type it will print data as undefined.
    Because it will return undefined before finising timeout (Asychronous code)
*/



// with callback

const callingApi = (input, callback) => {
    setTimeout(() => {
        const data = {
            input: input,
            data: '......'
        }
        callback(data)
    }, 2000)
}

callingApi('sivaji', (data) => {
    console.log('Data: ', data)
})