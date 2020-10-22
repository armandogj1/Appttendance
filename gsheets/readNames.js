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

  // get a tally of current attendance total
  const tally = {};
  rows.forEach(row => {
    // store a tally for each student
    tally[row._rawData[0]] = row._rawData.reduce((studentTally, day, idx) => {
      if (idx) {
        const attValue =
        day === 'OT' ? 0 :
        day === 'UT' ? 30 :
        day === 'UA' ? 100 :
        day === 'ET' ? 30 :
        day === 'EA' ? 100 : 0;

        studentTally += attValue;
      }
      studentTally = studentTally === 90 ? 100 :
        studentTally === 190 ? 200 :
        studentTally === 290 ? 300 :
        studentTally;

      return studentTally;
    }, 0);
  });

  const students = rows.map(row => row.students);

  return [students, tally];
};

module.exports = readNames;