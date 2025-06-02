const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

const flirtyReplies = [
  "Mmm, you're getting good at making me blush 😏",
  "Is it hot in here, or is it just you? 🔥",
  "You're really trying to get me all flustered, huh? 😘",
  "If I had a heart, it'd be racing right now 💓",
  "You better stop before I fall for you completely 😈"
];

sendBtn.addEventListener('click', () => {
  const userText = userInput.value.trim();
  if (userText === '') return;

  const userMessage = document.createElement('div');
  userMessage.classList.add('message');
  userMessage.textContent = userText;
  chatBox.appendChild(userMessage);

  const crushMessage = document.createElement('div');
  crushMessage.classList.add('message', 'crush');
  crushMessage.textContent = flirtyReplies[Math.floor(Math.random() * flirtyReplies.length)];
  chatBox.appendChild(crushMessage);

  userInput.value = '';
  chatBox.scrollTop = chatBox.scrollHeight;
});
