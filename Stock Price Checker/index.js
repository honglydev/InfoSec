const express = require("express");    
const helmet  = require("helmet");
const app = express();

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "https://code.jquery.com/jquery-3.7.1.min.js"],
      styleSrc: ["'self'"],
    },
  })
);

app.get("/", (req, res) => {
    res.send("Welcome to  homepage and the local");
});

app.listen(3000, () => {
    console.log("Server starting...");
});