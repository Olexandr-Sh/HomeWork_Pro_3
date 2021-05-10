function fairytale() {
  let threat = ('Колобок, колобок, я тебе з\'їм!');
  let commanded = ('Ану заспівай!');
  let grandFa = {
    name: 'Дід',
    hungry: true,
    say: function (phrase1) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (this.hungry) {
            return reject('Я голодний, як вовк!');
          }
          console.log(`${this.name}: ${phrase1}`);
          return resolve(this.hungry);
        }, 2000);
      });
    },
    ask: function (phrase2) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(`${this.name}: ${phrase2}`);
        }, 6000);
      });
    }
  };
  let grandMa = {
    name: 'Бабця',
    answ: function (phrase) {
      console.log(`${this.name}: ${phrase}`);
    },
    action: ['Пішла в хижку, ', 'назмітала в засіку борошенця, витопила в печі, замісила гарненько борошно, спекла '],
  };
  let mainCharacter = {
    escape: false,
    mainCharacterCondition: 'Колобка з\'їли',
    name: 'Колобок',
    song: ['Я по засіку метений, ',
      'Я із борошна спечений, - ',
      ('Я від ' + grandMa.name + ' втік'),
      (' Я від ' + grandFa.name + ' втік'),
      ' То й від тебе втечу!'],
    answ: 'Не їж мене, ' + ' ' + 'я тобі пісеньки заспіваю',
    answWolfName: (' Я від вовка втік,'),
    
    say: function (phrase1) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (this.escape) {
            return reject('Я по засіку метений..');
          }
          console.log(`${this.name}: ${phrase1}`);
          return resolve(this.escape);
        }, 5000);
      });
    },
    appealToFox: function (phrase) {
      console.log(`${this.name}: ${phrase}`);
    },
    action: function () {
      console.log(this.name + ' Та й побіг');
    },
    sing: function (song) {
      console.log(song);
    }
  };
  let fox = {
    name: 'Лисичка',
    deaf: 'недочуваю',
    ateHim: true,
    foxHungry:false,
    annoyed: function (phrase2) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(`${this.name}: ${phrase2}`);
        }, 15000);
      });
    },
    say: function (phrase1) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (this.foxHungry) {
            return reject(threat);
          }
          console.log(`${this.name}: ${phrase1}`);
          return resolve(this.foxHungry);
        }, 4000);
      });
    },
    comand: function (phrase3) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(`${this.name}: ${phrase3}`);
        }, 16000);
      });
    },
    am: function () {
      let eatPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(this.ateHim + ' А лисичка — гам його! Та й з\'їла!');
        }, 15000);
      });
      return eatPromise;
    }
  };
  
  chapter1(grandFa, grandMa, mainCharacter);
  
  chapter5(mainCharacter, fox);
  
  Object.keys(grandFa).forEach((key) => {
    console.log('key:', key)
    console.log('value:', grandFa[key])
  });
  for (let key in grandMa) {
    if (grandMa.hasOwnProperty(key)) {
      console.log('key:', key)
      console.log('value:', grandMa[key])
    }
  };
  for (let key in mainCharacter) {
    if (mainCharacter.hasOwnProperty(key)) {
      console.log('key:', key)
      console.log('value:', mainCharacter[key])
    }
  };
  for (let key in fox) {
    if (fox.hasOwnProperty(key)) {
      console.log('key:', key)
      console.log('value:', fox[key])
    }
  };
}

fairytale()

function chapter1(grandFa, grandMa, mainCharacter) {
  grandMa.answ('Діду ти голодний?');

  return grandFa.say()
    .then((grandFaState) => {
      console.log('grandFaState', grandFaState);
      grandMa.answ('Та з чого ж я спечу, як і борошна немає?');
      return grandFa.say('От, бабусю, піди в хижку та назмітай у засіку борошенця, то й буде колобок.')
        .then((grandFaState2) => {
          console.log('grandFaState2', grandFaState2);
          grandMa.answ('То що, прийдеться пекти колобок?');
        });
    })
    .catch((reason) => {
      console.log('reason', reason);
      grandMa.answ('Пішла я тоді пекти колобка.');
    });
  
  grandMa.answ('Діду ти голодний?');
};
function chapter5(mainCharacter, fox) {
  return fox.say()
    .then((foxState) => {
      console.log('foxState', foxState);
      mainCharacter.appealToFox('Лисичко сестричко не їж мене, я тобі пісеньки заспіваю!');
      return fox.say('Колобоок???')
        .then((foxState2) => {
          console.log('foxState2', foxState2);
          mainCharacter.appealToFox('');
        
          return fox.say('Колобок!? То ти співатимеш?')
            .then(() => {
              return mainCharacter.say()
                .then((kolobok) => {
                  console.log('kolobok', kolobok);
                  return fox.say('Колобок я тебе точно з\'їм')
                    .then(() => {
                      return mainCharacter.say('Я по засіку метений..')
                        .then((kolobok2) => {
                          console.log('kolobok2', kolobok2);
                          return fox.say('А лисичка його гам, і з\'їла');
                        });
                    });
                })
                .catch((reason) => {
                  console.log('reason', reason);
                  fox.say('Колобок ти від мене не втечеш!');
                });
            });
        });
    })
    .catch((reson) => {
      console.log('reason', reson);
      mainCharacter.appealToFox('=)');
    });
};