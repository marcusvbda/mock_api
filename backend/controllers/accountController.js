const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")

const accountController = function () {

    this.getToken = (req, res) => {
        const { username, password } = req.body
        if (!username) return res.status(400).json({ success: false, error: "Username is required" })
        if (!password) return res.status(400).json({ success: false, error: "Password is required" })

        if (!bcrypt.compare(password, "$2b$10$iN0mdJz8Hj3tv7ZSr.OnOejM6qZd7yylY1FVK30ZuBluXM8dAIgG2")) return res.status(400).json({ success: false, error: "Invalid credentials" })
        let token = this.gerenateToken("0mdJz8Hj3")
        return res.json({ success: true, token })
    }

    this.gerenateToken = (user_id) => {
        return jwt.sign({ id: user_id }, process.env.APP_KEY, {
            expiresIn: 86400 //1 day
        })
    }

    this.test = (req, res) => {
        return res.status(200).json({ success: true })
    }

}

module.exports = new accountController()