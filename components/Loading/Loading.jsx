import { Box } from '@mui/system';
import CircularProgress from '@mui/material/CircularProgress';

export default function Loading() {
  return (
    <Box sx={{ width: '100%' }}>
      <CircularProgress />
    </Box>
  );
}
