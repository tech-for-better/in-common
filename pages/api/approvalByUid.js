import { base } from '../../lib/init-airtable';

export default function handler(req, res) {
  const uid = req.query.uid;
  // console.log(uid);
  // if (uid === undefined || uid.length === 0) {
  //   throw new Error('user id does not exist');
  // }

  base('Accounts')
    .select({
      filterByFormula: `UID = "${uid}"`,
    })
    .firstPage((err, records) => {
      if (err) return console.log('Airtable error :', err);
      if (records) {
        res.status(200).json({ approval: records[0].fields.Approval });
      }
    });
}
