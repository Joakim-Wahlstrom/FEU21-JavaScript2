const socket = io();

const messages = document.querySelector('.messages');
const chatForm = document.querySelector('#chatForm');
const chatMessage = document.querySelector('#chatMessage');

const userName = new URLSearchParams(window.location.search).get('name');
document.querySelector('#me').innerText = userName;

socket.on('connect', () => {
  socket.emit('user', userName);
})

socket.on('user', data => {
  messages.innerHTML += `<p class="inline-feedback">${data}</p>`
})


chatForm.addEventListener('submit', e => {
  e.preventDefault();

  if(chatMessage.value.trim() !== '') {
    socket.emit('message', {
      id: socket.id,
      message: chatMessage.value,
      name: userName
    })
  }

  chatMessage.value = '';
  chatMessage.focus();

})