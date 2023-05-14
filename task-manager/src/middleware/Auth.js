const auth = async(req, res, next) => {
    console.log('Autho middleware')
    next()
}

module.exports = auth