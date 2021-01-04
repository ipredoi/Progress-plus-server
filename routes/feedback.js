const express = require('express');
const router = express.Router();

const {
  getBootcamperFeedback,
  getAllFeedback,
  postFeedback,
} = require('../models/index');

// 1. GET requests to view the bootcamper feedback

// request from the coaches to view all of the bootcamper data
// return

router.get('/', async function (req, res, next) {
  if (req.query.uid === undefined) {
    try {
      console.log('retrieving all of the bootcamper feedback...');
      const result = await getAllFeedback();
      res.json({ success: true, data: result });
      console.log('all of the feedback retrieved');
    } catch (error) {
      console.log(error.message);
      res.json({ success: false, data: error.message });
    }
  } else {
    next();
  }
});

// 2. Need individual feedback through GET request - displayed through different tasks by one GET request.

// This is the bootcamper viewing the different types of feedback in different pages.
// expects a request to /feedback with uid and type in the params separated by a /.
// returns all the data in the table for the corresponding user of the specified type. (mastery/recap)

router.get('/', async function (req, res, next) {
  try {
    console.log('retrieving feedback ...');

    const feedbackRequest = {
      uid: req.query.uid,
      type: req.query.type,
    };
    const result = await getBootcamperFeedback(feedbackRequest);
    res.json({ success: true, data: result });
    console.log(
      `feedback retrieved for user with uid =${result[0].bootcamperuid}`
    );
  } catch (error) {
    console.log(error.message);
  }
});

// 3. POST request to send bootcamper feedback

// the coaches sending bootcampers feedback to the database
// expecting json with keys of bootcamperuid, coachName, dateSubmitted, subject, week, type, quantitative, qualitative, dueDate and dateSubmitted.
// returns the data in the same format if needed.

router.post('/', async function (req, res, next) {
  try {
    console.log('Posting feedback ...');
    const feedback = req.body;
    console.log(feedback);
    const result = await postFeedback(feedback);
    res.json({ success: true, data: result });
    console.log(
      `Feedback posted for user with uid = ${result[0].bootcamperuid}`
    );
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;
