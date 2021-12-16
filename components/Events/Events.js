import { Container, Card } from '@mui/material';

export default function Events({ arr }) {
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
              <p>
                Event Requested by {record.fields['Sender Organisation Name']}{' '}
                and Sent to {record.fields['Recipient Organisation Name']}
              </p>
              <p>
                The suggested Activity is {record.fields.Activity} with a group
                size of {record.fields['Group Size']} people
              </p>

              <Card
                sx={{
                  marginTop: 2,
                }}
              >
                Please confirm a date and time below:
                {record.fields['Suggested Dates']}
              </Card>
              <Card
                sx={{
                  marginTop: 2,
                }}
              >
                The confirmed date is {record.fields['Confirmed Date']}
              </Card>
              <Card
                sx={{
                  marginTop: 2,
                }}
              >
                Additional Notes from your partner: {record.fields.Notes}
              </Card>
            </Card>
          </Container>
        ))
      )}
    </div>
  );
}
