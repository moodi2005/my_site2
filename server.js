const express = require('express')
const app = express()
const port = 3000
const path = require('path');

app.use(express.static("dist"))
app.use(express.static("Public"))

app.get('*', (req, res) =>{
    res.sendfile(path.join(__dirname,"index.html"))
})
app.listen(port, () => console.log(`Example app listening on port port!`))