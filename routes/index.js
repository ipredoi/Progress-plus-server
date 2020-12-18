const express = require('express');
const router = express.Router();

// Bootcamper routes

// 1. Create a profile with a post request

router.post('/', async function (req, res, next) {
  try {
    console.log('Creating a profile...');
    const profile = req.query;
    const result = await createProfile(profile);
    res.json({ success: true, data: result });
    console.log('Profile created!');
  } catch (error) {
    console.log(error.message);
  }
});

// 2. Bootcamper needs to receive profile the data from a GET request
// 3. Need individual feedback through GET request - displayed through different tasks by one GET request.

// Coaches routes
// 1. Create coaches profile with a post request
// 2. Coaches need to receive their profiles with a GET request
// 3. POST request to send bootcamper feedback
// 4. GET requests to view the bootcamper feedback
