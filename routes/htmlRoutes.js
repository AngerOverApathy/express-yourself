const path = require('path');

module.exports = function(app) {

    app.get('/notes', (req, res) => {       //return notes to notes.html
        res.sendFile(path.join(__dirname, '../../public/notes.html'));
    });
    
    app.get('*', (req, res) => {           //return index.html 
        res.sendFile(path.join(__dirname, '../../public/index.html'));
    })
}