import classes from './Card.module.sass'
import Link from 'next/link'
import BooksService from '../../services/BooksService'
import { getAuthors } from '../../../server/api/api.controllers'

export default function Card({ book, author, getBooks, getAuthors }) {
	const booksService = new BooksService()
	
	const removeItem = () => {

		if (book) {
			booksService.deleteBook(book._id)
				.then(res => getBooks())
				.catch(err => console.log(err))

		} else if (author){
			booksService.deleteAuthor(author._id)
				.then(res => getAuthors())
				.catch(err => console.log(err))
		}
	}

	return (
		<div className={classes.card + ' card bg-primary text-white text-center mb-5'}>
			<div className='card-body d-flex justify-content-center align-content-around flex-column'>
				{book ? <h5 className='card-title'>{book.name}</h5> : null}
				{author ? (
					<div className='card-title'>
						<h5 className='text-light'>First Name: {author.first_name}</h5>
						<h4>{author.first_name}</h4>
						<h5 className='text-light'>Last Name: </h5>
						<h4>{author.last_name}</h4>
					</div>
				) : null}

				{book ? (
					<div>
						<h6 className='card-subtitle mb-2 text-light'>{`${book.author.first_name} ${book.author
							.last_name}`}</h6>
						<small className='card-text mb-0'>{book.isbn}</small>
					</div>
				) : null}
				<br />
				{book ? (
					<div className='d-flex justify-content-center flex-column'>
						<Link href={`/books/${book._id}`}>
							<a href='#' className=' btn btn-light btn-block mb-3'>
								Editar
							</a>
						</Link>
						<a href='#' onClick={() => removeItem()} className='btn btn-light btn-block'>
							Borrar
						</a>
					</div>
				) : null}

				{author ? (
					<div className='d-flex flex-column justify-content-center'>
						<Link href={`/authors/${author._id}`}>
							<a className=' btn btn-light btn-block mb-3'>Edit</a>
						</Link>
						<button onClick={() => removeItem()} className='btn btn-light btn-block'>
							Delete
						</button>
					</div>
				) : null}
			</div>
		</div>
	)
}
