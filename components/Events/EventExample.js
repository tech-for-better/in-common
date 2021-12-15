import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container, Typography, Card, CardHeader } from '@mui/material';
import { Chip } from '@mui/material';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: 'rgba(231, 246, 238, 1)',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(activity, location, size, notes, dates) {
  return { activity, location, size, notes, dates };
}

const rows = [
  createData(
    'Reading',
    'Carehome',
    '15 - 20 People',
    'No allergies',
    '02/09/2021 at 9:00AM'
  ),
  createData(
    'Interview',
    'Carehome',
    '5 - 10 People',
    'Looking forward to it',
    '12/10/2021 at 1:00PM'
  ),
  createData(
    'Writing',
    'Carehome',
    '5 - 10 People',
    'Will bring paper',
    '04/11/2021 at 2:00PM'
  ),
  createData(
    'Baking',
    'Carehome',
    '10 - 15 People',
    'No allergies',
    '19/12/2021 at 4:00PM'
  ),
];

export default function EventExample() {
  return (
    <Container component="main" maxWidth="lg">
      <Card
        sx={{
          minWidth: 275,
          padding: 5,
          borderRadius: 3,
          mt: 5,
        }}
        variant="outlined"
        elevation={0}
      >
        <CardHeader title="Event Inbox" />
        <TableContainer component={Paper} elevation={0} variant="outlined">
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <StyledTableRow>
                <TableCell>
                  <Typography
                    sx={{ color: 'rgba(0, 129, 48, 1)' }}
                    variant="subtitle1"
                  >
                    Activity
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography
                    sx={{ color: 'rgba(0, 129, 48, 1)' }}
                    variant="subtitle1"
                  >
                    Location
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography
                    sx={{ color: 'rgba(0, 129, 48, 1)' }}
                    variant="subtitle1"
                  >
                    Group Size
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography
                    sx={{ color: 'rgba(0, 129, 48, 1)' }}
                    variant="subtitle1"
                  >
                    Proposed Dates
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography
                    sx={{ color: 'rgba(0, 129, 48, 1)' }}
                    variant="subtitle1"
                  >
                    Notes
                  </Typography>
                </TableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.activity}>
                  <TableCell component="th" scope="row">
                    <Chip label={row.activity} />
                  </TableCell>
                  <TableCell align="right">{row.location}</TableCell>
                  <TableCell align="right">{row.size}</TableCell>
                  <TableCell align="right">{row.dates}</TableCell>
                  <TableCell align="right">{row.notes}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Container>
  );
}
