
import { useState } from 'react'
import { Box, Typography, Stack, Chip, Button, Grid } from '@mui/material'
import { motion } from 'framer-motion'
import projects from '../data/projects.js'

function Frame({ project, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Box
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      tabIndex={0}
      component={motion.div}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: (index % 3) * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      animate={{ y: hovered ? -6 : 0 }}
      sx={{
        position: "relative",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: "4px",
        border: "1px solid",
        borderColor: "divider",
        bgcolor: "background.paper",
        overflow: "hidden",
        height: "100%",
      }}
    >
      <Box
        sx={{
          height: { xs: 170, sm: 220 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          component="img"
          src={project.image}
          alt={project.title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,.55), rgba(0,0,0,.15), transparent)",
          }}
        />
        <Typography
          variant="overline"
          sx={{
            color: "#fff",
            fontSize: "0.7rem",
            position: "absolute",
            left: 24,
            bottom: 20,
            zIndex: 2,
          }}
        >
          {project.timecode}
        </Typography>
        <Box
          component={motion.div}
          animate={{ opacity: hovered ? 1 : 0.35 }}
          sx={{
            position: 'absolute',
            top: { xs: 14, sm: 20 },
            right: { xs: 14, sm: 20 },
            fontFamily: '"Fraunces", serif',
            fontSize: { xs: '2.4rem', sm: '3.2rem' },
            color: "#fff",
            lineHeight: 1,
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </Box>
      </Box>

      <Box
        sx={{
          p: { xs: 2.25, sm: 3 },
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        <Typography variant="h4" sx={{ fontSize: { xs: '1.35rem', sm: '1.6rem' }, color: 'text.primary' }}>
          {project.title}
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: 'text.secondary', mt: 0.5, mb: 1.5 }}
        >
          {project.role} · {project.year}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            mb: 2.5,
          }}
        >
          {project.blurb}
        </Typography>

        <Stack
          direction="row"
          spacing={1}
          flexWrap="wrap"
          useFlexGap
          sx={{ mb: 3 }}
        >
          {project.tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              sx={{
                bgcolor: 'transparent',
                border: '1px solid',
                borderColor: 'divider',
                color: 'text.secondary',
                fontSize: '0.7rem',
                borderRadius: '2px',
              }}
            />
          ))}
        </Stack>

        <Button
          variant="contained"
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            mt: "auto",
            alignSelf: "flex-start",
            textTransform: "none",
            borderRadius: "10px",
            px: 3,
            py: 1,
            fontWeight: 600,
            bgcolor: "#A8944D",
            "&:hover": {
              bgcolor: "#8d7a37",
            },
          }}
        >
          View Project →
        </Button>
      </Box>
    </Box>
  )
}

export default function ProjectReel() {
  return (
    <Box id="project" sx={{ px: { xs: 2.5, md: 6 }, py: { xs: 6, md: 10 } }}>
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        sx={{ mb: { xs: 3, md: 4 } }}
      >

        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '1.6rem', sm: '2.2rem', md: '3rem' },
            color: 'text.primary',
            mt: 1,
          }}
        >
          Projects
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'text.secondary',
            maxWidth: 480,
            mt: 1,
          }}
        >
          A few recent projects.
        </Typography>
      </Box>

      <Grid container spacing={{ xs: 3, md: 4 }} alignItems="stretch">
        {projects.map((project, i) => (
          <Grid item xs={12} sm={6} md={4} key={project.title}>
            <Frame project={project} index={i} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}