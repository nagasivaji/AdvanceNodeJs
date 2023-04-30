const fs = require('fs');
const { boolean } = require('yargs');

const loadNotes = () => {
    try {
        const buffer = fs.readFileSync('notes.json')
        return JSON.parse(buffer.toString())
    } catch (e) {
        return []
    }
}

const saveNote = (notes) => {
    const data = JSON.stringify(notes)
    fs.writeFileSync('notes.json', data)
}

const add = (title, body) => {
    const notes = loadNotes()
    var isDuplicate = false
    if (notes.length > 0) {
        notes.forEach(note => {
            if (note.title === title) {
                isDuplicate = true;
            }
        })
    }

    if (isDuplicate) {
        return 'Note already exists'
    }
    notes.push({ title, body })
    saveNote(notes)
    return 'Note added successfully'
}


const remove = (title) => {
    var notes = loadNotes()
    if (notes.length > 0) {
        var tempNotes = notes.filter(note => note.title !== title)
        if (tempNotes.length !== notes.length) {
            saveNote(tempNotes)
            return 'Note removed successfully'
        } else {
            return 'Note not found'
        }
    }
    return 'Currently there no notes in DB'
}


module.exports = {
    add,
    remove
}