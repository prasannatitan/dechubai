const admin = require("firebase-admin");
const express = require("express");
const router = express.Router();




// In your Express route handler
router.get("/protected-data", async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).send("Unauthorized");
  }
  
  const idToken = authHeader.split("Bearer ")[1];

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const uid = decodedToken.uid;
    const email = decodedToken.email;
    res.json({ message: `Hello, user ${uid}`, email: email });
  } catch (error) {
    console.error("Token verification failed:", error);
    res.status(401).send("Unauthorized");
  }
});


module.exports = router;