import {
  Container,
  Box,
  Alert,
  Card,
  InputLabel,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';

export default function Inbox({ arr }) {
  // console.log(arr);
  return (
    <div>
      {!arr ? (
        <p>No events yet</p>
      ) : (
        arr.map((record) => (
          <Container maxWidth="xs" key={record.id}>
            <Card
              sx={{
                minWidth: 275,
                marginTop: 8,
                padding: 5,
                borderRadius: 3,
                backgroundColor: '#bbc3c7',
                color: 'white',
                mt: 5,
              }}
            >
              {/* Placeholder */}
            </Card>
          </Container>
        ))
      )}
    </div>
  );
}
