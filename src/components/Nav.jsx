import { useState } from 'react'
import {
  Box,
  Stack,
  Typography,
  Button,
  IconButton,
  Drawer,
  useTheme,
} from '@mui/material'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded'
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded'
import { useColorMode } from '../ColorModeContext.jsx'

const links = [
  
  { label: 'Projects', href: '#project' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#experience' },
  { label: 'Contact', href: '#contact' },
  { label: 'GitHub', href: 'https://github.com/ManishaKhan' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/manisha-khan-5a164a242/' },
  
]



function ModeToggle() {
  const { mode, toggleMode } = useColorMode()
  return (
    <IconButton
      onClick={toggleMode}
      aria-label="Toggle light and dark mode"
      size="small"
      sx={{
        color: 'text.secondary',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: '50%',
        '&:hover': { color: 'primary.main', borderColor: 'primary.main' },
      }}
    >
      <motion.div
        key={mode}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        style={{ display: 'flex' }}
      >
        {mode === 'dark' ? (
          <LightModeRoundedIcon fontSize="small" />
        ) : (
          <DarkModeRoundedIcon fontSize="small" />
        )}
      </motion.div>
    </IconButton>
  )
}

export default function Nav() {
  const theme = useTheme()
  const { scrollY } = useScroll()
  const [solid, setSolid] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setSolid(latest > 40)
  })

  const bgSolid =
    theme.palette.mode === 'dark' ? 'rgba(14,17,22,0.75)' : 'rgba(247,245,241,0.8)'

  return (
    <Box
      component={motion.header}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        px: { xs: 2.5, md: 6 },
        py: solid ? 1.5 : 2.5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'all 0.35s ease',
        backdropFilter: solid ? 'blur(10px)' : 'none',
        backgroundColor: solid ? bgSolid : 'transparent',
        borderBottom: '1px solid',
        borderColor: solid ? 'divider' : 'transparent',
      }}
    >
      <Stack direction="row" alignItems="center" spacing={1}>
        <Box
          sx={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            bgcolor: 'primary.main',
            boxShadow: (t) => t.custom.glow,
            flexShrink: 0,
          }}
        />
        <Typography
          variant="overline"
          sx={{ color: 'text.primary', fontSize: { xs: '0.68rem', sm: '0.75rem' } }}
        >
          PORFOLIO
        </Typography>
      </Stack>

      {/* Desktop links */}
      <Stack
        direction="row"
        spacing={4}
        alignItems="center"
        sx={{ display: { xs: 'none', sm: 'flex' } }}
      >
        {links.map((link) => (
          <Typography
            key={link.href}
            component="a"
            href={link.href}
            variant="body2"
            sx={{
              color: 'text.secondary',
              textDecoration: 'none',
              letterSpacing: '0.02em',
              transition: 'color 0.2s ease',
              '&:hover': { color: 'primary.main' },
            }}
          >
            {link.label}
          </Typography>
        ))}
        <ModeToggle />
        <Button
          href="#contact"
          variant="outlined"
          size="small"
          sx={{
            borderColor: 'divider',
            color: 'text.primary',
            '&:hover': { borderColor: 'primary.main', color: 'primary.main' },
          }}
        >
          Let&rsquo;s talk
        </Button>
      </Stack>

      {/* Mobile controls */}
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        sx={{ display: { xs: 'flex', sm: 'none' } }}
      >
        <ModeToggle />
        <IconButton
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          size="small"
          sx={{ color: 'text.primary' }}
        >
          <MenuRoundedIcon />
        </IconButton>
      </Stack>

      <Drawer
        anchor="right"
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        PaperProps={{
          sx: {
            width: '78vw',
            maxWidth: 320,
            bgcolor: 'background.default',
            borderLeft: '1px solid',
            borderColor: 'divider',
            px: 3,
            py: 3,
          },
        }}
      >
        <Stack direction="row" justifyContent="flex-end">
          <IconButton
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            sx={{ color: 'text.primary' }}
          >
            <CloseRoundedIcon />
          </IconButton>
        </Stack>
        <Stack spacing={0.5} sx={{ mt: 2 }}>
          {links.map((link) => (
            <Typography
              key={link.href}
              component="a"
              href={link.href}
              onClick={() => setMenuOpen(false)}
              variant="h4"
              sx={{
                fontSize: '1.6rem',
                py: 1.6,
                borderBottom: '1px solid',
                borderColor: 'divider',
                color: 'text.primary',
                textDecoration: 'none',
                '&:hover': { color: 'primary.main' },
              }}
            >
              {link.label}
            </Typography>
          ))}
        </Stack>
        <Button
          href="#contact"
          onClick={() => setMenuOpen(false)}
          variant="contained"
          fullWidth
          sx={{
            mt: 4,
            bgcolor: 'primary.main',
            color: 'background.default',
          }}
        >
          Let&rsquo;s talk
        </Button>
      </Drawer>
    </Box>
  )
}
