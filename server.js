const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const mysql = require("mysql2");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.json());
app.use(express.static("public"));

// MySQL config — change password/user if needed
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "chat_app"
});

db.connect((err) => {
  if (err) {
    console.error("MySQL connection error:", err.message);
    return;
  }
  console.log("MySQL connected!");
});

io.on("connection", (socket) => {
  console.log("User connected");

  socket.on("chatMessage", (msg) => {
    db.query("INSERT INTO messages (text, sender) VALUES (?, ?)", [msg.text, msg.sender], (err) => {
      if (err) console.error("DB insert error:", err);
    });
    io.emit("chatMessage", msg);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
