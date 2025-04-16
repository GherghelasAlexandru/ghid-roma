import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';

import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)', // Dark gradient
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 4,
        textAlign: 'center',
        color: '#fff',
      }}
    >
      <Box sx={{ maxWidth: 600, width: '100%' }}>
        <Typography variant="h3" sx={{ fontWeight: 600 }} gutterBottom>
          UNDER CONSTRUCTION
        </Typography>

        <Typography variant="subtitle1" sx={{ mb: 3 }}>
          SITE NEARLY READY
        </Typography>

        <LinearProgress variant="determinate" value={95} sx={{ mb: 3, height: 10, borderRadius: 5 }} />

        <Button
          variant="contained"
          color="primary"
          href="mailto:spascaru@gmail.com"
          sx={{ mb: 5, textTransform: 'none', px: 4 }}
        >
          Notify Me
        </Button>

        <Stack direction="row" spacing={3} justifyContent="center" sx={{ mb: 4 }}>
          <IconButton color="inherit" href="https://facebook.com" target="_blank">
            <FacebookIcon />
          </IconButton>
          <IconButton color="inherit" href="https://linkedin.com" target="_blank">
            <LinkedInIcon />
          </IconButton>
          <IconButton color="inherit" href="https://instagram.com" target="_blank">
            <InstagramIcon />
          </IconButton>
          <IconButton color="inherit" href="https://twitter.com" target="_blank">
            <TwitterIcon />
          </IconButton>
        </Stack>

        <Typography variant="caption" sx={{ opacity: 0.7 }}>
          © 2024 Pilgrimage Rome. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
