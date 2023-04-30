const yargs = require('yargs');

yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        console.log('Adding note...')
        console.log('title: ' + argv.title)
        console.log('body: ' + argv.body)
    }
})

// cmd: ode app.js add --title="meeting@10AM" --body="Dev weekly syncup call"

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