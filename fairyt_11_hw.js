let GrandFa = function () {};
GrandFa.prototype.age = 'old';
let GrandMa = function () {};
GrandMa.prototype = new GrandFa();
let MainCharacter = function (params) {
  console.log(params);
};
MainCharacter.prototype.age = 'young';
let Fox = function () {};
Fox.prototype = new MainCharacter();

let gf = new GrandFa();
let gm = new GrandMa();
let mc = new MainCharacter();
let f = new Fox();

console.log([gf.age, gm.age, mc.age, f.age]);

function Character(params) {
  this.name = params.name;
  this.isAnimal = false;
  this.isCharacter = true;
  this.canSpeak = true;
  this.pause = true;
}

Character.prototype.say = function (phrase) {
  setTimeout(() => {
    console.log(`${this.name}: ${phrase}`);
  }, 2000);
};
Character.prototype.action = function (act) {
  setTimeout(() => {
    console.log(`${this.name}: ${act}`);
  }, 2000);
};
Character.prototype.action2 = function (phrase) {
  setTimeout(() => {
    console.log(`${this.name}: ${phrase}`);
    }, 2000);
};

// Character.prototype.say = function (phrase) {
//   let charProm = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`${this.name}: ${phrase}`);
//     }, 2000);
//   });
//   return charProm;
// };


function Animal(params) {
  this.name = params.name;
  this.isAnimal = true;
  this.canSpeak = false;
}

Object.setPrototypeOf(Animal.prototype, Character.prototype);

Animal.prototype.say = function (phrase) {
  if (this.canSpeak) {
    setTimeout(() => {
      console.log(`${this.name}: ${phrase}`);
    }, 2000);
  } else {
    console.log(`${this.name}: rrrrrr!`);
  }
};

let mainCharacter = function (params) {
  Character.apply(this, arguments);
  this.answer = params.answer;
};

function fairytale() {
  let grandFa = new Character({ name: 'Дід' });
  let grandMa = new Character({ name: 'Бабця' });
  let mainCharacter = new Character({
    name: 'Колобок',
    answer: 'Не їж мене, ' + ' ' + 'я тобі пісеньки заспіваю',
    say: function (phrase) {
      let kolobokProm = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(`${this.name}: ${phrase}`);
        }, 5000);
      });
      return kolobokProm;
    },
    song: ['Я по засіку метений, ',
      'Я із борошна спечений, - ',
      ('Я від ' + grandMa.name + ' втік'),
      (' Я від ' + grandFa.name + ' втік'),
      ' То й від тебе втечу!'],
  });
  let author = new Character({ name: 'Автор' });
  let fox = new Animal({
    name: 'Лисичка',
  });
  fox.canSpeak = true;

  console.log(grandFa);
  console.log(grandMa);
  console.log(mainCharacter);
  console.log(author);
  console.log(fox);

  grandFa.say('Спекла б ти колобок!');
  grandMa.say('Та з чого ж я спечу, як і борошна немає?');
  grandFa.say('От, бабусю, піди в хижку та назмітай у засіку борошенця, то й буде колобок.');
  grandMa.action(`Пішла в хижку, назмітала в засіку борошенця, витопила в печі, замісила гарненько борошно, спекла ${mainCharacter.name}`);
  mainCharacter.action2('Колобок та й побіг.');
  fox.say('Колобок, колобок, я тебе з\'їм!');
  mainCharacter.say('Лисичко сестричко не їж мене, я тобі пісеньки заспіваю!');
  fox.say('Колобок, чому мовчиш?');
  fox.say('Ану заспівай!');
  mainCharacter.say('Я від бабці пішов, я від..');
  author.say('А лисичка його гам! Та й з\'їла.');
  

  chapter1(grandFa, grandMa, mainCharacter);
  chapter5(mainCharacter, fox);
}

function chapter1(grandFa, grandMa, mainCharacter) {
}

async function chapter5(mainCharacter, fox) {
}
fairytale()
