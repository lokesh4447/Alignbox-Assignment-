# 💬 Anonymous Chat App

A real-time group chat application built with Node.js, Express, Socket.IO, MySQL, and **HTML/CSS/JavaScript.  
It is designed based on a Figma UI, featuring anonymous messaging, timestamps, tick marks, and a modern chat interface.

---

## 🚀 Features
- Real-time messaging using Socket.IO
- Anonymous chat support
- Message bubbles styled like WhatsApp
- Timestamps for each message
- Tick marks (✓✓) for sent messages (gray → blue after delivery/read simulation)
- Typing bar with camera 📷 and attachment 📎 icons
- MySQL database integration for storing chat history

---

## 🛠 Tech Stack
- Frontend: HTML, CSS, JavaScript  
- Backend: Node.js, Express.js  
- Database: MySQL  
- Realtime Communication: Socket.IO  

---

## 📂 Project Structure
chat-app/
│── public/ # Frontend files
│ ├── index.html
│ ├── style.css
│ └── script.js
│
│── server.js # Node.js backend
│── database.sql # SQL schema
│── package.json # Node.js config
│── README.md
---

## ⚙ Setup & Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/chat-app.git
   cd chat-app
2. Install dependencies:
  npm install
3. Setup MySQL database:

Open database.sql and run it in MySQL Workbench or CLI:
CREATE DATABASE chat_app;
USE chat_app;
CREATE TABLE messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  sender VARCHAR(50) DEFAULT 'Anonymous',
  text TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
4.Update database credentials in server.js:
  const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '!@#$%^&',
  database: 'chat_app'
  });
5.Run the server:
  node server.js
6. Open in browser:
   http://localhost:3000
## Screenshots

### Chat User Interface
