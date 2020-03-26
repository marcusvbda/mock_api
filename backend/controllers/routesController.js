const route_model = require("../models/route")

const routesController = function () {

    this.index = async (req, res) => {
        let routes = await route_model.find({ user_id: req.user_id })
        return res.json({ success: true, routes })
    }

    this.createRoute = async (user_id) => {
        let route = new route_model({ name: "route_teste", user_id: user_id })
        await route.save()
        user.save()
    }

}

module.exports = new routesController()