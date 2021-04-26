let body = document.body

let inputElement = document.createElement('input');
body.appendChild(inputElement);
inputElement.style.padding = '10px';

let aElement = document.createElement('a');
body.appendChild(aElement);
aElement.append('submit');

let paragraphElement = document.createElement('p');
paragraphElement.append('messagesList:');
body.appendChild(paragraphElement);
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
    message_1++;
};

