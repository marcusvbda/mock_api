let express = require('express')
let app = express()
require('dotenv').config()
var mongoose = require('mongoose')

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_SERVER}/${process.env.DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/auth', require('./routes/auth'))

let port = process.env.SERVER_PORT
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
