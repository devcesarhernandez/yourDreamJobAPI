const UserModel = require("../Models/Users")
const { jwtSecret } = require("../Config/env")
const transporter = require("../Libs/Mailer")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

class Users {
	async getByEmail(email) {
		try {
			return await UserModel.findOne({ email })
		} catch (err) {
			return err
		}
	}

	async create(data) {
		try {
			const user = await this.#createDataUser(data)
			const newUser = await UserModel.create(user)
			await transporter.sendMail({
				from: '"Fred Foo 👻" <devcesarhdez@gmail.com>', // sender address
				to: newUser.email, // list of receivers
				subject: "Hello ✔", // Subject line
				text: "Hello world?", // plain text body
				html: `<b>${newUser.verifyHash}</b>`, // html body
			})
			return newUser
		} catch (err) {
			if (err.code === 11000) {
				return {
					error: true,
					message: `El correo "${err.keyValue.email}" ya está en uso`
				}
			}
		}
	}

	async verifyHash(hash) {
		try {
			const decode = this.#verifyToken(hash)
			const user = await UserModel.findOneAndUpdate({ email: decode.email }, { active: true, verifyHash: null }, { new: true })
			return user
		} catch (err) {
			return err
		}
	}

	async #createDataUser(data) {
		data.password = await this.#hashPassword(data.password)
		const verifyHash = this.#createToken({ email: data.email }, "1d")
		return {
			name: data.name,
			lastName: data.lastName,
			email: data.email,
			phone: data.phone,
			password: data.password,
			role: data.role,
			verifyHash,
			active: false
		}
	}

	async #hashPassword(password) {
		// return password hash
		try {
			const salt = await bcrypt.genSalt()
			const hash = await bcrypt.hash(password, salt)
			return hash
		} catch (err) {
			throw ({ error: true, message: "Error al generar la contraseña." })
		}
	}

	#createToken(payload, expiresIn = "2h") {
		return jwt.sign(payload, jwtSecret, { expiresIn })
	}

	#verifyToken(token) {
		try {
			return jwt.verify(token, jwtSecret)
		} catch (err) {
			return {
				error: true,
				message: "Token invalido."
			}
		}
	}

	#decodeToken(token) {
		jwt.decode(token, jwtSecret)
	}
}

module.exports = Users