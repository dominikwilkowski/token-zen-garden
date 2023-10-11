export const metadata = {
	title: 'Polaris Token Zen Garden',
	description: 'A playground to tweak tokens',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
