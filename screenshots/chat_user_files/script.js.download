const socket = io();
const sendBtn = document.getElementById('sendBtn');
const messageInput = document.getElementById('messageInput');
const messages = document.getElementById('messages');

sendBtn.addEventListener('click', sendMessage);

function sendMessage() {
  const text = messageInput.value.trim();
  if (text === "") return;

  const msg = { sender: "Anonymous", text, type: "sent" };
  
  addMessage(msg);
  messageInput.value = "";

  // Send to server
  socket.emit('chatMessage', msg);

  
  setTimeout(() => updateMessageStatus(), 2000);
}

function addMessage(msg) {
  const msgDiv = document.createElement('div');
  msgDiv.classList.add('message', msg.type);

  const msgText = document.createElement('div');
  msgText.textContent = msg.text;

 
  const meta = document.createElement('div');
  meta.classList.add('meta');

  const now = new Date();
  const hours = now.getHours() % 12 || 12;
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const ampm = now.getHours() >= 12 ? "PM" : "AM";
  const time = document.createElement('span');
  time.textContent = `${hours}:${minutes} ${ampm}`;

  meta.appendChild(time);

  if (msg.type === "sent") {
    const ticks = document.createElement('span');
    ticks.classList.add('ticks');
    ticks.innerHTML = "✓✓"; 
    ticks.style.color = "gray"; 
    meta.appendChild(ticks);
  }

  msgDiv.appendChild(msgText);
  msgDiv.appendChild(meta);
  messages.appendChild(msgDiv);
  messages.scrollTop = messages.scrollHeight;
}

function updateMessageStatus() {
  const ticks = document.querySelectorAll('.ticks');
  ticks.forEach(t => {
    t.style.color = "blue";
  });
}


socket.on('chatMessage', msg => {
  if (msg.sender !== "Anonymous") {
    msg.type = "received";
    addMessage(msg);
  }
});
