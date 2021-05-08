async function fairytale() {
  let threat = ('Колобок, колобок, я тебе з\'їм!');
  let commanded = ('Ану заспівай!');
  
  let grandFa = {
    name: 'Дід',
    say: function (phrase1) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(`${this.name}: ${phrase1}`);
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
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(`${this.name}: ${phrase}`);
        }, 4000);
      });
    },
    action: ['Пішла в хижку, ', 'назмітала в засіку борошенця, витопила в печі, замісила гарненько борошно, спекла '],
  };
  
  let mainCharacter = {
    mainCharacterCondition: 'Колобка з\'їли',
    name: 'Колобок',
    song: ['Я по засіку метений, ',
      'Я із борошна спечений, - ',
      ('Я від ' + grandMa.name + ' втік'),
      (' Я від ' + grandFa.name + ' втік'),
      ' То й від тебе втечу!'],
    answ: 'Не їж мене, ' + ' ' + 'я тобі пісеньки заспіваю',
    answWolfName: (' Я від вовка втік,'),
    
    say: function (phrase) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(`${this.name}: ${phrase}`);
        }, 13000);
      });
    },

    appealToFox: function () {
      console.log('Лисичко-сестричко');
    },

    action: function () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(`${this.name}: Та й побіг.`);
        }, 6000);
      });
    },

    sing: function (song) {
      console.log(song);
    }
  };
  
  let fox = {
    name: 'Лисичка',
    deaf: 'недочуваю',
    threat: 'Колобок, колобок, я тебе з\'їм!',
    ateHim: true,
    annoyed: function (phrase2) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(`${this.name}: ${phrase2}`);
        }, 15000);
      });
    },
    say: function () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(`${this.name}: ${this.threat}`);
        }, 11000);
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
        }, 2000);
      });
      return eatPromise;
    }
  };
  
  await chapter1(grandFa, grandMa, mainCharacter);
  
  await chapter5(mainCharacter, fox);
  
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
};

fairytale()

async function chapter1(grandFa, grandMa, mainCharacter) {
  let grandFaPromise1 = await grandFa.say('Спекла б ти колобок!');
  console.log('grandFaPromise1', grandFaPromise1);

  let grandMaPromise1 = await grandMa.answ('Та з чого ж я спечу, як і борошна немає?');
  console.log('grandMaPromise1', grandMaPromise1);

  let grandFaPromise2 = await grandFa.ask('От, бабусю, піди в хижку та назмітай у засіку борошенця, то й буде колобок.');
  console.log('grandFaPromise2', grandFaPromise2);

  let grandMaAct = grandMa.action.push(mainCharacter.name);
  let pauseGrandMaAct = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(grandMaAct);
    }, 7000);
  });
  let pauseGrandMaActPromise = await pauseGrandMaAct;
  console.log(pauseGrandMaActPromise);

  let newAction = grandMa.action.join('');
  let newGrandMaAct = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(newAction);
    }, 8000);
  });
  let newGrandMaActPromise = await newGrandMaAct;
  console.log(newGrandMaActPromise);

  let kolobokEscapePromise = await mainCharacter.action();
  console.log('kolobokEscapePromise', kolobokEscapePromise);
};

async function chapter5(mainCharacter, fox) {
  let foxPromise = await fox.say();
  console.log('foxPromise', foxPromise);

  let kolobokAnswer = await mainCharacter.say(`${mainCharacter.appealToFox()}, ${mainCharacter.answ}`);
  console.log('kolobokAnswer', kolobokAnswer);
  
  let foxPromise1 = await fox.annoyed('Колобок, чому мовчиш?');
  console.log('foxPromise1', foxPromise1);
  
  let foxPromise2 = await fox.comand('Ану заспівай!');
  console.log('foxPromise2', foxPromise2);

  let removedSongItem = mainCharacter.song.splice(1);
  let newAction = mainCharacter.song.join('');
  let newActProm = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${mainCharacter.name}: ${newAction}`);
    }, 17000);
  });
  let kolobokPromise1 = await newActProm;
  console.log('kolobokPromise1', kolobokPromise1);

  let foxPromise3 = await fox.am();
  console.log('foxPromise3', foxPromise3);
};