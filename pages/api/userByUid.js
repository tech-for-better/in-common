import { base } from '../../lib/init-airtable';

export default function handler(req, res) {
  const uid = req.query.uid;

  base('Accounts')
    .select({
      filterByFormula: `{UID} = "${uid}"`,
    })
    .firstPage((err, records) => {
      if (err) return console.log('Airtable error :', err);
      if (records) {
        res.status(200).json({ airtableuser: records[0].fields });
      }
    });
}
