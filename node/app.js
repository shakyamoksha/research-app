const express = require('express');
const upload = require('express-fileupload')

const app = express()

app.use(upload())

app.get('', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/upload', (req, res) => {
    if(req.files) {
        console.log(req.files);
        var file = req.files.file;
        var filename = file.name;
        console.log(filename);
    }
})

app.post('/api/upload', (req, res) => {
    console.log(`Successfully uploaded ${req.files.file.name}`)
    res.sendStatus(200)
})

app.listen(3333)
