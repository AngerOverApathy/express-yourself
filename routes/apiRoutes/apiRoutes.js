const fs = require('fs');
let data = JSON.parse(fs.readFileSync("db/db.json", "utf8"));
const router = require('express').Router();
const noteController = require('../../controllers/noteController')


    //save notes as json
    router.get('/notes', function (req,res) {
        noteController
        .getNotes()
        .then((notes) => res.json(notes))
        .catch(err => res.status(500).json(err))
    })

    router.get("/notes/:id", function(req, res) {

        res.json(data[Number(req.params.id)]);

    });

    //return new note to body
    router.post('/notes', function (req, res) {
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
    router.delete('/notes/:id', function(req,res) {
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

module.exports = router;