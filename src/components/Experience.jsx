
import { Box, Typography, Stack } from '@mui/material'
import { motion } from 'framer-motion'
import experience, { profileSummary } from '../data/experience.js'

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export default function Experience() {
  return (
    <Box
      component="section"
      id="experience"
      sx={{
        px: { xs: 3, md: 6 },
        py: { xs: 10, md: 16 },
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
            fontSize: { xs: '1.7rem', sm: '2.2rem', md: '2.6rem' },
            color: 'text.primary',
            mt: 1,
            mb: { xs: 2.5, md: 3 },
          }}
        >
          Work Expeience
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'text.secondary',
            // maxWidth: 680,
            mb: { xs: 5, md: 7 },
          }}
        >
          {profileSummary}
        </Typography>
      </motion.div>

      <Stack sx={{ position: 'relative' }}>
        {/* vertical spine */}
        <Box
          sx={{
            position: 'absolute',
            left: { xs: 5, sm: 5 },
            top: 8,
            bottom: 8,
            width: '1px',
            bgcolor: 'divider',
          }}
        />
        {experience.map((entry, i) => (
          <motion.div
            key={entry.role}
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: i * 0.1 }}
          >
            <Stack
              direction="row"
              spacing={{ xs: 2.5, md: 4 }}
              sx={{ pb: i === experience.length - 1 ? 0 : { xs: 5, md: 6 } }}
            >
              <Box sx={{ position: 'relative', flexShrink: 0, width: 11 }}>
                <Box
                  sx={{
                    width: 11,
                    height: 11,
                    borderRadius: '50%',
                    bgcolor: 'background.default',
                    border: '2px solid',
                    borderColor: 'primary.main',
                    mt: 0.6,
                  }}
                />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="overline"
                  sx={{ color: 'text.secondary', fontSize: '0.68rem' }}
                >
                  {entry.period}
                </Typography>
                <Typography
                  variant="h4"
                  sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' }, color: 'text.primary', mt: 0.5 }}
                >
                  {entry.role}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: 'primary.main', mb: 1, mt: 0.25 }}
                >
                  {entry.org}
                </Typography>
                {entry.detail && (
                  <Typography
                    variant="body2"
                    sx={{ color: 'text.secondary', maxWidth: 620, mb: entry.projects?.length ? 2 : 0 }}
                  >
                    {entry.detail}
                  </Typography>
                )}

                {entry.projects?.length > 0 && (
                  <Stack spacing={1.5} sx={{ mt: 1.5, maxWidth: 620 }}>
                    {entry.projects.map((project) => (
                      <Box
                        key={project.name}
                        sx={{
                          pl: 2,
                          borderLeft: '2px solid',
                          borderColor: 'divider',
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{ color: 'text.primary', fontWeight: 600 }}
                        >
                          {project.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.25 }}>
                          {project.detail}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                )}
              </Box>
            </Stack>
          </motion.div>
        ))}
      </Stack>
    </Box>
  )
}