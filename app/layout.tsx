import './globals.css'

export const metadata = {
  title: 'Next.js + Drei',
  description: 'Minimal Next.js app with React Three Drei',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
