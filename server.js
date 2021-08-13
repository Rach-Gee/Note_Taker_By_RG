const express = require('express');
const path = require('path')
const app = express();
const webRouter = require('./routes/web')
const apiRouter = require('./routes/api')

const PORT = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(express.json());

app.use(webRouter);
app.use(apiRouter);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
})

app.listen(PORT, () => {
    console.log(`Now Listing on http://localhost:${PORT}`)
})



