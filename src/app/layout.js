import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../../components/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'BcLabs',
  description: 'BcLabs',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} relative min-h-screen bg-cover bg-center bg-no-repeat bg-black`}
        style={{ backgroundImage: "url('/bg.png')" }}>
        <div className=" bg-opacity-70 min-h-screen">
          <Navbar />

          <div className="container mx-auto px-4 pt-16">{children}</div>
        </div>
      </body>
    </html>
  );
}
