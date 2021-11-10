import React from 'react'
import classes from './Navbar.module.sass'
import BooksIcon from '../../svg/BooksIcon'
import Link from 'next/link'

export default function Navbar() {
	return (
		<nav className={classes.navigation + ' navbar navbar-expand-lg navbar-light bg-light py-3 sticky'}>
			<div className='container-fluid'>
				<Link href='/'>
					<a className={classes.svgContainer}>
						<BooksIcon classes={classes} />
					</a>
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon' />
				</button>
				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className={classes.navItems + ' navbar-nav ms-auto mb-2 mb-lg-0'}>
						<li className=' nav-item'>
							<Link className={classes.link} href='/books'>
								<a className={classes.link + ' nav-link text-white'}>Books</a>
							</Link>
						</li>
						<li className='nav-item'>
							<Link href='/authors'>
								<a className={classes.link + ' nav-link text-white'}>Authors</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}
