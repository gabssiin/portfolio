import { Lexend } from '@next/font/google';

import "./globals.css";

const lexend = Lexend({
  subsets: ['latin'], 
  variable: '--font-lexend', 
});

export const metadata = {
  title: "Portfólio",
  description: "Portfólio de Gabriel Santos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lexend.className} antialiased`}> {}
        {children}
      </body>
    </html>
  );
}