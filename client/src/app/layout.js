import Header from '../components/Header';
import Footer from '../components/Footer';

import './globals.css';

export const metadata = {
    title: 'artist website',
    description: 'artist website template',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Header />
                <main>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}
