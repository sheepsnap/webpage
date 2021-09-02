const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static('public'))
app.set('view engine', 'ejs');

app.get('/health', (req, res) => {
  res.send('running');
})

app.get('/', (req, res) => {
  res.render('./index');
});

app.get('/updates', (req, res) => {
  res.render('./updates');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})