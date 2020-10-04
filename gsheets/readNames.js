const { GoogleSpreadsheet } = require('google-spreadsheet');
// require('dotenv').config();

const readNames = async () => {
  const doc = new GoogleSpreadsheet('1IdH62PeGyYls3TUbkzb5sBWNDEi3ohw8ZuoiRm25C2k');

  // use service account creds
  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/gm, '\n'),
  });

  await doc.loadInfo(); // loads document properties and worksheets
  // console.log(doc.title);
  const sheet = await doc.sheetsByIndex[0];
  const rows = await sheet.getRows();

  const students = rows.map(row => row.students);

  // console.log(rows[0]);
  return students;
};

module.exports = readNames;