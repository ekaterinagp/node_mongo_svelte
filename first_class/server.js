const express = require("express"); //usage
const app = express(); //instantiatie express

// const aUsers = [
//   { id: 1, name: "A" },
//   { id: 2, name: "B" }
// ];

//routes localhost 127.0.0.1
// app.get("/", (req, res) => {
//   res.send("testing again");
// });
// //an other route
// app.get("/get-user", (req, res) => {
//   const user = {
//     id: 1,
//     name: "A"
//   };
//   res.send(user);
// });

// //route for all users
// app.get("/users", (req, res) => {
//   res.send(aUsers);
// });

// //route for specific user
// app.get("/users/:id", (req, res) => {
//   const id = req.params.id;
//   res.send({ id: id, name: "C" });
// });

// //next route to add user
// app.post("/users", (req, res) => {
//   const jUser = { id: 3, name: "C" };
//   aUsers.push(jUser);
//   res.send({ status: 1, id: 3 });
// });

// //next route to delete
// app.delete("/users/:id", (req, res) => {
//   aUsers.pop();
//   res.send({ status: 1, count: 1 });
// });

// //to update
// app.patch("/users/:id", (req, res) => {
//   aUsers[0].name = "X";
//   res.send(aUsers[0]);
// });

const aTabels = [
  { id: 1, name: "Wood", sex: "female" },
  {
    id: 2,
    name: "Steel",
    sex: "male"
  },
  {
    id: 3,
    name: "F",
    sex: "male"
  },
  {
    id: 4,
    name: "F",
    sex: "female"
  }
];

app.get("/tabels", (req, res) => {
  res.send(aTabels);
});

app.get("/tabels/:id", (req, res) => {
  const id = req.params.id;
  res.send({ id: id, name: "Glass" });
});

app.post("/tabels", (req, res) => {
  const newTabel = { id: 5, name: "A" };
  aTabels.push(newTabel);
  res.send({ status: "1", id: 5 });
});

app.patch("/tabels/:id", (req, res) => {
  aTabels[0].name = "blablabla";
  res.send(aTabels[0]);
});

app.delete("/tabels/:id", (req, res) => {
  aTabels.pop();
  res.send({ status: 1, count: 1 });
});

app.get("/tabels/gender/:gender", (req, res) => {
  const gender = req.params.gender;
  console.log("All" + gender);
  // const male = [];
  // const female = [];
  // aTabels.forEach(tabel => {
  //   if (gender == "female") {
  //     female.push(tabel);
  //     res.send(female);
  //   } else {
  //     male.push(tabel);
  //     res.send(male);
  //   }
  // });
});

//listen to port 80
app.listen(80, error => {
  if (error) {
    console.log("server can not listen");
    return;
  }
  console.log("Server listening...");
});
