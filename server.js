const express = require('express');
const multer = require('multer');
const app = express();
const port = 3000;
const path = require('path');
const upload = multer({ dest: 'uploads/' });
const {mergepdfs} = require('./merge');

app.use('/static' , express.static('public'));
app.listen(port, () => {
    console.log(`Example app is listening on port ${port}`);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "views/index.html"));
});

app.post('/merge', upload.array('pdfs', 2), async (req, res, next) => {
    let d = await mergepdfs(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path));
    res.redirect(`http://localhost:3000/static/${d}.pdf`);
});
