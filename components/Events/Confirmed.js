import { Container, Card, Typography, Box, Button } from '@mui/material';
import moment from 'moment';
import MailIcon from '@mui/icons-material/Mail';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import GroupIcon from '@mui/icons-material/Group';
import DescriptionIcon from '@mui/icons-material/Description';
import DateRangeIcon from '@mui/icons-material/DateRange';

export default function Confirmed({ arr }) {
  async function decline(id) {
    const data = {
      recordId: id,
      confirmedDate: '1111-01-01T11:11:00.000Z',
      status: 'Cancelled',
    };

    await fetch('/api/confirmEventDate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }

  return (
    <div>
      <Container maxWidth="xs">
        <Card
          sx={{
            minWidth: 275,
            marginTop: 8,
            padding: 2,
            marginBottom: -6,
            borderRadius: 3,
            mt: 3,
            borderWidth: 0,
            backgroundColor: '#026969',
            color: 'white',
          }}
          variant="outlined"
        >
          <Typography variant="h6" sx={{ textAlign: 'center', mb: 2 }}>
            Confirmed
          </Typography>
        </Card>
      </Container>
      {arr.length === 0 || !arr ? (
        <Container maxWidth="xs">
          <Card
            sx={{
              minWidth: 275,
              marginTop: 8,
              padding: 5,
              borderRadius: 3,
              mt: 3,
              borderColor: '#026969',
            }}
            variant="outlined"
          >
            <Typography variant="body1">
              <MailIcon fontSize="md" sx={{ top: 2, mr: 1 }} />
              <b>No Confirmed Events</b>
            </Typography>
          </Card>
        </Container>
      ) : (
        arr.map((record) => (
          <Container key={record.id} maxWidth="xs">
            <Card
              sx={{
                minWidth: 275,
                marginTop: 8,
                padding: 5,
                borderRadius: 3,
                mt: 3,
                borderColor: '#026969',
              }}
              variant="outlined"
            >
              <Typography variant="body1">
                <MailIcon fontSize="md" sx={{ top: 2, mr: 1 }} />
                <b>Event with -</b>{' '}
                {record.fields['Recipient Organisation Name']} &{' '}
                {record.fields['Sender Organisation Name']}
              </Typography>
              <br />
              <Typography variant="body1">
                <LocalActivityIcon fontSize="md" sx={{ top: 2, mr: 1 }} />
                <b>Activity -</b> {record.fields.Activity}
              </Typography>
              <br />
              <Typography variant="body1">
                <GroupIcon fontSize="md" sx={{ top: 2, mr: 1 }} />
                <b>Group Size -</b> {record.fields['Group Size']} people
              </Typography>
              <br />
              <Typography variant="body1">
                <DescriptionIcon fontSize="md" sx={{ top: 2, mr: 1 }} />
                <b>Notes -</b> {record.fields.Notes}
              </Typography>
              <br />
              <Typography variant="body1">
                <DateRangeIcon fontSize="md" sx={{ top: 2, mr: 1 }} />
                Your agreed date and time:
              </Typography>
              <Box sx={{ minWidth: 120 }}>
                <Card
                  variant="outlined"
                  sx={{
                    textAlign: 'center',
                    mt: 3,
                    padding: 2,
                    backgroundColor: '#026969',
                    borderRadius: 10,
                    color: 'white',
                  }}
                >
                  {moment(record.fields['Confirmed Date']).format(
                    'Do MMMM YYYY, h:mma'
                  )}
                </Card>
              </Box>
              <Button
                fullWidth
                sx={{
                  padding: 1.85,
                  borderColor: '#026969',
                  color: '#026969',
                  borderRadius: 3,
                  mt: 3,
                }}
                variant="outlined"
                onClick={(e) => {
                  decline(record.id);
                  window.location.reload(false);
                }}
              >
                Cancel
              </Button>
            </Card>
          </Container>
        ))
      )}
    </div>
  );
}
