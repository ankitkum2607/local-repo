import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';

export const metadata = {
  title: 'EstatePrime | Modern Real Estate',
  description: 'Discover premium properties with a modern, smooth real estate experience.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="gradient-bg min-h-[80vh]">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <PageTransition>{children}</PageTransition>
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
