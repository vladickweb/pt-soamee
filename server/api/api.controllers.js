const Book = require('./models/Book.model')
const Author = require('./models/Author.model')

exports.getBooks = (req, res, next) => {
	Book.find()
		.populate('author')
		.then(books => res.status(200).json({ status: 200, books }))
		.catch(err => res.status(500).json({ status: 500, errMsg: err }))
}

exports.getOneBook = (req, res) => {
	const { id } = req.params

	Book.findById(id)
		.populate('author')
		.then(book => res.status(200).json({ Code: 200, book }))
		.catch(err => res.status(500).json({ Code: 500, errMsg: err }))
}

exports.getAuthors = (req, res) => {
	Author.find()
		.then(authors => res.status(200).json({ Code: 200, authors }))
		.catch(err => res.status(500).json({ Code: 500, errMsg: err }))
}

exports.getOneAuthor = (req, res) => {
	const { id } = req.params

	Author.findById(id)
		.then(author => res.status(200).json({ Code: 200, author }))
		.catch(err => res.status(500).json({ Code: 500, errMsg: err }))
}

exports.createBook = (req, res) => {
	const { name, isbn, author } = req.body

	Book.create({ name, isbn, author })
		.then(book => res.status(200).json({ Code: 200, book }))
		.catch(err => res.status(500).json({ Code: 500, errMsg: err }))
}

exports.createAuthor = (req, res) => {
	const { first_name, last_name } = req.body

	Author.create({ first_name, last_name })
		.then(author => res.status(200).json({ Code: 200, author }))
		.catch(err => res.status(500).json({ Code: 500, errMsg: err }))
}

exports.updateBook = (req, res) => {
	const { id } = req.params
	const { name, isbn, author } = req.body


	Book.findByIdAndUpdate(id, { name, isbn, author }, { new: true })
		.then(book => res.status(200).json({ Code: 200, book }))
		.catch(err => res.status(500).json({ Code: 500, errMsg: err }))
}

exports.updateAuthor = (req, res) => {
	const { id } = req.params
	const { first_name, last_name } = req.body

	Author.findByIdAndUpdate(id, { first_name, last_name }, { new: true })
		.then(author => res.status(200).json({ Code: 200, author }))
		.catch(err => res.status(500).json({ Code: 500, errMsg: err }))
}

exports.deleteBook = (req, res) => {
	const { id } = req.params

	Book.findByIdAndDelete(id)
		.then(() => res.status(200).json({ Code: 200 }))
		.catch(err => res.status(500).json({ Code: 500, errMsg: err }))
}

exports.deleteAuthor = (req, res) => {
	const { id } = req.params

	const removeBooks = Book.deleteMany({ author: id })
	const removeAuthor = Author.findByIdAndDelete(id)

	Promise.all([ removeBooks, removeAuthor ])
		.then(() => res.status(200).json({ Code: 200 }))
		.catch(err => res.status(500).json({ Code: 500, errMsg: err }))
}
