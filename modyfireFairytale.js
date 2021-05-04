function fairytale() {
  let threat = ('Колобок, колобок, я тебе з\'їм!');
  let commanded = ('Ану заспівай!');
  let grandFa = {
    name: 'Дід',
    say: function () {
      console.log('Спекла б ти колобок!');
    },
    ask: function () {
      console.log('От, бабусю, піди в хижку та назмітай у засіку борошенця, то й буде колобок.');
    }
  };
  let grandMa = {
    name: 'Бабця',
    answ: function () {
      console.log('Та з чого ж я спечу, як і борошна немає?');
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
    
    say: function () {
      let pause = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(this.answ);
        }, 3000);
      });
      pause.then((value) => {
        console.log(value);
      });
      console.log(pause);
    },
    appealToFox: function () {
      console.log('Лисичко-сестричко');
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
    say: function () {
      console.log(threat);
    },
    command: function () {
      console.log(commanded);
    },
    am: function () {
      console.log(this.ateHim + ' А лисичка — гам його! Та й з\'їла!');
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
  grandFa.say();
  grandMa.answ();
  grandFa.ask();
  grandMa.action.push(mainCharacter.name);
  let newAction = grandMa.action.join('');
  console.log(newAction);
  mainCharacter.action();
};
function chapter5(mainCharacter, fox) {
  fox.say();
  mainCharacter.say(mainCharacter.appealToFox());
  fox.command();
  let removedSongItem = mainCharacter.song.splice(1);
  let newAction = mainCharacter.song.join('');
  console.log(newAction);
  fox.am();
  let kolobokCondition = new Promise(
    (resolve, reject) => {
      if (fox.am) {
        let eatKolobok = mainCharacter.mainCharacterCondition;
        resolve(eatKolobok);
      } else {
        let reason = new Error('Колобка не з\'їли');
        reject(reason);
      }
    }
  );
  let finalEpisod = function (eatKolobok) {
    let fairytaleMessage = 'А ' + mainCharacter.mainCharacterCondition;
    return Promise.resolve(fairytaleMessage);
  };
  let foxActAndKolobokCond = function () {
    kolobokCondition
      .then(finalEpisod)
      .then(fulfilled => console.log(fulfilled))
      .catch(error => console.log(error.fairytaleMessage));
  };
  foxActAndKolobokCond();
};