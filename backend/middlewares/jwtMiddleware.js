const jwt = require("jsonwebtoken")

const jwtMiddleware = (req, res, next) => {
    let authorization = req.headers.authorization
    if (!authorization) return res.status(400).json({ success: false, error: "Auth token is required" })

    let parts = authorization.split(" ")

    if (parts.length != 2) return res.status(400).json({ success: false, error: "Token error" })

    let [schema, token] = parts

    if (schema != "Bearer") return res.status(400).json({ success: false, error: "Malformatted token" })

    jwt.verify(token, process.env.APP_KEY, (er, decoded) => {
        if (er) return res.status(401).json({ success: false, error: "Invalid token" })
        req.user_id = decoded.id
        next()
    })
}

module.exports = jwtMiddleware