import './globals.css'

export const metadata = {
    title: 'artist website',
    description: 'artist website template',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
}
