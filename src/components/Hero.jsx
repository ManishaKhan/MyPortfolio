import { Box, Typography, Stack } from '@mui/material'
import { motion } from 'framer-motion'
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded'

const name = 'Manisha Khan'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.045, delayChildren: 0.3 },
  },
}

const letter = {
  hidden: { y: '110%' },
  show: {
    y: '0%',
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

function SprocketRail() {
  return (
    <Stack
      direction="row"
      spacing={{ xs: 1.2, md: 2.2 }}
      sx={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 1,
        px: { xs: 2.5, md: 6 },
        opacity: 0.5,
        overflow: 'hidden',
        justifyContent: 'center',
      }}
    >
      {Array.from({ length: 40 }).map((_, i) => (
        <Box
          key={i}
          sx={{
            width: 6,
            height: 10,
            borderRadius: '2px',
            bgcolor: 'divider',
            flexShrink: 0,
          }}
        />
      ))}
    </Stack>
  )
}

export default function Hero() {
  return (
    <Box
    id="about"
      component="section"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        px: { xs: 3, md: 6 },
        pt: 10,
        overflow: 'hidden',
        alignItems: 'center',
      }}
    >
      <Box sx={{ position: 'absolute', top: 96, width: '100%' }}>
        <SprocketRail />
      </Box>
      <Box sx={{ position: 'absolute', bottom: 64, width: '100%' }}>
        <SprocketRail />
      </Box>

      <Box sx={{ overflow: 'hidden', mt: 2 }}>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          style={{ display: 'flex', flexWrap: 'wrap' }}
        >
          {name.split('').map((char, i) => (
            <Box key={i} sx={{ overflow: 'hidden' }}>
              <motion.div variants={letter}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.6rem', sm: '4.5rem', md: '6.5rem' },
                    color: 'text.primary',
                    whiteSpace: 'pre',
                    lineHeight: 1,
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </Typography>
              </motion.div>
            </Box>
          ))}
        </motion.div>
      </Box>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <Typography
          variant="body1"
          sx={{
            color: 'text.secondary',
            mt: 3,
            fontSize: '1.05rem',
          }}
        >
          I'm a passionate Frontend Developer with over 3 years of experience building modern, responsive, and user-friendly web applications. I specialize in creating clean, scalable, and high-performance interfaces using React.js, JavaScript (ES6+), Material UI, Tailwind CSS, HTML5, and CSS3.
          When I'm not coding, I enjoy learning about new frontend technologies, experimenting with modern UI/UX trends, and contributing to personal projects that help me grow as a developer.
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          sx={{ mt: 6, color: 'text.secondary' }}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDownwardRoundedIcon fontSize="small" />
          </motion.div>
          <Typography variant="overline" sx={{ fontSize: '0.7rem' }}>
            scroll to play
          </Typography>
        </Stack>
      </motion.div>
    </Box>
  )
}
