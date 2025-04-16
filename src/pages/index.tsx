import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg,rgb(37, 39, 15), #203a43, #2c5364)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
        textAlign: 'center',
        color: '#fff',
      }}
    >
      <Box sx={{ width: '100%', maxWidth: 500 }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 'bold', mb: 1, wordBreak: 'break-word' }}
        >
          UNDER CONSTRUCTION
        </Typography>

        <Typography variant="subtitle1" sx={{ mb: 2 }}>
          SITE NEARLY READY
        </Typography>

        <LinearProgress
          variant="determinate"
          value={90}
          sx={{
            mb: 3,
            height: 10,
            borderRadius: 5,
            backgroundColor: 'rgba(250, 207, 67, 0.1)',
            '& .MuiLinearProgress-bar': {
              backgroundColor: '#9c27b0',
            },
          }}
        />

        <Button
          variant="contained"
          color="primary"
          href="mailto:spascaru@gmail.com"
          sx={{ mb: 4, px: 4 }}
        >
          Get in touch
        </Button>

        <Stack direction="row" spacing={3} justifyContent="center" sx={{ mb: 2 }}>
          <IconButton color="inherit" href="https://www.facebook.com/sorinel.pascaru?mibextid=wwXIfr&rdid=ivtaauHyjJoXHXAn&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18Cf9V4N7M%2F%3Fmibextid%3DwwXIfr#" target="_blank">
            <FacebookIcon />
          </IconButton>
          <IconButton color="inherit" href="https://instagram.com" target="_blank">
            <InstagramIcon />
          </IconButton>
        </Stack>

        <Typography variant="caption">
          © 2024 Ghid Teolog Roma. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
