const fs = require('fs');
fs.writeFileSync('note.txt', 'Hello... This file is created BY node JS \n')
fs.appendFileSync('note.txt', 'Hello NagaSivaji...')