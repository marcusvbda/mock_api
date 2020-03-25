let express = require('express')
let app = express()
require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/auth', require('./routes/auth'))

let port = process.env.SERVER_PORT
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
