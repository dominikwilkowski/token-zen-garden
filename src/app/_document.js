import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			{/*<link rel="preconnect" href="https://fonts.googleapis.com/" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com/"
					crossorigin="anonymous"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@450;550;650;700&display=swap"
				/>
			</Head>*/}
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
