import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 4,
        backgroundColor: '#f8f8f8',
        textAlign: 'center',
      }}
    >
      <Grid container spacing={3} flexDirection="column" alignItems="center">
        <Grid>
          <Typography variant="h4" color="primary" gutterBottom>
            🚧 Site Under Construction
          </Typography>
        </Grid>
        <Grid>
          <Typography variant="body1">
            We’re preparing something beautiful for your pilgrimage in Rome.
            <br />
            Check back soon!
          </Typography>
        </Grid>
        <Grid>
          <Button
            variant="outlined"
            color="secondary"
            href="mailto:spascaru@gmail.com"
            sx={{ marginTop: 2 }}
          >
            Contact Us
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
