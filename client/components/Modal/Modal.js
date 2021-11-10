import { Fragment } from 'react'
import classes from './Modal.module.sass'
import Link from 'next/link'
import Image from 'next/image'

export default function Modal() {
	const srcBook = 'https://cdn.picpng.com/book/book-illustration-30958.png'
	const srcAuthor = 'https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/1688204/writer-clipart-md.png'
	const srcAdd = 'http://pngimg.com/uploads/plus/plus_PNG115.png'

	return (
		<Fragment>
			<div
				className='modal fade'
				id='exampleModal'
				tabIndex='-1'
				aria-labelledby='exampleModalLabel'
				aria-hidden='true'>
				<div className='modal-dialog'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title' id='exampleModalLabel'>
								What do you want to add?
							</h5>
							<button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close' />
						</div>
						<div className={classes.modal + ' modal-body d-flex'}>
							<Link href='/books/create' data-bs-dismiss='modal' onClick={() => hideModal()}>
								<a>
									<figure>
										<Image
											loader={() => srcBook}
											src={srcBook}
											width={100}
											height={100}
											alt='Book image'
										/>
										<figcaption>Book</figcaption>
									</figure>
								</a>
							</Link>
							<Link href='/authors/create'>
								<a>
									<figure>
										<Image
											loader={() => srcAuthor}
											src={srcAuthor}
											width={100}
											height={100}
											alt='Author image'
										/>

										<figcaption>Author</figcaption>
									</figure>
								</a>
							</Link>
						</div>
						<div className='modal-footer'>
							<button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>
								Close
							</button>
							<button type='button' className='btn btn-primary'>
								Save changes
							</button>
						</div>
					</div>
				</div>
			</div>

			<button type='button' className={classes.add} data-bs-toggle='modal' data-bs-target='#exampleModal'>
				<Image loader={() => srcAdd} src={srcAdd} width={100} height={100} alt='Author image' />
			</button>
		</Fragment>
	)
}
