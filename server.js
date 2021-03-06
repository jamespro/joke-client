const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.use(express(json))
app.use(cors())

app.get('/', (req, res) => {
    //serve up index.html
    res.sendFile(__dirname+'/index.html')
})

app.get('/js/main.js', (req, res) => {
    //serve up index.html
    res.sendFile(__dirname+'/js/main.js')
})

const PORT = 8001

app.listen(process.env.PORT || PORT, () => {
    //some callback
    //let them know we're alive
    console.log(`We're live on port ${PORT}`)
})