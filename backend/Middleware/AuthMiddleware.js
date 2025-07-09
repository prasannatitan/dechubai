const admin = require("firebase-admin");
const express = require("express");

module.exports.AuthMiddleware = (req, res, next) => {
    
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const idToken = authHeader.split("Bearer ")[1];

  admin.auth().verifyIdToken(idToken)
    .then((decodedToken) => {
      req.user = decodedToken; // Attach user info to the request object
      next(); // Proceed to the next middleware or route handler
    })
    .catch((error) => {
      console.error("Token verification failed:", error);
      res.status(401).json({ message: "Unauthorized" });
    });
}