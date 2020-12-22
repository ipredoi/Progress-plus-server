// create mock data

const { query } = require('../../index');

const feedbacksArray = [
  {
    bootcamper_uuid: 'd6587569589dk3r437890584gjfni',
    coach_name: 'Tao',
    feedback_date: '2020-11-18',
    subject: 'react',
    week_of_task: 7,
    type_of_task: 'mastery task',
    quantitative_feedback: '12/15',
    qualitative_feedback: "(coach's comment)",
    due_date: '2020-11-15',
    date_submitted: '2020-11-15',
  },
  {
    bootcamper_uuid: 'd6587569589dk3r437890584gjfni',
    coach_name: 'Ben',
    feedback_date: '2020-12-04',
    subject: 'react',
    week_of_task: 9,
    type_of_task: 'mastery task',
    quantitative_feedback: '17/18',
    qualitative_feedback: "(coach's comment)",
    due_date: '2020-12-02',
    date_submitted: '2020-12-01',
  },
  {
    bootcamper_uuid: 'd6587569589dk3r437882cbr43298',
    coach_name: 'Liz',
    feedback_date: '2020-11-18',
    subject: 'react',
    week_of_task: 7,
    type_of_task: 'mastery task',
    quantitative_feedback: '13/15',
    qualitative_feedback: "(coach's comment)",
    due_date: '2020-11-15',
    date_submitted: '2020-11-15',
  },
  {
    bootcamper_uuid: 'd6587569589dk3r437882cbr43298',
    coach_name: 'James',
    feedback_date: '2020-12-04',
    subject: 'css',
    week_of_task: 9,
    type_of_task: 'mastery task',
    quantitative_feedback: '18/18',
    qualitative_feedback: "(coach's comment)",
    due_date: '2020-12-02',
    date_submitted: '2020-12-01',
  },
  {
    bootcamper_uuid: 'd658756956bd37r43788hjtrertrt',
    coach_name: 'Mell',
    feedback_date: '2020-12-05',
    subject: 'css',
    week_of_task: 9,
    type_of_task: 'mastery task',
    quantitative_feedback: '18/18',
    qualitative_feedback: "(coach's comment)",
    due_date: '2020-12-02',
    date_submitted: '2020-12-01',
  },
];

const sqlStatement = `
    INSERT INTO feedback
        (bootcamper_uuid, coach_name, feedback_date, subject, week_of_task, type_of_task, quantitative_feedback, qualitative_feedback, due_date, date_submitted)
    VALUES
        ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
;`;
// doesnt like feedback, not sure why
// --> add "const" before feedback on line 80, need to drop and create table again and try to populate!
// i have no permmission to use terminal tho..

async function populateTable() {
  let feedbackDataArray;
  for (const feedback of feedbacksArray) {
    console.log(feedback);
    feedbackDataArray = Object.values(feedback);
    console.log(feedbackDataArray);
    await query(sqlStatement, feedbackDataArray);
  }
}

populateTable();
