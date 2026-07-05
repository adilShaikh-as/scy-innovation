import './globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'SCY Innovation | Premium IT & Digital Solutions',
  description: 'Enterprise-grade Custom Web Applications, Headless Commerce, and structural MVP Development.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#F4F6F0]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}