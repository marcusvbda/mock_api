const accountController = function () {
    this.getToken = async (req, res) => {
        return res.json({ success: true, data: { teste: 1234 } })
    }
}

module.exports = new accountController()