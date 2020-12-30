// create mock data

const { query } = require('../../index');

const feedbacksArray = [
  {
    bootcamperuid: 'd6587569589dk3r437890584gjfni',
    coachname: 'Tao',
    feedbackdate: '2020-11-18',
    subject: 'react',
    week: 7,
    tasktype: 'mastery',
    quantitative: '12/15',
    qualitative: "(coach's comment)",
    duedate: '2020-11-15',
    datesubmitted: '2020-11-15',
  },
  {
    bootcamperuid: 'd6587569589dk3r437890584gjfni',
    coachname: 'Ben',
    feedbackdate: '2020-12-04',
    subject: 'react',
    week: 9,
    tasktype: 'mastery',
    quantitative: '17/18',
    qualitative: "(coach's comment)",
    duedate: '2020-12-02',
    datesubmitted: '2020-12-01',
  },
  {
    bootcamperuid: 'd6587969589dk3r437882cbr43298',
    coachname: 'Liz',
    feedbackdate: '2020-11-18',
    subject: 'react',
    week: 7,
    tasktype: 'mastery',
    quantitative: '13/15',
    qualitative: "(coach's comment)",
    duedate: '2020-11-15',
    datesubmitted: '2020-11-15',
  },
  {
    bootcamperuid: 'd6587969589dk3r437882cbr43298',
    coachname: 'James',
    feedbackdate: '2020-12-04',
    subject: 'css',
    week: 9,
    tasktype: 'mastery',
    quantitative: '18/18',
    qualitative: "(coach's comment)",
    duedate: '2020-12-02',
    datesubmitted: '2020-12-01',
  },
  {
    bootcamperuid: 'd658756956bd37r43788hjtrertrt',
    coachname: 'Mell',
    feedbackdate: '2020-12-05',
    subject: 'css',
    week: 9,
    tasktype: 'mastery',
    quantitative: '18/18',
    qualitative: "(coach's comment)",
    duedate: '2020-12-02',
    datesubmitted: '2020-12-01',
  },
];

const sqlStatement = `
    INSERT INTO feedback
        (bootcamperuid, coachname, feedbackdate, subject, week, tasktype, quantitative, qualitative, duedate, datesubmitted)
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
