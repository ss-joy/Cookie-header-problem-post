const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser());

app.get("/get-some-cookies", (req, res) => {
  res.cookie("cartoon-name-one", "ben10");
  res.cookie("cartoon-name-two", "mega-xlr");
  res.cookie("cartoon-name-three", "powerpuff girls");
  res.send("Conrats you have some cookies in your response");
});

app.get("/see-some-cookies", (req, res) => {
  console.log(req.cookies);
  res.send("OK got it");
});

app.listen(3000, () => {
  console.log("server started @port 3000");
});
