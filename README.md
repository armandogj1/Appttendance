# Appttendance

## Student Attendance App with Email Template

A heroku deployable react app to take student attendance. Attendance data persists on a Google Sheet and provides dynamic email templates for late students. It tracks tardiness tally following Hack Reactor rules and supplies proper email text based on absence count.

### Usage instructions

Fork the app's repo and deploy to heroku by creating a remote.
Include the necessary permission files either using the heroku dashboard or the CLI.
Setup a google sheets api project, store the service account email and private key in a .env file to run app locally. Pass them as env variables to the deployed heroku app.
Create a google sheet and share it with the app by using the service email on the browser and including the sheetId from the url. Save it as an env variable.
![SHEETID](readmeFiles/sheetId.png)

### Run Appttendance

Go to the app's url.
Students will be available with a choice of radio buttons.
Include the week and day of the program in the text field, attendance won't submit until you've done so. Background will change based on their status. If late templates will render at the bottom to copy and paste into email.
