// create mock data

const { query } = require('../../index');

const feedbacksArray = [
  {
    bootcamperUid: 'd6587569589dk3r437890584gjfni',
    coachName: 'Tao',
    feedbackDate: '2020-11-18',
    subject: 'react',
    week: 7,
    taskType: 'mastery',
    quantitative: '12/15',
    qualitative: "(coach's comment)",
    dueDate: '2020-11-15',
    dateSubmitted: '2020-11-15',
  },
  {
    bootcamperUid: 'd6587569589dk3r437890584gjfni',
    coachName: 'Ben',
    feedbackDate: '2020-12-04',
    subject: 'react',
    week: 9,
    taskType: 'mastery',
    quantitative: '17/18',
    qualitative: "(coach's comment)",
    dueDate: '2020-12-02',
    dateSubmitted: '2020-12-01',
  },
  {
    bootcamperUid: 'd6587969589dk3r437882cbr43298',
    coachName: 'Liz',
    feedbackDate: '2020-11-18',
    subject: 'react',
    week: 7,
    taskType: 'mastery',
    quantitative: '13/15',
    qualitative: "(coach's comment)",
    dueDate: '2020-11-15',
    dateSubmitted: '2020-11-15',
  },
  {
    bootcamperUid: 'd6587969589dk3r437882cbr43298',
    coachName: 'James',
    feedbackDate: '2020-12-04',
    subject: 'css',
    week: 9,
    taskType: 'mastery',
    quantitative: '18/18',
    qualitative: "(coach's comment)",
    dueDate: '2020-12-02',
    dateSubmitted: '2020-12-01',
  },
  {
    bootcamperUid: 'd658756956bd37r43788hjtrertrt',
    coachName: 'Mell',
    feedbackDate: '2020-12-05',
    subject: 'css',
    week: 9,
    taskType: 'mastery',
    quantitative: '18/18',
    qualitative: "(coach's comment)",
    dueDate: '2020-12-02',
    dateSubmitted: '2020-12-01',
  },
];

const sqlStatement = `
    INSERT INTO feedback
        (bootcamperUid, coachName, feedbackDate, subject, week, taskType, quantitative, qualitative, dueDate, dateSubmitted)
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
