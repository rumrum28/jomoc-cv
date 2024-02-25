'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import Loading from './loading'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'

export default function Providers({ children, ...props }: ThemeProviderProps) {
  const [queryClient] = useState(() => new QueryClient())
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [setMounted])

  return (
    <QueryClientProvider client={queryClient}>
      <NextThemesProvider {...props}>
        {!mounted && <Loading />}
        {mounted && children}
      </NextThemesProvider>
    </QueryClientProvider>
  )
}
