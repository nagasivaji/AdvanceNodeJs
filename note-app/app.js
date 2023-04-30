const yargs = require('yargs');

// const cmd = yargs.argv
// console.log(cmd)

yargs.command({
    command: 'add',
    describe: 'add a new note',
    handler: () => {
        console.log('Adding new note...')
    }
})

yargs.command({
    command: 'remove',
    describe: 'removing a note',
    handler: function() {
        console.log('Deleting note...')
    }
})


yargs.command({
    command: 'list',
    describe: 'listing all notes',
    handler: () => {
        console.log('Displaying all notes...')
    }
})

yargs.command({
    command: 'read',
    describe: 'reading a note',
    handler: () => {
        console.log('Reading a note...')
    }
})

yargs.parse()