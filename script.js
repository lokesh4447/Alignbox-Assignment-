const socket = io();
const sendBtn = document.getElementById('sendBtn');
const messageInput = document.getElementById('messageInput');
const messages = document.getElementById('messages');

sendBtn.addEventListener('click', sendMessage);

function sendMessage() {
  const text = messageInput.value.trim();
  if (text === "") return;

  const msg = { sender: "Anonymous", text };
  
  // Emit message to server
  socket.emit('chatMessage', msg);
  
  messageInput.value = "";
}

// Listen for messages
socket.on('chatMessage', msg => {
  const msgDiv = document.createElement('div');
  msgDiv.classList.add('message');
  msgDiv.classList.add(msg.sender === "Anonymous" ? 'sent' : 'received');
  msgDiv.textContent = msg.text;
  messages.appendChild(msgDiv);
  messages.scrollTop = messages.scrollHeight;
});
