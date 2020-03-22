const formidable = require("formidable");
const detect = require("detect-file-type");
const { v1: uuidv1 } = require("uuid"); //npm uuid
const fs = require("fs");
const path = require("path");

module.exports = (req, res) => {
  const form = new formidable.IncomingForm();
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.send("Error in file");
    }
    // console.log(`name: ${fields.name}`);
    // console.log(`lastName: ${fields.lastName}`);
    // console.log(files.picture.name);

    detect.fromFile(files.picture.path, (err, result) => {
      const allowedImageTypes = ["jpg", "jpeg", "png"];
      if (!allowedImageTypes.includes(result.ext)) {
        return res.send("image not allowed");
      }
      // console.log(result.ext); //image extension
      const pictureName = uuidv1() + "." + result.ext;
      // console.log(pictureName);

      const oldPath = files.picture.path;

      const newPath = path.join(__dirname, "..", "..", "images", pictureName);
      fs.rename(oldPath, newPath, err => {
        if (err) {
          console.log("error with moving files");
          return;
        }

        const user = {
          name: fields.name,
          lastName: fields.lastName,
          picture: pictureName
        };
        try {
          db.collection("users").insertOne(user, (err, dbResponse) => {
            if (err) {
              return res.send("mongo can not create a user");
            }
            return res.send("ok here");
          });
        } catch (ex) {
          return res.status(500).send("System under maintainance");
        }
      });
    });

    //!!!return should be moved to the latest callback
  });
};
