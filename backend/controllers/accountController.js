const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const user_model = require("../models/user")

const accountController = function () {

    this.getToken = async (req, res) => {
        let { username, password } = req.body
        if (!username) return res.status(400).json({ success: false, error: "Username is required" })
        if (!password) return res.status(400).json({ success: false, error: "Password is required" })

        let user = await user_model.findOne({ username: username })
        if (!user) return res.status(400).json({ success: false, error: "User not found" })

        let check_pass = await bcrypt.compare(password, user.password)
        if (!check_pass) return res.status(400).json({ success: false, error: "Invalid credentials" })

        let token = this.gerenateToken(user)
        user.password = undefined
        return res.json({ success: true, user, token })
    }

    this.gerenateToken = (user) => {
        return jwt.sign({ id: user._id }, process.env.APP_KEY, {
            expiresIn: 86400 //1 day
        })
    }

    this.test = async (req, res) => {
        let user = await user_model.findById(req.user_id)
        return res.status(200).json({ success: true, user })
    }

    // this.createUser = () => {
    //     let _user = { username: "root", password: bcrypt.hashSync("toor", 10) }
    //     let new_user = new user_model(_user)
    //     new_user.save()
    //     return new_user
    // }

}

module.exports = new accountController()