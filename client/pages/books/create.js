import { Fragment, useEffect, useState } from 'react'
import BooksService from '../../services/BooksService'
import { useRouter } from 'next/router'

export default function create() {
	const [ name, setName ] = useState(null)
	const [ author, setAuthor ] = useState(null)
	const [ isbn, setIsbn ] = useState(null)
	const [ authors, setAuthors ] = useState(null)
	const booksService = new BooksService()
	const router = useRouter()

	useEffect(() => {
		removeModal()
		getAllAuthors()
	}, [])

	const getAllAuthors = () => {
		booksService.getAuthors().then(data => setAuthors(data.data.authors)).catch(err => console.log(err))
	}

	const removeModal = () => {
		const modal = document.querySelector('.modal-backdrop')
		modal?.className === 'modal-backdrop fade show' && modal.classList.remove('modal-backdrop')
	}

	const handleSubmit = e => {
		e.preventDefault()
		booksService
      .createBook({ name, author, isbn })
      .then(() => router.push('/books'))
      .catch(err => console.log(err))
	}

	const displayAuthors = () => {
		return authors.map(author => {
			return (
				<Fragment key={author._id}>
					<option value={author._id}>{`${author.first_name} ${author.last_name}`}</option>
				</Fragment>
			)
		})
	}

	return (

		<div className='container mt-5'>
			<div className='row justify-content-center algin-items-center h-100'>
				<h1 className='text-center mb-5'>Add a book</h1>
				<div className='col-8'>
					<form onSubmit={e => handleSubmit(e)}>
						<div className='mb-3'>
							<label className='form-label w-100'>
								<p>Title</p>
								<input
									type='text'
									className='form-control'
									autoComplete='off'
									required
									onChange={e => setName(e.target.value)}
								/>
							</label>
						</div>

						<div className='mb-3'>
							<label className='form-label w-100'>
								<p>Author</p>
								<select
									className='form-select'
									aria-label='select'
									onChange={e => setAuthor(e.target.value)}
									required>
									<option value=''>Select an author</option>
									{authors ? displayAuthors() : null}
								</select>
							</label>
						</div>

						<div className='mb-3'>
							<label className='form-label w-100'>
								<p>ISBN</p>
								<input
									type='text'
									className='form-control'
									autoComplete='off'
									required
									onChange={e => setIsbn(e.target.value)}
								/>
							</label>
						</div>

						<button type='submit' className='btn btn-primary btn-block w-100'>
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}
