'use strict'

const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 8888
const bodyParser = require('body-parser')
const morgan = require('morgan')

app.use(express.static(path.join(__dirname, './public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(morgan('dev'))

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})

module.exports = app