// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const uid = req.query.uid;
  res.status(200).json({ uid });
}
