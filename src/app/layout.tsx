import {
  ClerkProvider,
 
} from '@clerk/nextjs'
import './globals.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className='items-center justify-center'>
        
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}