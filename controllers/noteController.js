const util = require("util");
const fs = require('fs');
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);


function read() {
    return readFileAsync('db/db.json', "utf-8");
}

function write(note) {
    return writeFileAsync("db/db.json", JSON.stringify(note))
}

const getNotes = exports.getNotes = function() {
    return read().then((notes) => {
        let parsedNotes = JSON.parse(notes) || [];
        return parsedNotes;
    })
}

getNotes()
.then((notes) => console.log(notes))