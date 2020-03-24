const express = require('express')
const http = require('http')
const path = require('path')

const appDir = path.resolve(__dirname, './')
const PORT = process.env.PORT || 3000
const app = express()

app.use(express.static(appDir))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(appDir, 'index.html'))
})

http.createServer(app).listen(PORT, () => {
  console.log('Express server listening on port ' + PORT)
  console.log('http://localhost:' + PORT)
})
