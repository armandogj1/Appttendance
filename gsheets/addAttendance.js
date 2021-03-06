const { GoogleSpreadsheet } = require('google-spreadsheet');
process.env.DEV && require('dotenv').config();

const addAttendance = async (day, attendance) => {
	const doc = new GoogleSpreadsheet(process.env.SHEETID);

	// use service account creds
	await doc.useServiceAccountAuth({
		client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
		private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/gm, '\n'),
	});

	await doc.loadInfo(); // loads document properties and worksheets
	// console.log(doc.title);
	const sheet = await doc.sheetsByIndex[0];

	// get hearders
	const rows = await sheet.getRows();
	const headers = sheet.headerValues;
	headers.push(day);
	await sheet.setHeaderRow(headers);

	const students = rows.forEach((row) => {
		row._rawData.push(attendance[row.students]);

		row.save({ raw: true });
	});

	return 'success';
};

module.exports = addAttendance;
