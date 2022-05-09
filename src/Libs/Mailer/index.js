const nodemailer = require("nodemailer")
const { emailUser, emailPass } = require("../../Config/env")

const transporter = nodemailer.createTransport({
	host: "smtp.gmail.com",
	port: 465,
	secure: true, // true for 465, false for other ports
	auth: {
		user: emailUser,
		pass: emailPass,
	},
});

transporter.verify().then( () => {
	console.log("Ready for send")
})

module.exports = transporter