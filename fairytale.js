

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
    name: 'Колобок',
    song: ['Я по засіку метений, ',
      'Я із борошна спечений, - ',
      ('Я від ' + grandMa.name + ' втік'),
      (' Я від ' + grandFa.name + ' втік'),
      ' То й від тебе втечу!'],
    answ: 'Не їж мене, ' + ' ' + 'я тобі пісеньки заспіваю',
    answWolfName: (' Я від вовка втік,'),
    say: function () {
      console.log(this.answ);
    },
    appealToHare: function () {
      console.log('Зайчику-лапанчику');
    },
    appealToWolf: function () {
      console.log('Вовчику-братику');
    },
    appealToBear: function () {
      console.log('Ведмедику');
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
  let hare = {
    name: 'Заєць',
    ateHim: false,
    say: function () {
      console.log(threat);
    },
    command: function () {
      console.log(commanded);
    }
  };
  let wolf = {
    name: 'Вовк',
    ateHim: false,
    say: function () {
      console.log(threat);
    },
    command: function () {
      console.log(commanded);
    }
  };
  let bear = {
    name: 'Ведмідь',
    ateHim: false,
    say: function () {
      console.log(threat);
    },
    command: function () {
      console.log(commanded);
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
  
  chapter2(mainCharacter, hare);
  
  chapter3(mainCharacter, wolf);
  
  chapter4(mainCharacter, bear);
  
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
  for (let key in hare) {
    if (hare.hasOwnProperty(key)) {
      console.log('key:', key)
      console.log('value:', hare[key])
    }
  };
  for (let key in wolf) {
    if (wolf.hasOwnProperty(key)) {
      console.log('key:', key)
      console.log('value:', wolf[key])
    }
  };
  for (let key in bear) {
    if (bear.hasOwnProperty(key)) {
      console.log('key:', key)
      console.log('value:', bear[key])
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
function chapter2(mainCharacter, hare) {
  hare.say();
  // re = /' '/gi; Хотів замінити пустий радок словами (Зайчик побігайчик) - не вийшло.
  // newAnsw = mainCharacter.answ.replace(re, mainCharacter.appealToWolf);
  mainCharacter.say(mainCharacter.appealToHare());
  hare.command();
  let newAction = mainCharacter.song.join('');
  console.log(newAction);
  mainCharacter.action();
};
function chapter3(mainCharacter, wolf) {
  wolf.say();
  mainCharacter.say(mainCharacter.appealToWolf());
  wolf.command();
  let delLastPart = mainCharacter.song.pop();
  let newLength = mainCharacter.song.push(' Я від зайця втік, то й від тебе втечу!');
  let newAction = mainCharacter.song.join('');
  console.log(newAction);
  mainCharacter.action();
};
function chapter4(mainCharacter, bear) {
  bear.say();
  mainCharacter.say(mainCharacter.appealToBear());
  bear.command();
  // re = /' То й від тебе втечу!'/gi; Не розумію, чому не виходить заміна.
  // newSong = mainCharacter.song.replace(re, ' Я від зайця втік, ');
  // console.log(newSong);
  let delLastPart = mainCharacter.song.pop();
  let newLength = mainCharacter.song.push(' Я від зайця втік', ' Я від вовка втік,', ' то й від тебе втечу!');
  let newAction = mainCharacter.song.join('');
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

};
