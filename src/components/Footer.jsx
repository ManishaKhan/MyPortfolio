import { Box, Typography, Stack } from '@mui/material'

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        px: { xs: 3, md: 6 },
        py: 4,
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between"
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        spacing={1}
      >
        <Typography variant="overline" sx={{ color: 'text.secondary', fontSize: '0.7rem' }}>
          © {new Date().getFullYear()} MANISHA KHAN
        </Typography>
        <Stack direction="row" spacing={3}>
        {[
          {
            label: 'GitHub',
            href: 'https://github.com/ManishaKhan',
          },
          {
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/manisha-khan-5a164a242/',
          },
        ].map(({ label, href }) => (
          <Typography
            key={label}
            component="a"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            variant="overline"
            sx={{
              fontSize: '0.7rem',
              color: 'text.secondary',
              textDecoration: 'none',
              fontWeight:'bold',
              '&:hover': {
                color: 'primary.main',
              },
            }}
          >
            {label}
          </Typography>
        ))}
      </Stack>
      </Stack>
    </Box>
  )
}
