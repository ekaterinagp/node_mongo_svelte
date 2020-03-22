const express = require("express");
const app = express();
const port = 80;
// const path = require("path");
const mongoClient = require("mongodb").MongoClient;
const mongoUrl = "mongodb://localhost:27017/";
global.db = "";
mongoClient.connect(mongoUrl, { useUnifiedTopology: true }, (err, res) => {
  if (err) {
    console.log("Error in connection");
    return;
  }
  db = res.db("company");
  console.log("database is connected");
});

const rPostUsers = require(__dirname + "/routes/users/post-users.js");
//other option for any operation system
// const rPostUsers = require(path.join(
//   __dirname,
//   "routes",
//   "users",
//   "post-users.js"
// ));
app.post("/users", rPostUsers);

app.listen(port, err => {
  if (err) {
    console.log("Server error");
    return;
  }
  console.log(`server is listening to port ${port}`);
});
