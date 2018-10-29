'use strict'

const express = require('express')
const app = express()
const path = require('path')
const PORT = 8888
const bodyParser = require('body-parser')

if (process.env.NODE_ENV !== 'production') require('./secrets')

const mailer = require('nodemailer').createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.GMAIL_ADDRESS,
    pass: process.env.GMAIL_PASSWORD
  }
})

app.use(express.static(path.join(__dirname, './public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})

app.post('/contact', (req, res) => {
  // console.log('the req.body', req.body)
  // res.status(200).send('hi')
  mailer.sendMail({
    from: req.body.email,
    to: [process.env.GMAIL_ADDRESS],
    subject: req.body.subject || '[No Subject]',
    html: req.body.message || '[No Message]'
  }, (err, info) => {
    if (err) return res.status(500).send(err)
    res.json({success: true})
  })
})

module.exports = app