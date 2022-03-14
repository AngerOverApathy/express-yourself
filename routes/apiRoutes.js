const fs = require('fs');
let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

module.exports = function(app) {
    //save notes as json
    app.get('/api/notes', function (req,res) {
        res.json(data);
        if (err) throw err;
    })

    app.get("/api/notes/:id", function(req, res) {

        res.json(data[Number(req.params.id)]);

    });

    //return new note to body
    app.post('/api/notes', function (req, res) {
        let newNote = req.body;
        let newId = (data.length).toString();
        console.log(newId);
        newNote.id = newId;
        data.push(newNote);

    fs.writeFileSync('db/db.json', JSON.stringify(data), function(err) {
        if (err) throw (err);
    })

    res.json(data);
})
    //delete note
    app.delete('/api/notes/:id', function(req,res) {
        let noteId = req.params.id;
        let newNoteId = 0;

        console.log('Deleted!')

        data = data.filter(currentNote => {
            return currentNote.id != noteId;
        })
            for (currentNote of data) {
                currentNote.id = newNoteId.toString();
                newNoteId++;
            }
        fs.writeFileSync('./db/db.json', JSON.stringify(data));
        res.json(data)
    })

}