const userService = require("../service/user-service")

class UserController {
    async registration(res, req, next) {
        try {
            const { email, password, name } = req.body
            const userData = await userService.registration(email, password, name)
            res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 60 * 1000, httpOnly: true })
            return res.json(userData)
        } catch (error) {
            console.log(error);
        }
    }

    async login(res, req, next) {
        try {

        } catch (error) {

        }
    }
    async logout(res, req, next) {
        try {

        } catch (error) {

        }
    }

    async activate(res, req, next) {
        try {

        } catch (error) {

        }
    }

    async refresh(res, req, next) {
        try {

        } catch (error) {

        }
    }

    async getUsers(res, req, next) {
        try {
            res.json(['123', '456'])
        } catch (error) {

        }
    }
}

module.exports = new UserController()