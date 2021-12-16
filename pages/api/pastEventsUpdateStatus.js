import { base } from '../../lib/init-airtable';

export default function handler(req, res) {
  const { recordIds } = req.body;

  base('Events').update(
    recordIds.map((recordId) => {
      return {
        id: recordId,
        fields: {
          Status: 'Past',
        },
      };
    }),
    (err, records) => {
      if (err) console.error(err);
      if (records) res.status(200);
    }
  );
}
