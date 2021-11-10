import Document, { Html, Head, Main, NextScript } from 'next/document'
// import cl

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html>
				<Head>
					<link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-touch-icon.png' />
					<link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png' />
					<link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png' />
					<link rel='manifest' href='/favicon/site.webmanifest' />
					<link rel='mask-icon' href='/favicon/safari-pinned-tab.svg' color='#5bbad5' />
					<meta name='msapplication-TileColor' content='#2b5797' />
					<meta name='theme-color' content='#ffffff' />
				</Head>

				{/* <body style={{background="rgb(213,202,189)", background='linear-gradient(0deg, rgba(213,202,189,1) 0%, rgba(255,255,255,1) 100%)'}}> */}
				<body>
					<Main />
					<NextScript />
					<script
						src='https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js'
						integrity='sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB'
						crossorigin='anonymous'
					/>
					<script
						src='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js'
						integrity='sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13'
						crossorigin='anonymous'
					/>
				</body>
			</Html>
		)
	}
}

export default MyDocument
