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
  let user = { name: "A", lastName: "AA" };
  db.collection("users").insertOne(user, (err, res) => {
    if (err) {
      console.log("can not insert error");
      return;
    }
    console.log(`inserted id : ${res.insertedId}`);
  });
});
