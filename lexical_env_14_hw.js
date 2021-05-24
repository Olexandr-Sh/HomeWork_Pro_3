function createButtons() {
  for (let i = 0; i < 10; i++) {
    let button = document.createElement('button');
    button.textContent = `Button ${i}`;
    button.addEventListener('click', function () {
      console.log(`My number is ${i}`);
    });
    document.body.appendChild(button);
  }
}

createButtons();