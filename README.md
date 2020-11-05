# Appttendance

## Student Attendance App with Email Template

A heroku deployable react app to take student attendance. Attendance data persists on a Google Sheet and provides dynamic email templates for late students. It tracks tardiness tally following Hack Reactor rules and supplies proper email text based on absence count.

### Usage instructions

- Fork the repo
- Setup a google sheets api project, store the service account email and private key in a .env file to run app locally.

```
GOOGLE_SERVICE_ACCOUNT_EMAIL=xxxxxxxx@xxxxxxx.iam.gserviceaccount.com

GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\
  [...]
-----END PRIVATE KEY-----\n"

SHEETID=xxxxxxxxxxxxxxxxxxxxxx
```

- Include the necessary permission strings either using the heroku dashboard or the CLI

`heroku config:set SHEETID=XXXXXXXX` etc..

- Create a google sheet and share it with the app by using the service email on the browser and including the sheetId from the url. Save it as an env variable.

![SHEETID](readmeFiles/sheetId.png)

- Include students names in the first column, these will be used to populate the React App

![table](readmeFiles/tableExample.png)

### Run Appttendance

Go to the app's url.
Students will be available with a choice of radio buttons.
Include the week and day of the program in the text field, attendance won't submit until you've done so. Background will change based on their status. If late templates will render at the bottom to copy and paste into email.

![preview](readmeFiles/preview.png)
