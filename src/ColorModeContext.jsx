import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { getTheme } from './theme.js'

const ColorModeContext = createContext({
  mode: 'dark',
  toggleMode: () => {},
})

export function useColorMode() {
  return useContext(ColorModeContext)
}

function getInitialMode() {
  if (typeof window === 'undefined') return 'dark'
  const stored = window.localStorage.getItem('reel-color-mode')
  if (stored === 'light' || stored === 'dark') return stored
  // fall back to the visitor's OS preference on first visit
  const prefersLight = window.matchMedia?.('(prefers-color-scheme: light)').matches
  return prefersLight ? 'light' : 'dark'
}

export function ColorModeProvider({ children }) {
  const [mode, setMode] = useState(getInitialMode)

  useEffect(() => {
    window.localStorage.setItem('reel-color-mode', mode)
  }, [mode])

  const value = useMemo(
    () => ({
      mode,
      toggleMode: () => setMode((m) => (m === 'dark' ? 'light' : 'dark')),
    }),
    [mode],
  )

  const theme = useMemo(() => getTheme(mode), [mode])

  return (
    <ColorModeContext.Provider value={value}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  )
}
