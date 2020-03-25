import { MongoClient } from 'mongodb'
import bodyParser from 'body-parser'
import socketIO from 'socket.io'
import express from 'express'
import http from 'http'
import path from 'path'
import './config'

const appDir = path.resolve(__dirname, './')
const app = express()
const server = http.createServer(app)
const io = socketIO(server)
let db

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(appDir))
app.use(bodyParser.json())

const messages = []

io.on('connection', socket => {
  socket.emit('sendmessage', messages)

  socket.on('getmessage', mes => {
    messages.push(mes)
    socket.emit('sendmessage', messages)
    socket.broadcast.emit('sendmessage', messages)
  })

  // socket.on('disconnect', () => {
  //   socket.broadcast.emit('broadcast', { online: io.engine.clientsCount, message: 'disconnect' })
  // })
})

app.get('/users', (req, res) => {
  db.collection('users').find({}).toArray((err, docsres) => {
    if (err) {
      console.log(err)
      return res.sendStatus(500)
    } else {
      res.send(docsres)
    }
  })
})

app.post('/users', (req, res) => {
  console.log({ body: req.body })
  db.collection('users').insert({ name: req.body.name }, err => {
    if (err) {
      console.log(err)
      return res.sendStatus(500)
    } else {
      res.sendStatus(200)
    }
  })
})

app.get('*', (req, res) => {
  res.sendFile(path.resolve(appDir, 'index.html'))
})

MongoClient.connect(process.env.MONGO_URL, (err, database) => {
  if (err) return console.log(err)
  db = database.db('boilerplate')
  server.listen(process.env.PORT, () => {
    console.log(`Express server listening on port ${process.env.PORT}`)
    console.log(`http://localhost:${process.env.PORT}`)
  })
})
