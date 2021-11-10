import Head from 'next/head'
import { Fragment } from 'react'
import Layout from '../components/layout'
import '../styles/global.sass'
import '../styles/customBootstrap.sass'

export default function MyApp({ Component, pageProps }) {
	return (
		<Fragment>
		<Head>
			<title>Soame Books</title>
		</Head>
		<Layout>
			<Component {...pageProps} />
		</Layout>
				<script
						src='https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js'
						integrity='sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB'
						crossOrigin='anonymous'
					/>
					<script
						src='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js'
						integrity='sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13'
						crossOrigin='anonymous'
					/>
		</Fragment>
	)
}
