import { createTheme } from '@mui/material/styles'

// ---- Design tokens ----
// Two modes, named for the two places you'd actually look at a reel:
//   'dark'  → "Screening Room" — near-black, projected-image feel
//   'light' → "Light Table"    — the pale surface editors view negatives on
//
// Both share the same accent pair (brass + teal) and type system so the
// toggle changes surface/contrast, not identity.

const shared = {
  typography: {
    fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
    h1: { fontFamily: '"Fraunces", Georgia, serif', fontWeight: 500, letterSpacing: '-0.02em' },
    h2: { fontFamily: '"Fraunces", Georgia, serif', fontWeight: 500, letterSpacing: '-0.015em' },
    h3: { fontFamily: '"Fraunces", Georgia, serif', fontWeight: 500 },
    h4: { fontFamily: '"Fraunces", Georgia, serif', fontWeight: 500 },
    body1: { fontWeight: 300, lineHeight: 1.7 },
    body2: { fontWeight: 300, lineHeight: 1.6 },
    button: { textTransform: 'none', fontWeight: 500 },
    overline: { fontFamily: '"IBM Plex Mono", monospace', letterSpacing: '0.12em', fontWeight: 400 },
  },
  shape: { borderRadius: 2 },
  components: {
    MuiButton: {
      styleOverrides: { root: { borderRadius: 2, padding: '10px 22px' } },
    },
  },
}

const palettes = {
  dark: {
    mode: 'dark',
    background: { default: '#0E1116', paper: '#161B22' },
    primary: { main: '#D8A24A', contrastText: '#0E1116' },
    secondary: { main: '#4FA8A0', contrastText: '#0E1116' },
    text: { primary: '#EDEFF2', secondary: '#8A93A2' },
    divider: '#D9D4C8',
  },
  light: {
    mode: 'light',
    background: { default: '#EEECE6', paper: '#F7F5F1' },
    primary: { main: '#A8701F', contrastText: '#F7F5F1' },
    secondary: { main: '#2F7F78', contrastText: '#F7F5F1' },
    text: { primary: '#1B1D22', secondary: '#5B6270' },
    divider: '#2A313C',
  },
}

// Extra tokens components reach for directly (sx={{ color: '#2A313C' }} etc.)
// that aren't part of MUI's palette shape — exposed via theme.custom.
const customTokens = {
  dark: {
    hairline: '#2A313C',
    sprocket: '#2A313C',
    glow: '0 0 8px #D8A24A',
  },
  light: {
    hairline: '#D9D4C8',
    sprocket: '#CFC9BA',
    glow: '0 0 8px #A8701F55',
  },
}

export function getTheme(mode = 'dark') {
  const safeMode = palettes[mode] ? mode : 'dark'
  return createTheme({
    ...shared,
    palette: palettes[safeMode],
    custom: customTokens[safeMode],
  })
}

export default getTheme('dark')
