import { base } from '../../lib/init-airtable';

export default function handler(req, res) {
  const { recordId, confirmedDate, status } = req.body;

  base('Events').update(
    [
      {
        id: recordId,
        fields: {
          Status: status,
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
