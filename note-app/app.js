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

yargs.parse()