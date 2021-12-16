import { Alert } from '@mui/material';

export default function Error({ children }) {
  return (
    <Alert severity="error" sx={{ padding: 1.85, mt: 2 }}>
      {children}{' '}
    </Alert>
  );
}
