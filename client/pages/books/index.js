import { useEffect, useState } from 'react'
import Card from '../../components/Card/Card'
import BooksService from '../../services/BooksService'
import Modal from '../../components/Modal/Modal'

export default function Books() {
	const [ books, setBooks ] = useState(null)
	const booksService = new BooksService()

	useEffect(() => {
		getBooks()
	}, [])

	const getBooks = () => {
		booksService.getBooks().then(data => setBooks(data.data.books)).catch(err => console.log(err))
	}

	const displayBooks = () => {
		if (books) {
			return books.map(book => {
				return (
					<div className='col-12 col-md-4' key={book._id}>
						<Card getBooks={getBooks} book={book} />
					</div>
				)
			})
		}
	}

	return (
		<div className='container'>
			<h1 className='text-center mt-5'>Books</h1>
			<div className='row justify-content-center align-items center mt-5'>{displayBooks()}</div>
			{books?.length === 0 ? <h2 className='text-center'>No books found. You can create one by clicking the button!</h2> : null}
			<Modal />
		</div>
	)
}
