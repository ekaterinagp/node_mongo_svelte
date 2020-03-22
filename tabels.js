const express = require("express"); //usage
const app = express(); //instantiatie express

const aTabels = [
  { id: 1, name: "Wood" },
  {
    id: 2,
    name: "Steel"
  }
];

app.get("/tabels", (req, res) => {
  res.send(aTabels);
});

app.listen(80, error => {
  if (error) {
    console.log("server can not listen");
    return;
  }
  console.log("Server listening...");
});
