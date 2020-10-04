const { GoogleSpreadsheet } = require('google-spreadsheet');
require('dotenv').config();

// console.log(process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL);
// console.log(process.env.GOOGLE_PRIVATE_KEY);

const accessSpreadSheet = async () => {
  const doc = new GoogleSpreadsheet('1IdH62PeGyYls3TUbkzb5sBWNDEi3ohw8ZuoiRm25C2k');

  // use service account creds
  await doc.useServiceAccountAuth({
    client_email: require('../credentials.json').client_email,
    private_key: require('../credentials.json').private_key,
  });

  await doc.loadInfo(); // loads document properties and worksheets
  // console.log(doc.title);
  const sheet = await doc.sheetsByIndex[0];
  const students = await sheet.getRows();

  // return doc;
  students.forEach(student => {
    console.log(student);
  });
};

module.exports = accessSpreadSheet();
