// Basic random chat logic using a simple WebSocket echo server for demo
// For real random chat, you’ll need a backend! This is just a placeholder.

const chat = document.getElementById('chat');
const msg = document.getElementById('msg');
const send = document.getElementById('send');

// Demo: Use wss://ws.postman-echo.com/raw as a public echo WebSocket for testing
const ws = new WebSocket('wss://ws.postman-echo.com/raw');

ws.onmessage = (event) => {
  const msgDiv = document.createElement('div');
  msgDiv.textContent = 'Stranger: ' + event.data;
  chat.appendChild(msgDiv);
  chat.scrollTop = chat.scrollHeight;
};

send.onclick = () => {
  if (msg.value.trim() !== '') {
    ws.send(msg.value);
    const msgDiv = document.createElement('div');
    msgDiv.textContent = 'You: ' + msg.value;
    chat.appendChild(msgDiv);
    chat.scrollTop = chat.scrollHeight;
    msg.value = '';
  }
};