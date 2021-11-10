import { useEffect, useState } from 'react'
import BooksService from '../../services/BooksService'
import { useRouter } from 'next/router'
import { Fragment } from 'react'
import Swal from 'sweetalert2'

export default function Edit() {
	const [ name, setName ] = useState(null)
	const [ author, setAuthor ] = useState(null)
	const [ isbn, setIsbn ] = useState(null)
	const [ authors, setAuthors ] = useState(null)

	const booksService = new BooksService()
	const router = useRouter()

	useEffect(() => {
		const fetchBook = () => {
			const { id } = router.query

			booksService
				.getBook(id)
				.then(data => {
					const { book } = data.data
					setName(book.name)
					setAuthor(book.author)
					setIsbn(book.isbn)
				})
				.catch(err => console.log(err))
		}
		fetchBook()
	}, [])

	useEffect(
		() => {
			const fetchAuthors = () => {
				booksService
					.getAuthors()
					.then(data => setAuthors(data.data.authors))
					.catch(err => console.log(err))
			}
			fetchAuthors()
		},
		[ author ]
	)

	const displayAuthors = () => {
		return authors.map(mapAuthor => {
			return (
				<Fragment key={mapAuthor._id}>
					<option value={mapAuthor._id}>{`${mapAuthor.first_name} ${mapAuthor.last_name}`}</option>
				</Fragment>
			)
		})
	}

	const handleSubmit = e => {
		e.preventDefault()
		const { id } = router.query
		
		booksService
			.updateBook(id, { name, isbn, author })
			.then(() => {
				Swal.fire({
					position: 'top-end',
					icon: 'success',
					title: 'Book successfully updated',
					showConfirmButton: false,
					timer: 1500
				})
				router.push('/books')
			})
			.catch(err => console.log(err))
	}

	return (
		<div className='container mt-5'>
			<div className='row justify-content-center algin-items-center h-100'>
				<h1 className='text-center mb-5'>Edit a book</h1>
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
									value={name}
									onChange={e => setName(e.target.value)}
								/>
							</label>
						</div>

						<div className='mb-3'>
							<label className='form-label w-100'>
								<p>Author</p>
								<select
									className='form-select'
									aria-label='Default select example'
									onChange={e => setAuthor(e.target.value)}
									required>
									<option disabled selected />
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
									value={isbn}
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
