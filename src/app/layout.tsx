import type { Metadata } from 'next'
import '../scss/main.scss'

export const metadata: Metadata = {
	title: 'Survey Form | freeCodeCamp',
	description: 'This is a simple html-css based survey form, a freecodecamp assignment',
	openGraph: {
		url: 'https://survey-form-sepia.vercel.app/',
		type: 'website',
		title: 'Survey Form | freeCodeCamp',
		description: 'This is a simple html-css based survey form, a freecodecamp assignment',
		images: [
			'https://raw.githubusercontent.com/FedeHide/survey-form/main/public/assets/survey-form-screenshot.webp',
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
