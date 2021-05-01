
let body = document.body

let inputElement = document.createElement('input');
body.appendChild(inputElement);
inputElement.style.padding = '10px';



let aElement = document.createElement('a');
body.appendChild(aElement);
aElement.style.color = 'white';
aElement.style.fontSize = '20px';
aElement.style.paddingLeft = '10px';
aElement.append('submit');

function messageListFunction() {
  let paragraphElement = document.createElement('p');
  paragraphElement.append('messagesList:');
  body.appendChild(paragraphElement);
};
messageListFunction();

let messages = ['', '', ''];
let message_1 = 0;

function getMessage(parametr) {
  parametr.preventDefault();
  let newMessage = document.createElement('div');
  body.appendChild(newMessage);
  let inputValue = inputElement.value;
  inputElement.value = 'Привіт!';
  newMessage.textContent = inputValue;
  let checkBox = document.querySelector('.clear_Message');
  if (checkBox.checked === true) {
    setTimeout(() => {
      newMessage.remove()
    }, 5000)
  }
};

aElement.addEventListener('click', getMessage);

function chatStart(chat) {
  chat.preventDefault();
  clicker = aElement.addEventListener('click', getMessage);
  let addMessage = setInterval(() => {
    createMessageElement(messages[message_1]);
    message_1++;
    if (message_1 === messages.length) {
      message_1 = 0;
    }
  }, 1000);
  // if (aElement === true) {
  //   setTimeout(() => {
  //     message_1++;
  //   }, 1000)
  // };
  // setTimout(() => {
  //   clearTimeout(clicker); alert('stop');
  // }, 10000);
}
aElement.addEventListener('click', chatStart);



