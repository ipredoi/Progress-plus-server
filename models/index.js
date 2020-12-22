const { query } = require('../db/index');

// Bootcamper routes

// 1. Create a profile with a post request
async function createBootcamperProfile(profile) {
  console.log('hello world');
  const result = await query(
    `INSERT INTO users(uuid, role, cohort) VALUES ($1, $2, $3) RETURNING *;`,
    [profile.uuid, profile.role, profile.cohort]
  );
  return result.rows;
}
// 2. Bootcamper needs to receive profile data from a GET request
async function bootcamperLogin(profile) {
  const result = await query(`SELECT * FROM users WHERE uuid = $1 ;`, [
    profile.uuid,
  ]);
  return result.rows;
}

// 3. Need individual feedback through GET request - displayed through different tasks by one GET request.

async function getBootcamperFeedback(profile) {
  console.log(profile);
  const result = await query(
    `SELECT * FROM feedback WHERE bootcamper_uuid = $1 AND type_of_task = $2`,
    [profile.uuid, profile.type]
  );
  console.log(result.rows);
  return result.rows;
}

// 4. the coaches sending bootcampers feedback to the database

async function postFeedback(feedback) {
  const result = await query(
    `INSERT INTO feedback(bootcamper_uuid, coach_name, feedback_date, subject, week_of_course, type_of_task, quantitative_feedback, qualitative_feedback, due_date, date_submitted) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING * `,
    [
      feedback.uuid,
      feedback.coachName,
      feedback.date,
      feedback.subject,
      feedback.week,
      feedback.taskType,
      feedback.quantitative,
      feedback.qualitative,
      feedback.dueDate,
      feedback.dateSubmitted,
    ]
  );
  return result.rows;
}

// 5. The coaches getting all of the feedback from the database/

async function getAllFeedback() {
  const result = await query(`SELECT * FROM feedback`);
  return result.rows;
}

module.exports = {
  createBootcamperProfile,
  bootcamperLogin,
  getBootcamperFeedback,
  postFeedback,
  getAllFeedback,
};
