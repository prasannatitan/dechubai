const express = require('express');
const router = express.Router();
const axios = require('axios');

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwjYy1pKaQbX6NZmMNokApRzMS7VxhPJYk-4KRe68USUV5NrwE8FvyWR8DQStsET2K7/exec";

router.post("/", async (req, res) => {
  try {
    const response = await axios.post(GOOGLE_SCRIPT_URL, req.body, {
      headers: { "Content-Type": "application/json" },
    });

    res.json(response.data);
  } catch (error) {
    console.error("Error sending to Google Apps Script:", error);
    res.status(500).json({ error: "Failed to submit data" });
  }
});

module.exports = router;