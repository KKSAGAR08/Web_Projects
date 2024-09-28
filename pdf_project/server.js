const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,"templet/index.html"))
})

app.post('/merger', upload.array('pdfs', 2), function (req, res, next) {
    console.log(req.files);
    res.send({data: req.files});
  })



app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})