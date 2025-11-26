const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    console.log(req.body); // Check kya frontend data aa raha hai
    // Save data to MongoDB here
    res.status(200).json({ message: "Resume saved!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error saving resume" });
  }
});

module.exports = router;