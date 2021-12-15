import { base } from '../../lib/init-airtable';

export default function handler(req, res) {
  const { recordId, confirmedDate } = req.body;

  base('Events').update(
    [
      {
        id: recordId,
        fields: {
          Status: 'Confirmed',
          'Confirmed Date': confirmedDate,
        },
      },
    ],
    (err, records) => {
      if (err) console.error(err);
      if (records) res.status(200);
    }
  );
}
