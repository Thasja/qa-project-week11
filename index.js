const express = require('express');
const app = express();
const port = 4000
const cors = require('cors');
app.use(cors());
app.use(express.json());

app.post('/register', (req, res) => {
  fullName = req.body.fullName;
  email = req.body.email;
  password = req.body.password;
  res.json({result: 'Success'})
})
  
app.put('/login', (req, res) => {
  res.json({result: 'Success'})
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})