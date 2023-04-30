const yargs = require('yargs');
// const chalk = require('chalk');
const notes = require('./notes');
// console.log(chalk.red("Welcome to"))

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
        // console.log('Adding note...')
        // console.log('title: ' + argv.title)
        // console.log('body: ' + argv.body)
        const res = notes.add(argv.title, argv.body)
        console.log(res)
    }
})

// cmd: node app.js add --title="meeting@10AM" --body="Dev weekly syncup call"

yargs.command({
    command: 'remove',
    describe: 'removing a note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        const res = notes.remove(argv.title)
        console.log(res)
    }
})

// cmd: node app.js remove --title="sivaji"


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