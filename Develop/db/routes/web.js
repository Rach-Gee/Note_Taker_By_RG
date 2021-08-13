const express = require(express)
const router = express.Router()

router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, 'Develop', 'public', 'notes.html'));
})

router.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, 'Develop', 'public', 'index.html'));
})

router.listen(PORT, () => {
    console.log("Now Listing on http://localhost:" + PORT)
})

module.export = router