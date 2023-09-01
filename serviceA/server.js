import express from 'express';
import fetch from 'node-fetch';
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('service A!')
})

app.get('/check-service-b', async (req, res) => {
  try {
    await fetch("http://service-b:3001")
    res.send("ok");
  } catch(err) {
    res.send("nok");
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

process.on('SIGINT', function() {
  process.exit();
});