const jwt = require("jsonwebtoken")

const token = jwt.sign({email: "devcesar@gmail.com"}, "devcesar", {expiresIn: "1m"})

console.log( jwt.decode(token, "devcesar") )

console.log( jwt.verify(token, "devcesar") )

setTimeout( () => {
	try {
		jwt.verify(token, "devcesar")
	} catch (err) {
		throw ({error: true, message: "token invalido"})
	}
}, 1000*60*1)