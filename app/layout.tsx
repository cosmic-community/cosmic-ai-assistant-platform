import './globals.css'
import { Inter } from 'next/font/google'
import CosmicBadge from '@/components/CosmicBadge'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cosmic AI Assistant',
  description: 'Advanced AI interface with cosmic aesthetics',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string
  
  return (
    <html lang="en">
      <head>
        <script src="/dashboard-console-capture.js"></script>
      </head>
      <body className={inter.className}>
        {children}
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  )
}