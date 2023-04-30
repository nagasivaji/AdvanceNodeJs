const yargs = require('yargs')
const chalk = require('chalk')
const notes = require('./notes')


const printResult = (type, message) => {
    if (type === 'success') {
        console.log(chalk.green(message))
    } else if (type === 'error') {
        console.log(chalk.red(message))
    } else if (type === 'warning') {
        console.log(chalk.yellow(message))
    } else {
        console.log(chalk.blue(message))
    }
}

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
            // console.log(res)
        printResult(res.type, res.message)
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
            // console.log(res)
        printResult(res.type, res.message)
    }
})

// cmd: node app.js remove --title="sivaji"


yargs.command({
    command: 'listNotes',
    describe: 'listing all notes',
    handler: (argv) => {
        const res = notes.listNotes()
        if (res.length < 1) {
            console.log(chalk.blue('No notes found in DB'))
        } else {
            res.forEach(note => {
                console.log(chalk.blue(note.title))
            })
        }
    }
})

yargs.command({
    command: 'readNote',
    describe: 'reading a note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        const res = notes.readNote(argv.title)
        if (res.type === 'warning') {
            printResult(res.type, res.message)
        } else {
            const outlineLength = res.data.body.length + 13
                // console.log(outlineLength)
            var outline = ''
            for (var i = 0; i < outlineLength; i++) {
                outline += '-'
            }

            // result with box here
            console.log(chalk.gray(outline))
            console.log(chalk.gray('|'), chalk.blue(' title: '), chalk.green(res.data.title), chalk.gray('|'))
            console.log(chalk.gray('|'), chalk.blue(' body : '), chalk.green(res.data.body), chalk.gray('|'))
            console.log(chalk.gray(outline))
        }
    }
})

yargs.parse()