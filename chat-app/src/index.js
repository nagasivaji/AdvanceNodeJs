const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')


const app = express()
const server = http.createServer(app)
const io = socketio(server)


const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))

let count = 0
io.on('connection', (socket) => {
    console.log('New websocket connection established')

    socket.emit('countUpdated', count)

    socket.on('incremenet', () => {
        count = count + 1
        socket.emit('countUpdated', count)
    })
})

server.listen(3000, () => {
    console.log('listening on port 3000')
})