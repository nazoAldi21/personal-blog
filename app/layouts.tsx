import './globals.css'
import type { Metadata } from 'next'
import { Header, Footer } from '@components'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Creates By Fauzan Aldi',
};

 const Layout:React.FC<{ showHeader: boolean; showFooter: boolean}> = ({
  showHeader = true,
  showFooter = true,
  children,
}) => {
  return (
    <html lang="en">
      <body>
      {showHeader && <Header />}
        {children}
        {showFooter && <Footer />}
      </body>
    </html>
  );
};


export default Layout
