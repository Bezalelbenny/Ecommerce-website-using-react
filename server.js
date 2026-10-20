import express from "express";
import cors from "cors";
import mysql from "mysql2";

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "shopping"
});

db.connect((err) => {
  if (err) {
    console.log("Connection Failed");
  } else {
    console.log("Connection successfull");
  }
});

// REGISTER
app.post("/register", (req, res) => {
  const { f_name, l_name, age, user, email, password } = req.body;
  if (user === "admin") {
  if (email !== "admin@gmail.com") {
    return res.send("Invalid admin email");
  }

  if (password !== "admin.123") {
    return res.send("Invalid admin password");
  }
}
  

  const sql = "INSERT INTO users (f_name, l_name, age, `user`, email, password) VALUES (?, ?, ?, ?, ?, ?)";

  db.query(sql, [f_name, l_name, age, user, email, password], (err) => {
    if (err) {
      console.log(err);
      return res.send("Registration Failed");
    }

    else res.send("Registration Successful");
  });
});

// VIEW ALL USERS
function viewUsers(req, res) {
  const sql = "SELECT f_name, l_name, age,user, email FROM users";

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).send("View Failed");
    }

    else res.json(result);
  });
}

app.post("/view", viewUsers);

// UPDATE USER
app.post("/update", (req, res) => {
  const { f_name, l_name, age, user, email, password } = req.body;

  const sql = "UPDATE users SET f_name=?, l_name=?, age=?, `user`=?, password=? WHERE email=?";

  db.query(sql, [f_name, l_name, age, user, password, email], (err, result) => {
    if (err) {
      console.log(err);
      return res.send("Update Failed");
    }

    else res.send("User Updated Successfully");
  });
});

// DELETE USER
app.post("/delete", (req, res) => {
  const { email } = req.body;

  const sql = "DELETE FROM users WHERE email=?";

  db.query(sql, [email], (err, result) => {
    if (err) {
      console.log(err);
      return res.send("Delete Failed");
    }

    if (result.affectedRows === 0) {
      return res.send("User not found");
    }

    res.send("User Deleted Successfully");
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
