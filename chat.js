
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

let messages = [];
let message_1 = 0;

aElement.addEventListener('click', getMessage);

function getMessage(parametr) {
  parametr.preventDefault();
  let newMessage = document.createElement('div');
  body.appendChild(newMessage);
  let inputValue = inputElement.value;
  inputElement.value = '';
  // let messageObject = { oneMessage: inputValue };
  messages.push(inputValue);
  newMessage.textContent += messages[message_1];
  // message_1++;
  messages[messages.length - 1];
};

aElement.addEventListener('click', chatStart);

function clearMessage(clear) {
  clear.preventDefault();
  document.getElementById(clear_Message);
  let clearMes = setInterval(() => {
    if (clear_Message === true) {
      messages.shift();
    } else {
      messages.append('Hello spamer!)');
    };
  }, 5000);
};

function chatStart() {
  // let messagesList = [' ', ' ', ' '];
  let id = setInterval(() => {
    createNewMessage(messagesList[message_1]);
    message_1++;
    if (message_1 === messagesList.length) {
      message_1 = 0;
    }
  }, 1000);
  setTimout(() => { clearInterval(id); alert('stop'); }, 5000);
};



