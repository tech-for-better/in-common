import { Box } from '@mui/system';
import CircularProgress from '@mui/material/CircularProgress';

export default function Loading() {
  return (
    <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
      <CircularProgress sx={{ color: '#f55e61' }} />
    </Box>
  );
}
