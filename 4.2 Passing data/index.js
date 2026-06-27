import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  const data = {
    fname: req.body.fName,
    lname: req.body.lName
  }
  console.log(data)
  const len = data.fname.length + data.lname.length;
  res.render("index.ejs", {len: len});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
