const express = require('express')
const multer = require('multer')


// File Upload Folder
const UPLOADS_FOLDER = "./uploads/"
var upload = multer({
	dest: UPLOADS_FOLDER
})
const app = express()

app.post('/', upload.fields([
	{ name: "avatar", maxCount: 1},
	{ name: "gallery", maxCount: 2}
]),(req, res) => {
	res.send('Hello World')
})


const PORT = process.env.PORT ?? 3000
app.listen(PORT, () => {
	console.log(`Server is running at ${PORT}`)
})