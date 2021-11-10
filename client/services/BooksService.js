import axios from 'axios'

class BooksService {
	constructor() {
		this.instance = axios.create({
			baseURL: 'http://localhost:5005/api'
		})
	}

	getBooks = () => this.instance.get('/books')
	getBook = id => this.instance.get(`/book/${id}`)
	createBook = book => this.instance.post('/book', book)
	updateBook = (id, book) => this.instance.put(`/book/${id}`, book)
	deleteBook = id => this.instance.delete(`/book/${id}`)
	getAuthors = () => this.instance.get('/authors')
	getAuthor = id => this.instance.get(`/author/${id}`)
	createAuthor = author => this.instance.post('/author', author)
	updateAuthor = (id, author) => this.instance.put(`/author/${id}`, author)
	deleteAuthor = id => this.instance.delete(`/author/${id}`)
}

export default BooksService
