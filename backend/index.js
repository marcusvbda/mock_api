let express = require('express')
let app = express()
require('dotenv').config()

app.use('/auth', require('./routes/auth'))

let port = process.env.APP_NAME
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
