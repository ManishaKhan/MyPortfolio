// import { Box, Typography, Grid, Stack } from '@mui/material'
// import { motion } from 'framer-motion'
// import skillCategories from '../data/skills.js'

// const reveal = {
//   hidden: { opacity: 0, y: 24 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
// }

// function LevelBar({ name, level, delay }) {
//   return (
//     <Box sx={{ mb: 2.5 }}>
//       <Stack direction="row" justifyContent="space-between" sx={{ mb: 0.75 }}>
//         <Typography variant="body2" sx={{ color: 'text.primary' }}>
//           {name}
//         </Typography>
//         <Typography
//           variant="overline"
//           sx={{ color: 'text.secondary', fontSize: '0.65rem' }}
//         >
//           {level}%
//         </Typography>
//       </Stack>
//       <Box
//         sx={{
//           height: 6,
//           borderRadius: 1,
//           bgcolor: 'divider',
//           overflow: 'hidden',
//         }}
//       >
//         <Box
//           component={motion.div}
//           initial={{ width: 0 }}
//           whileInView={{ width: `${level}%` }}
//           viewport={{ once: true, amount: 0.8 }}
//           transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
//           sx={{ height: '100%', bgcolor: 'primary.main', borderRadius: 1 }}
//         />
//       </Box>
//     </Box>
//   )
// }

// export default function Skills() {
//   return (
//     <Box
//       id="skills"
//       component="section"
//       sx={{
//         px: { xs: 3, md: 6 },
//         py: { xs: 10, md: 16 },
//         borderTop: '1px solid',
//         borderColor: 'divider',
//       }}
//     >
//       <motion.div
//         variants={reveal}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, amount: 0.4 }}
//       >
//         <Typography variant="overline" sx={{ color: 'primary.main' }}>
//           00:03:00:00 — CALIBRATION
//         </Typography>
//         <Typography
//           variant="h2"
//           sx={{
//             fontSize: { xs: '1.7rem', sm: '2.2rem', md: '2.6rem' },
//             color: 'text.primary',
//             mt: 1,
//             mb: { xs: 4, md: 6 },
//             maxWidth: 640,
//           }}
//         >
//           Signal levels, checked before every take.
//         </Typography>
//       </motion.div>

//       <Grid container spacing={{ xs: 5, md: 8 }}>
//         {skillCategories.map((category, ci) => (
//           <Grid item xs={12} md={6} key={category.label}>
//             <motion.div
//               variants={reveal}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ delay: ci * 0.1 }}
//             >
//               <Typography
//                 variant="overline"
//                 sx={{ color: 'text.secondary', display: 'block', mb: 2.5 }}
//               >
//                 {category.label}
//               </Typography>
//               {category.items.map((item, i) => (
//                 <LevelBar
//                   key={item.name}
//                   name={item.name}
//                   level={item.level}
//                   delay={0.15 + i * 0.08}
//                 />
//               ))}
//             </motion.div>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   )
// }



import { Box, Typography, Grid, Stack, Chip } from '@mui/material'
import { motion } from 'framer-motion'
import skillCategories from '../data/skills.js'

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

const chipVariant = {
  hidden: { opacity: 0, y: 10, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
}

function SkillChip({ name }) {
  return (
    <Chip
      component={motion.div}
      variants={chipVariant}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      label={name}
      sx={{
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',
        color: 'text.primary',
        fontSize: '0.85rem',
        py: 2.5,
        px: 0.5,
        borderRadius: '8px',
        cursor: 'default',
        '&:hover': {
          borderColor: 'primary.main',
          bgcolor: 'action.hover',
        },
      }}
    />
  )
}

export default function Skills() {
  return (
    <Box
      id="skills"
      component="section"
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
            mb: { xs: 4, md: 6 },
            maxWidth: 640,
          }}
        >
         Skills: Tools of the trade
        </Typography>
      </motion.div>

      <Grid container spacing={{ xs: 5, md: 8 }}>
        {skillCategories.map((category, ci) => (
          <Grid item xs={12} md={6} key={category.label}>
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: ci * 0.1 }}
            >
              <Typography
                variant="overline"
                sx={{ color: 'text.secondary', display: 'block', mb: 2.5 }}
              >
                {category.label}
              </Typography>

              <Stack
                direction="row"
                flexWrap="wrap"
                useFlexGap
                spacing={1.25}
                component={motion.div}
                variants={{ show: { transition: { staggerChildren: 0.06 } } }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                gap="8px"
              >
                {category.items.map((name) => (
                  <SkillChip key={name} name={name} />
                ))}
              </Stack>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}