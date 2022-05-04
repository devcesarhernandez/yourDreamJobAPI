const express = require("express")

const app = express();

app.get("/", (req, res) => {
	res.status(200).json({
		message: "Hola mundo"
	})
}) 

app.listen(8000, _ => console.log("server on runing"))