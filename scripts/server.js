const express = require('express')
const path = require('path')
const app = express()
const PORT = 4166

app.use(express.static(path.join(__dirname, '../')))

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'index.html'))
})

app.get('/projects', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'projects.html'))
})

app.get('/contact', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'contact.html'))
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})