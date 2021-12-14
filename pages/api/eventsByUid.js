import { base } from '../../lib/init-airtable';

export default function handler(req, res) {
  const uid = req.query.uid;

  base('Events')
    .select({
      filterByFormula: `OR({Sender UID} = "${uid}", {Recipient UID} = "${uid}")`,
    })
    .firstPage((err, records) => {
      if (err) return console.log('Airtable error :', err);
      if (records) {
        res.status(200).json({ eventlist: records });
      }
    });
}
