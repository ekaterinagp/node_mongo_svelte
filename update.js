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

  const searchFor = { name: "Papa" };
  const changeTo = { $set: { name: "Eliza" } };

  //update one
  db.collection("users").updateOne(searchFor, changeTo, (err, res) => {
    if (err) {
      console.log("db error");
      return;
    }
    console.log(res);
  });
});
