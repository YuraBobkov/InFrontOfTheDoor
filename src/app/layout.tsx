import '@/styles/globals.scss'

import { Box, CssBaseline } from '@mui/material'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Test swapi',
  description: 'Test swapi',
  icons: {
    icon: '/favicon.webp',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <CssBaseline />
      <body className={inter.className}>
        <Box display="flex" width="100%">
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            {children}
          </Box>
        </Box>
      </body>
    </html>
  )
}
