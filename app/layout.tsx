import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "FeedXChange - Taking Charge of Your Feed Costs",
  description:
    "FeedXChange empowers Western Canadian farmers with the lowest prices on byproduct feeds. Save time, cut costs, and feed smarter.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

