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
		</Fragment>
	)
}
