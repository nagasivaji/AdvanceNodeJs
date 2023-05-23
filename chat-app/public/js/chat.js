const socket = io()

socket.on('countUpdated', (count) => {
    console.log('Connection count: ', count)
})

const incrementBtn = document.getElementById('incrementBtn')
incrementBtn.addEventListener('click', () => {
    socket.emit('incremenet')
})