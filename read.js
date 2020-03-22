const mongoClient = require("mongodb").MongoClient;

const mongoUrl = "mongodb://localhost:27017/";

let db = "";

process.on("uncaughtException", (error, data) => {
  if (error) {
    console.log("critical error, yet system keeps running");
    //email to system administartor
    return;
  }
});

mongoClient.connect(mongoUrl, { useUnifiedTopology: true }, (err, res) => {
  if (err) {
    console.log("db error");
    return;
  }
  db = res.db("the_company_db");
  //find one
  // db.collection("users").findOne((err, res) => {
  //   if (err) {
  //     console.log("db error can not read");
  //     return;
  //   }
  //   console.log(res);
  // });
  //find many
  db.collection("users")
    .find()
    .toArray((err, res) => {
      if (err) {
        console.log("db error can not read");
        return;
      }
      console.log(res);
    });
});
