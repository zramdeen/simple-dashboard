const express = require('express')
const path = require('path')

// start the server
const app = express()

// render static content for now 
app.use(express.static(__dirname + '/public'))

// render bootstrap files
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))

// render icofont files
// app.use('/fonts', express.static(path.join(__dirname, '/public')))

// run the server
app.listen(3000)
