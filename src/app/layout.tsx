import type { Metadata } from 'next'
import '../scss/main.scss'

export const metadata: Metadata = {
	icons: {
		icon: [
			'/public/favicon.png',
			'../../public/favicon-16x16.png',
			'../../public/favicon-32x32.png',
		],
		apple: '../../public/apple-touch-icon.png',
	},
	title: 'Survey Form | freeCodeCamp',
	description: 'This is a simple html-css based survey form, a freecodecamp assignment',
	openGraph: {
		url: 'https://survey-form-sepia.vercel.app/',
		type: 'website',
		title: 'Survey Form | freeCodeCamp',
		description: 'This is a simple html-css based survey form, a freecodecamp assignment',
		images: [
			'https://ogcdn.net/e4b8c678-7bd5-445d-ba03-bfaad510c686/v3/fedehide.github.io/Survey%20Form%20%7C%20freeCodeCamp/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fdocuments%2Ff05c74d5-a8ba-4552-971d-0b738aa93e80.png%3Ftoken%3DjWROW_KzGra27QUfQtlygyINf8a9QSmXXDFj50cx8Wo%26height%3D301%26width%3D633%26expires%3D33241971710/og.png',
		],
	},
	twitter: {
		card: 'summary_large_image',
		site: 'https://survey-form-sepia.vercel.app/',
	},
}

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>): JSX.Element {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}
