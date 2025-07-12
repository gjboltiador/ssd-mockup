import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SSD - Sport Supplements Direct',
  description: 'Australia\'s trusted source for premium, natural supplements. Expertly formulated for peak performance and optimal health.',
  generator: 'v0.dev',
  icons: {
    icon: '/ssd_icon_transparent.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
