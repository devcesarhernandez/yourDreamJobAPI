const mongoose =  require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
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
	role: {
		type: String,
		required: true,
		enum: ["admin", "employer", "aspirant"]
	},
	verifyHash: {
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