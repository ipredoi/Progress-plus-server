const { query } = require('../../index');

const sqlStatement = `CREATE TABLE feedback(
    feedbackid SERIAL PRIMARY KEY,
    bootcamperuid TEXT ,
    coachname TEXT,
    feedbackdate DATE,
    subject TEXT,
    week INT,
    tasktype TEXT,
    quantitative TEXT,
    qualitative TEXT,
    duedate DATE,
    datesubmitted DATE,
    FOREIGN KEY (bootcamperuid) REFERENCES users(uid) ON DELETE CASCADE
);`;
// foreign key links the tables together for better search functionality. this will allow us to find all feedback from a specific cohort etc for mlp.
async function createTable() {
  let res = await query(sqlStatement);
  console.log(res);
}
createTable();
