const express = require("express")
const UserService = require("../Services/Users")

function users(app){
	const router = express.Router()
	const userServ = new UserService()
	console.log(userServ)

	app.use("/users", router)

	router.post("/", async (req, res) => {
		try {
			const user = await userServ.create(req.body)
			return res.status(201).json(user)
		} catch (err) {
			res.status(500).json(err)
		}
	})

	router.get("/verify/:hash", async (req, res) => {
		try {
			const {hash} = req.params
			const user = await userServ.verifyHash(hash)
			return res.status(200).json(user)
		} catch (err) {
			res.status(500).json(err)
		}
	})
}

module.exports = users