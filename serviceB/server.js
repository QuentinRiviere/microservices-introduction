import express from 'express';
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('service B!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

process.on('SIGINT', function() {
  process.exit();
});