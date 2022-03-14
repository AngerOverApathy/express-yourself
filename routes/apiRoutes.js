const fs = require('fs')
let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

module.exports = function(app) {
    //save notes as json
    app.get('/api/notes', function (req,res) {
        res.json(data);
        if (err) throw err;
    })
}

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