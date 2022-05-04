const mongoose =  require("mongoose")
const Schema = mongoose.Schema

const userScehema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true
	},
	lastName: {
		type: String,
		required: true,
		trim: true
	},
	role: {
		type: String
	},
	email: {
		type: String,
		required: true,
		trim: true,
		unique: true,
		index: true
	},
	phone: {
		type: String,
		required: true,
		trim: true
	},
	password: {
		type: String,
		required: true
	},
	verifyHas: {
		type: String,
		unique: true
	},
	active: {
		type: Boolean,
		default: false,
	},
	createdAt: {
		type: Date,
		default: Date.now
	},
	updatedAt: {
		type: Date,
		default: Date.now
	},
	deletedAt: {
		type: Date,
		default: null
	}
})

const userModel = mongoose.model("User", userSchema)

module.exports = userModel