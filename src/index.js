const express = require("express")
const {connection} = require("./Config/db")
const {port} = require("./Config/env")

const users = require("./Routes/Users")

const app = express();
app.use(express.json())

connection()

app.get("/", (req, res) => {
	res.status(200).json({
		message: "Hola mundo"
	})
})

users(app)

app.listen(port, _ => console.log("server on runing"))