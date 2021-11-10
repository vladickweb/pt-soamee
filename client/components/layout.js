import Navbar from './Navbar/Navbar'
import { Fragment } from 'react'

export default function Layout({ children }) {
	return (
		<Fragment>
			<Navbar />
			<main>{children}</main>
		</Fragment>
	)
}
