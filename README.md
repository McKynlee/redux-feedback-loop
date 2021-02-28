# Personalized Photo Gallery

## Description

_Duration: Weekend Sprint_

This application serves as a form for collecting feedback about an organized learning program.  There are 4 questions, each asked on their own page, for which the user's input is collected and stored in the database.  The user has a chance to review and edit their answers before submitting.  At the end, they are able to start a new review, if they choose.

Here is a view of the four pages of questions:

![Feedback Question 1](.png)


![Galley View with Descriptions](.png)

## Installation

1. Open this repository in your favorite code editor (VS Code was used for creating this app).
1. Run 'npm install' in your terminal to bring in the necessary dependencies (don't worry, I've already got a nifty .gitignore file to avoid committing and pushing the massive node_modules!).
1. Create a database on your local server (Postico was used during creation).
   1. IMPORTANT: your database needs to be named prime_feedback in order to communicate with the current code.
   1. Copy all of the text in the attached database.sql module and insert it into the SQL Query box of your prime_feedback database.
   1. You can either execute this SQL statement as an entire block, or do them one by one from the top down (important that these are done sequentially in this case).
1. You will need multiple Terminal tabs open:
    1. Run "npm run server" in one to start the server - you should see "Listening on port: 5000" when the server is successfully running.
    1. Run "npm run client" in a second terminal.  You should see "Compiled successfully!" and your browser will automatically open the App.

## Usage

1. 

## Built with:

- CSS
- JavaScript, JSX
- React.js 
- Redux
- Node.js 
- Express.js 
- JSON 
- PostgreSQL 
- SQL 
- Postico 
- Postman

## Acknowledgement

Thanks to [Prime Digital Academy](https://www.primeacademy.io/) who equipped and helped me to make this application a reality.
