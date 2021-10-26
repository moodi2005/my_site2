const express =  require('express');
const app = express();
const port = 3000;

const path = require('path');

app.use(express.static(path.join(__dirname,"../dist")));
app.use('/image', express.static(path.join(__dirname,"../images/manifest")))
app.use('/favicon', express.static(path.join(__dirname,"../images/favicon.ico")))
app.use('/Fonts', express.static(path.join(__dirname,"../Fonts")))
// All Routs
app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname,"../index.html"));
});
// Server Listen
app.listen(port, () => console.log(`server is Runing On Port ${port}!`));
//# sourceMappingURL=server.js.map