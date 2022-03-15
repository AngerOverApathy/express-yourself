const path = require('path');
const router = require('express').Router()


router.get('/notes', (req, res) => {       //return notes to notes.html
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

router.get('*', (req, res) => {           //return index.html 
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

module.exports = router;