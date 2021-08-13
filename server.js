const express = require('express');
const path = require('path')
const app = express();
const webRouter = require('./routes/web')

const PORT = process.env.PORT || 3001;

app.use(express.static('Develop/public'));

app.use(webRouter);


app.listen(PORT, () => {
    console.log('Now Listing on http://localhost:' + PORT)
})



