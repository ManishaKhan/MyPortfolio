import { Box, Typography, Grid, Stack } from '@mui/material'
import { motion } from 'framer-motion'

const stack = [
  { label: 'React / TypeScript', note: 'daily driver, 6 yrs' },
  { label: 'Framer Motion / GSAP', note: 'motion & interaction' },
  { label: 'Material UI / design systems', note: 'component architecture' },
  { label: 'Node / Postgres', note: 'when the frontend needs a backend' },
]

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function About() {
  return (
    <Box
      id="about"
      component="section"
      sx={{ px: { xs: 3, md: 6 }, py: { xs: 12, md: 18 } }}
    >
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        <Typography variant="overline" sx={{ color: 'primary.main' }}>
          00:02:58:00 — ABOUT
        </Typography>
      </motion.div>

      <Grid container spacing={{ xs: 6, md: 10 }} sx={{ mt: 1 }}>
        <Grid item xs={12} md={6}>
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.9rem', md: '2.6rem' },
                color: 'text.primary',
                mb: 3,
              }}
            >
              I build the frames between states, not just the states
              themselves.
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              Most interfaces jump. Mine transition — because the moment
              between two states is where a product either feels considered
              or feels like software. I spend most of my time in that gap:
              choreographing load sequences, scroll behavior, and the small
              hover feedback that makes an interface feel alive without
              getting in the way.
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mt: 2 }}>
              Based in Bengaluru, working with product teams remotely.
              Previously shipped design systems for two Series B startups.
            </Typography>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={6}>
          <Stack spacing={0}>
            {stack.map((item, i) => (
              <motion.div
                key={item.label}
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.6 }}
                transition={{ delay: i * 0.08 }}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  justifyContent="space-between"
                  alignItems={{ xs: 'flex-start', sm: 'center' }}
                  sx={{
                    py: 2.2,
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                    gap: { xs: 0.5, sm: 2 },
                  }}
                >
                  <Typography variant="body1" sx={{ color: 'text.primary' }}>
                    {item.label}
                  </Typography>
                  <Typography
                    variant="overline"
                    sx={{ color: 'text.secondary', fontSize: '0.7rem' }}
                  >
                    {item.note}
                  </Typography>
                </Stack>
              </motion.div>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  )
}
