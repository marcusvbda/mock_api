const route_model = require("../models/route")

const routesController = function () {

    this.index = async (req, res) => {
        let routes = await route_model.find({ user_id: req.user_id })
        return res.status(200).json({ success: true, routes })
    }

    this.store = async (req, res) => {
        let { id, response, slug, name, method } = req.body
        let route = id ? await route_model.findById(id) : new route_model()
        route.name = name
        route.method = method
        route.response = typeof response == "object" ? response : JSON.parse(response)
        route.slug = slug
        route.user_id = req.user_id
        await route.save()
        return res.status(200).json({ success: true })
    }

    this.destroy = async (req, res) => {
        let { id } = req.params
        await route_model.deleteOne({ user_id: req.user_id, _id: id })
        return res.status(200).json({ success: true })
    }

    this.run = async (req, res) => {
        let { user_id, slug } = req.params
        let route = await route_model.findOne({ user_id, slug, method: req.method })
        if (!route) return res.status(404).json({ success: false, error: "Page not found" })
        return res.status(200).json(route.response)
    }

}

module.exports = new routesController()