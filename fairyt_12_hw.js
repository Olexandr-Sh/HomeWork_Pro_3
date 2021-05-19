
async function fairytale() {
  class Character {
    constructor(params) {
      this.name = params.name;
      this.action = params.action;
      this.song = params.song;
    }
    say(phrase) {
      let characterProm = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(`${this.name}: ${phrase}`);
        }, 2000);
      });
      return characterProm;
    }
    characterAction(phrase) {
      let characterActProm = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(`${this.name}: ${phrase}`);
        }, 3000);
      });
      return characterActProm;
    }
  }

  class Animal extends Character {
    constructor(params) {
      super(params);
      this.canSpeak = params.canSpeak;
    }
    say(phrase) {
      if (this.canSpeak) {
        let animalProm = new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(`${this.name}: ${phrase}`);
          }, 2000);
        });
        return animalProm;
      } else { console.log(`${this.name}: rrrrrr!`); }
    }
  }

  class Author extends Character {
    constructor(params) {
      super(params);
    }
  }

  let grandFa = new Character({
    name: 'Дідусь'
  });
  let grandMa = new Character({
    name: 'Бабуся',
    action: ['Пішла в хижку, ', 'назмітала в засіку борошенця, витопила в печі, замісила гарненько борошно, спекла ']
  });
  let mainCharacter = new Character({
    name: 'Колобок',
    song: ['Я по засіку метений, ',
      'Я із борошна спечений, - ',
      ('Я від ' + grandMa.name + ' втік'),
      (' Я від ' + grandFa.name + ' втік'),
      ' То й від тебе втечу!']
  });
  let fox = new Animal({
    name: 'Лисичка',
    canSpeak: true
  });
  let authorMain = new Author({
    name: 'Диктор'
  });

  console.log(grandFa);
  console.log(grandMa);
  console.log(mainCharacter);
  console.log(fox);
  console.log(authorMain);
  
  await chapter1(grandFa, grandMa, mainCharacter, authorMain);
  
  await chapter5(mainCharacter, fox, authorMain);
};

fairytale()


async function chapter1(grandFa, grandMa, mainCharacter, authorMain) {
  let grandFaPromise = await grandFa.say('Спекла б ти колобок!');
  console.log('grandFaPromise', grandFaPromise);

  let grandMaPromuise = await grandMa.say('Та з чого ж я спечу, як і борошна немає?');
  console.log('grandMaPromuise', grandMaPromuise);

  let grandFaPromise2 = await grandFa.say('От, бабусю, піди в хижку та назмітай у засіку борошенця, то й буде колобок.');
  console.log('grandFaPromise2', grandFaPromise2);

  let grandMaAct = grandMa.action.push(mainCharacter.name);
  let newGrandMaAct = grandMa.action.join('');
  let newGrandMaActProm = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${grandMa.name}: ${newGrandMaAct}`);
    }, 3000);
  });
  let newGrandMaActPromise = await newGrandMaActProm;
  console.log(newGrandMaActPromise);

  let kolobokEscapePromise = await authorMain.characterAction('Колобок та й побіг.');
  console.log('kolobokEscapePromise', kolobokEscapePromise);
}

async function chapter5(mainCharacter, fox, authorMain) {
  let foxPromise = await fox.say('Колобок колобок, я тебе з\'їм!');
  console.log('foxPromise', foxPromise);

  let mainCharacterPromise = await mainCharacter.say('Лисичко сестричко не їж мене, я тобі пісеньки заспіваю..');
  console.log('mainCharacterPromise', mainCharacterPromise);

  let foxPromise1 = await fox.say('Колобок, чому мовчиш?');
  console.log('foxPromise1', foxPromise1);

  let foxPromise2 = await fox.say('Ану заспівай!');
  console.log('foxPromise2', foxPromise2);

  let removedSongItem = mainCharacter.song.splice(1);
  let newAction = mainCharacter.song.join('');
  let kolobokPromise2 = await mainCharacter.characterAction(newAction);
  console.log('kolobokPromise2', kolobokPromise2);

  let mainCharacterGotCaught = await authorMain.characterAction('А лисичка — гам його! Та й з\'їла!');
  console.log('mainCharacterGotCaught', mainCharacterGotCaught);
};