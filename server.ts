const app = require('express')()
const path = require('path')
const PORT = process.env.PORT || 3000

app.get('/', (req: any, res: any) => {
  res.sendFile(path.join(__dirname + '/index.html'))
})

async function start() {
  app.listen(PORT, 'localhost')
  console.log(`> Ready on http://localhost:${PORT}`)
}

start()
