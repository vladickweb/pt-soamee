import { useEffect, useState } from 'react'
import BooksService from '../../services/BooksService'
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'

export default function create() {
	const [ first_name, setFirst_name ] = useState(null)
	const [ last_name, setLast_name ] = useState(null)

	const booksService = new BooksService()
	const router = useRouter()

	useEffect(() => {
		removeModal()
	}, [])

	const removeModal = () => {
		const modal = document.querySelector('.modal-backdrop')
		modal?.className === 'modal-backdrop fade show' && modal.classList.remove('modal-backdrop')
	}

	const handleSubmit = e => {
		e.preventDefault()
		booksService
			.createAuthor({ first_name, last_name })
			.then(() => {
				Swal.fire({
					position: 'top-end',
					icon: 'success',
					title: 'Author successfully created',
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
				<h1 className='text-center mb-5'>Add an author</h1>
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
//
