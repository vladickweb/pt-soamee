const { Schema, model } = require('mongoose')

const bookSchema = new Schema(
	{
		name: {
			type: String
		},
		isbn: {
			type: String
		},
		author: {
			type: Schema.Types.ObjectId,
			ref: 'Author'
		}
	},
	{
		timestamps: true
	}
)

const Book = model('Book', bookSchema)

module.exports = Book
