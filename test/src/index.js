const express = require('express')
const path = require('path')
const morgan = require('morgan')
const app = express()
const port = 3000
const handleBars = require('express-handlebars')
var pageRouter = require('../routes/pageRouter')

app.use(morgan('combined'))
    // Template engine
app.engine('hbs', handleBars.engine({
    extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))

console.log('PATH: ', path.join(__dirname, 'resources/views'))

app.use('/', pageRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})