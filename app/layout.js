// app/layout.js
import { Lexend, Silkscreen } from '@next/font/google'; 
import "./globals.css";

const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-lexend', 
});

const silkscreen = Silkscreen({
  subsets: ['latin'],
  weight: '400', 
  variable: '--font-silkscreen',
});

export const metadata = {
  title: "Portfólio",
  description: "Portfólio de Gabriel Santos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body className={`${lexend.className} ${silkscreen.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}