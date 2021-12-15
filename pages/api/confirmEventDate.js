import moment from 'moment';
import { base } from '../../lib/init-airtable';

export default function handler(req, res) {
  //   const { recordId, confirmedDate } = req.body;

  console.log(req.body);

  //   base('Events').update(
  //     {
  //       id: recordId,
  //       fields: {
  //         Status: 'Confirmed',
  //         'Confirmed Date': moment(confirmedDate).format('d/M/YYYY h/mma'),
  //       },
  //     },
  //     (err, records) => {
  //       if (err) console.error(err);
  //       if (records) res.status(200);
  //     }
  //   );
}
