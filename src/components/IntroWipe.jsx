import { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'

export default function IntroWipe() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 900)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <Box
          component={motion.div}
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.87, 0, 0.13, 1] }}
          sx={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            bgcolor: '#0E1116',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 0.85, times: [0, 0.3, 0.7, 1] }}
          >
            <Typography
              variant="overline"
              sx={{ color: '#D8A24A', fontSize: '0.85rem', letterSpacing: '0.2em' }}
            >
              LOADING…
            </Typography>
          </motion.div>
        </Box>
      )}
    </AnimatePresence>
  )
}
