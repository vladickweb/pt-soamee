import { useEffect, useState } from 'react'
import BooksService from '../../services/BooksService'
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'

export default function Edit() {
	const [ first_name, setFirst_name ] = useState(null)
	const [ last_name, setLast_name ] = useState(null)

	const booksService = new BooksService()
	const router = useRouter()

	useEffect(() => {
		const fetchAuthor = () => {
			const { id } = router.query

			booksService
				.getAuthor(id)
				.then(data => {
					const { author } = data.data
					setFirst_name(author.first_name)
					setLast_name(author.last_name)
				})
				.catch(err => console.log(err))
		}
		fetchAuthor()
	}, [])

	const handleSubmit = e => {
		e.preventDefault()
		const { id } = router.query

		booksService
			.updateAuthor(id, { first_name, last_name })
			.then(() => {
				Swal.fire({
					position: 'top-end',
					icon: 'success',
					title: 'Author successfully updated',
					showConfirmButton: false,
					timer: 1500
				})
				router.push('/authors')
			})
			.catch(err => console.log(err))
	}

	return (
		<div className='container mt-5'>
			<div className='row justify-content-center algin-items-center h-100'>
				<h1 className='text-center mb-5'>Edit an author</h1>
				<div className='col-8'>
					<form onSubmit={e => handleSubmit(e)}>
						<div className='mb-3'>
							<label className='form-label w-100'>
								<p>First Name</p>
								<input
									type='text'
									className='form-control'
									autoComplete='off'
									required
									value={first_name === null ? '' : first_name}
									onChange={e => setFirst_name(e.target.value)}
								/>
							</label>
						</div>

						<div className='mb-3'>
							<label className='form-label w-100'>
								<p>Last Name</p>
								<input
									type='text'
									className='form-control'
									autoComplete='off'
									required
									value={last_name === null ? '' : last_name}
									onChange={e => setLast_name(e.target.value)}
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
