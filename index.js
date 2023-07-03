import express from 'express'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'

const app = express()
app.use(express.json())

mongoose.connect('mongodb+srv://tuychiyevakademik:politex11@cluster0.q0m1h1q.mongodb.net/')
  .then(() => {console.log('DB succes') })
  .catch((err) => {console.log('DB error', err) })

app.get('/', (req, res) => {
  res.send('hello world')
})

app.post('/auth/login', (req, res) => {
  console.log(req.body);

  const token = jwt.sign({
    email: req.body.email,
    fullName: 'Salimjon'
  },
    'akademik'
  )



  res.json({
    succes: true,
    token
  })
})

app.listen(2222, (err) => {
  if (err) {
    console.warn(err);
  }

  console.log('Server has been running...');
})