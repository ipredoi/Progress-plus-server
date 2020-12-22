const { query } = require('../../index');

const sqlStatement = `CREATE TABLE feedbacks(
    feedback_id SERIAL PRIMARY KEY,
    bootcamper_uuid TEXT,
    coach_name TEXT,
    feedback_date DATE,
    subject TEXT,
    week_of_course INT,
    type_of_task TEXT,
    quantitative_feedback TEXT,
    qualitative_feedback TEXT,
    due_date DATE,
    date_submitted DATE
);`;

async function createTable() {
  let res = await query(sqlStatement);
  console.log(res);
}
createTable();
