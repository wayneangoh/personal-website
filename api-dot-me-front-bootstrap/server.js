const express = require('express')
const app = express()
const server = require('http').createServer(app)
// const io = require('socket.io')(server)
const port = (process.env.PORT || 3000)

// io.on('connect', (socket) => {
//   socket.on('new-message', (msg) => {
//     io.emit('receive-message', msg)
//   })
// })

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

// serve static files with express
app.use(express.static('./public'))

server.listen(3000, () => {
  console.log('server listening on port 3000')
})
