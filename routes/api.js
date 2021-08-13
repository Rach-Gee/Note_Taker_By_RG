const express = require("express");
const router = express.Router();
const fs = require('fs')
const path = require('path');
const uuid = require('uuid');
const dbPath = path.join(__dirname, '..', 'Develop', 'db', 'db.json')

function getNotes(){
    return JSON.parse(fs.readFileSync(dbPath, 'utf-8')) || [];
}

router.get("/api/notes", (req, res) => {
    const notes = getNotes();
    res.json(notes);
})

router.post("/api/notes", (req, res) => {
    const notes = getNotes();

    const title = req.body.title;   
    const text = req.body.text;

    const noteID = uuid.v4();

    notes.push({
        title,
        text,
        noteID,
    })
    fs.writeFileSync(dbPath, JSON.stringify(notes))
    res.json({
        data: 'success'
    })
    console.log(notes)
})



module.exports = router;