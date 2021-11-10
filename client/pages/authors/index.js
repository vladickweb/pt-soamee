import { useEffect, useState } from 'react'
import Card from '../../components/Card/Card'
import BooksService from '../../services/BooksService'
import Modal from '../../components/Modal/Modal'

export default function Authors() {
	const [ authors, setAuthors ] = useState(null)
	const booksService = new BooksService()

	useEffect(() => {
		getAuthors()
	}, [])

	const getAuthors = () => {
		booksService.getAuthors().then(data => setAuthors(data.data.authors))
	}

	const displayBooks = () => {
		if (authors) {
			return authors.map(author => {
				return (
					<div className='col-12 col-md-4' key={author._id}>
						<Card author={author} getAuthors={getAuthors} />
					</div>
				)
			})
		}
	}

	return (
		<div className='container'>
			<h1 className='text-center mt-5'>Authors</h1>
			<div className='row justify-content-center align-items center mt-5'>{displayBooks()}</div>
			{authors?.length === 0 ? (
				<h2 className='text-center'>No authors found. You can create one by clicking the button!</h2>
			) : null}
			<Modal />
		</div>
	)
}
