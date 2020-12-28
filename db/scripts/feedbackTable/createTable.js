const { query } = require('../../index');

const sqlStatement = `CREATE TABLE feedback(
    feedbackId SERIAL PRIMARY KEY,
    bootcamperUuid TEXT ,
    coachName TEXT,
    feedbackDate DATE,
    subject TEXT,
    week INT,
    taskType TEXT,
    quantitative TEXT,
    qualitative TEXT,
    dueDate DATE,
    dateSubmitted DATE,
    FOREIGN KEY (bootcamperUuid) REFERENCES users(uuid) ON DELETE CASCADE
);`;
// foreign key links the tables together for better search functionality. this will allow us to find all feedback from a specific cohort etc for mlp.
async function createTable() {
  let res = await query(sqlStatement);
  console.log(res);
}
createTable();
