const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Job = new Schema({
	title: {
		required: true,
		type: String
	},
	description: {
		required: true,
		type: String
	},
	company: {
		type: mongoose.Types.ObjectId,
		ref: "Company"
	},
	employer: {
		type: mongoose.Types.ObjectId,
		ref: "User"
	},
	aspirants: [
		{
			type: mongoose.Types.ObjectId,
			ref: "User"
		}
	],
	active: {
		type: Boolean,
		default: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	},
	expireIn: {
		type: Date,
		required: true
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

module.exports = Job