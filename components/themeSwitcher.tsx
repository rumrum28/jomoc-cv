'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'

const Moon = () => {
  return (
    <svg
      className="w-6 h-6 fill-slate-100"
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-testid="DarkModeIcon"
    >
      <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"></path>
    </svg>
  )
}

const Sun = () => {
  return (
    <svg
      className="w-6 h-6 fill-yellow-500"
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-testid="LightModeIcon"
    >
      <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"></path>
    </svg>
  )
}

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState<boolean>(false)
  const { theme, setTheme } = useTheme()
  const [slideBottom, setSlideBottom] = useState('')

  useEffect(() => {
    setMounted(true)

    const timer = setTimeout(() => {
      setSlideBottom('')
    }, 200)

    return () => clearTimeout(timer)
  }, [slideBottom])

  const themeHandler = () => {
    setSlideBottom('slide-out-bottom opacity-0')

    const timer = setTimeout(() => {
      setTheme(!theme ? 'light' : theme === 'dark' ? 'light' : 'dark')
    }, 200)

    return () => clearTimeout(timer)
  }

  if (!mounted) return null

  return (
    <Button
      className={`${
        !theme
          ? 'light'
          : 'dark'
          ? 'dark:bg-darkBrown border border-primaryBrown dark:hover:bg-primaryBrown'
          : 'bg-lightBrown border border-skinLightBrown '
      } opacity-100 rounded h-9 w-9 flex justify-center items-center transition-all duration-500 overflow-hidden`}
      onClick={themeHandler}
    >
      <span className={`slide-in-top ${slideBottom}`}>
        {!theme ? 'light' : theme === 'dark' ? <Moon /> : <Sun />}
      </span>
    </Button>
  )
}

export default ThemeSwitcher