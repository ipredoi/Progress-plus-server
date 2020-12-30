const { query } = require('../db/index');

// Bootcamper routes

// 1. Create a profile with a post request
async function createBootcamperProfile(profile) {
  const result = await query(
    `INSERT INTO users(uid, role, name, cohort) VALUES ($1, $2, $3, $4) RETURNING *;`,
    [profile.uid, profile.role, profile.name, profile.cohort]
  );
  return result.rows;
}
// 2. Bootcamper needs to receive profile data from a GET request
async function bootcamperLogin(uid) {
  const result = await query(`SELECT * FROM users WHERE uid = $1 ;`, [uid]);
  return result.rows;
}

// 3. Need individual feedback through GET request - displayed through different tasks by one GET request.

async function getBootcamperFeedback(profile) {
  console.log(profile);
  const result = await query(
    `SELECT * FROM feedback WHERE bootcamperUid = $1 AND taskType = $2`,
    [profile.uid, profile.type]
  );
  return result.rows;
}

// 4. the coaches sending bootcampers feedback to the database

async function postFeedback(feedback) {
  console.log(feedback);
  const result = await query(
    `INSERT INTO feedback(bootcamperUid, coachName, feedbackDate, subject, week, taskType, quantitative, qualitative, dueDate, dateSubmitted) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING * `,
    [
      feedback.bootcamperuid,
      feedback.coachname,
      feedback.datesubmitted,
      feedback.subject,
      feedback.week,
      feedback.tasktype,
      feedback.quantitative,
      feedback.qualitative,
      feedback.duedate,
      feedback.datesubmitted,
    ]
  );
  return result.rows;
}

// 5. The coaches getting all of the feedback from the database/

async function getAllFeedback() {
  const result = await query(
    `SELECT * FROM users INNER JOIN feedback ON (users.uid = feedback.bootcamperUid);`
  );
  return result.rows;
}

module.exports = {
  createBootcamperProfile,
  bootcamperLogin,
  getBootcamperFeedback,
  postFeedback,
  getAllFeedback,
};
