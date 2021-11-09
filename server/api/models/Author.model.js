const { Schema, model } = require('mongoose')

const authorSchema = new Schema(
	{
		first_name: {
			type: String
		},
		last_name: {
			type: String
		}
	},
	{
		timestamps: true
	}
)

const Author = model('Author', authorSchema)

module.exports = Author
