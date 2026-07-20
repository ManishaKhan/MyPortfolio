import { Box, Typography, Button, Stack } from '@mui/material'
import { motion } from 'framer-motion'
import NorthEastRoundedIcon from '@mui/icons-material/NorthEastRounded'

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function Contact() {
  return (
    <Box
      id="contact"
      component="section"
      sx={{
        px: { xs: 3, md: 6 },
        py: { xs: 10, md: 18 },
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >

        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '2.4rem', md: '4rem' },
            color: 'text.primary',
            mt: 2,
            maxWidth: 780,
          }}
        >
          Got something worth animating?
        </Typography>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          sx={{ mt: 5 }}
        >

          <Button
            component="a"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=manishakhan646@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            endIcon={<NorthEastRoundedIcon />}
          >
            manishakhan646@gmail.com
          </Button>

          <Button
              href="/Manisha_Khan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              size="large"
            >
              View Resume
          </Button>

          {/* <Button
            href="#"
            variant="outlined"
            size="large"
            sx={{
              borderColor: 'divider',
              color: 'text.primary',
              '&:hover': { borderColor: 'secondary.main', color: 'secondary.main' },
            }}
          >
            Download resume
          </Button> */}
        </Stack>
      </motion.div>
    </Box>
  )
}
