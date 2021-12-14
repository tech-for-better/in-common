import { Container } from '@mui/material';

export default function Outbox({ arr }) {
  return (
    <div>
      {arr.length === 0 ? (
        <p>No events yet</p>
      ) : (
        arr.map((record) => (
          <Container maxWidth="xs" key={record.id}></Container>
        ))
      )}
    </div>
  );
}
