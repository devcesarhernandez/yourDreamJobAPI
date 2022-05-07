const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Company = new Schema({
	name: {
		type: String,
		required: true,
		trim: true
	},
	description: {
		type: String,
		required: true
	},
	url: {
		type: String,
		trim: true
	},
	employees: [
		{
			type: mongoose.Types.ObjectId,
			ref: "User"
		}
	]
})

module.exports = Company