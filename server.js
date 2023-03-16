require('dotenv').config()

const express = require('express')

const app = express()

const connectDB = require('./config/db')

PORT = 8080

connectDB()

const {createEngine} = require('jsx-view-engine')
app.set('view engine', 'jsx')
app.engine('jsx', createEngine())

const methodOverride = require('method-override')
app.use(methodOverride('_method'))

app.use(express.urlencoded({extended: true}))

const welcomeRoutes = require('./routes/welcomeRoutes')
const pokemonRoutes = require('./routes/pokemonRoutes')

app.use('/pokemon', pokemonRoutes)
app.use('/', welcomeRoutes)

app.listen(PORT, ()=>{
    console.log('Listening port 8080')
})