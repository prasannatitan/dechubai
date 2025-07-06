const express = require('express');
const router = express.Router();

router.post('/sheet-update', (req, res) => {
  const sheetData = req.body.data;
  console.log('Sheet updated:', sheetData);

  // You can now save to MongoDB or update your frontend cache
  res.status(200).send('Received');
});

module.exports = router;


