console.log('Inside utils.js...!')

const myName = 'Sivaji'
const getFullName = function getFullName() {
    return `Naga ${myName}`
}

module.exports = { myName, getFullName }