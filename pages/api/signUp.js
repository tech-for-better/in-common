import { base } from '../../lib/init-airtable';

export default function handler(req, res) {
  const data = req.body;

  base('Accounts').create([{ fields: data }], function (err, records) {
    if (err) {
      console.error(err);
    }
    res.status(200);
  });
}
