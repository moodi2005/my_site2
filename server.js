const express = require('express')
const app = express()
const port = 3000
// Static Fils
app.use(express.static("dist"))
app.use(express.static("Public"))

// All Routs
app.get('*', (req, res) =>{
    res.sendFile(__dirname + '/index.html');
})
// Server Listen
app.listen(port, () => console.log(`server is Runing On Port ${port}!`))