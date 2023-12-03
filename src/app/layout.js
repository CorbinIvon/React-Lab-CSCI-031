import { Inter } from 'next/font/google';
import './globals.css';
import { Theme, ThemePanel } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Corbin's Next.js Site",
  description: "Site for Corbin's Next.js project",
};
const colorGradients = ['from-gray-900', 'from-teal-900', 'from-purple-900', 'from-yellow-900'];
const randomIndex = Math.floor(Math.random() * colorGradients.length);
const gradientFrom = colorGradients[randomIndex];
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* It was being weird and back ticks weren't working... */}
      {/* <body className={inter.className + ' bg-gradient-to-b ' + gradientFrom + ' to-black'}> */}
      <body>
        <Theme appearance="dark" accentColor="purple" grayColor="slate" scaling="95%">
          {/* <ThemePanel /> */}
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow">{children}</main>
          </div>
        </Theme>
      </body>
    </html>
  );
}
