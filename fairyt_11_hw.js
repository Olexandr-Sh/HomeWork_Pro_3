// let GrandFa = function () {};
// GrandFa.prototype.age = 'old';
// let GrandMa = function () {};
// GrandMa.prototype = new grandFa();
let MainCharacter = function () {};
// MainCharacter.prototype.age = 'young';
// let Fox = function () {};
// Fox.prototype = new mainCharacter();

// let gf = new GrandFa();
// let gm = new GrandMa();
let mc = new MainCharacter();
// let f = new Fox();

// console.log([gf.age, gm.age, mc.age, f.age]);

function Character(params) {
  this.name = params.name;
  this.isAnimal = false;
  this.isCharacter = true;
  this.canSpeak = true;
  this.pause = true;
}

Character.prototype.say = function (phrase) {
  console.log(`${this.name}: ${phrase}`);
};
Character.prototype.action = function (act) {
  console.log(`${this.name}: ${act}`);
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
    }, 4000);
  } else {
    console.log(`${this.name}: rrrrrr!`);
  }
};
// Animal.prototype.say = function (phrase2) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (this.canSpeak) {
//         resolve(`${this.name}: ${phrase2}`);
//       } else {
//         reject(`${this.name}: rrrrr!`);
//       }
//     }, 3000);
//   });
// }

function fairytale() {
  let grandFa = new Character({ name: 'Дід' });
  let grandMa = new Character({ name: 'Бабця' });
  let mainCharacter = new Character({
    name: 'Колобок',
    answ: 'Не їж мене, ' + ' ' + 'я тобі пісеньки заспіваю',
    say: function (phrase) {
      let kolobokProm = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(`${this.name}: ${phrase}`);
        }, 5000);
      });
      return kolobokProm;
    },
  });
  let fox = new Animal({ name: 'Лисичка' });
  fox.canSpeak = true;

  console.log(grandFa);
  console.log(grandMa);
  console.log(mainCharacter);
  console.log(fox);

  grandFa.say('Спекла б ти колобок!');
  grandMa.say('Та з чого ж я спечу, як і борошна немає?');
  grandFa.say('От, бабусю, піди в хижку та назмітай у засіку борошенця, то й буде колобок.');
  grandMa.action(`Пішла в хижку, назмітала в засіку борошенця, витопила в печі, замісила гарненько борошно, спекла ${mainCharacter.name}`);
  mainCharacter.action2('Колобок та й побіг.');
  fox.say('Колобок, колобок, я тебе з\'їм!');
  // mainCharacter.say('Лисичко сестричко не їж мене, я тобі пісеньки заспіваю!');
  // Поки не розумію, як саме встановити сет таймаут саме для закоментованої репліки,
  // щоб повідомлення виводилось після "Колобок, колобок, я тебе з'їм".

  chapter1(grandFa, grandMa, mainCharacter);
  chapter5(mainCharacter, fox);
}

function chapter1(grandFa, grandMa, mainCharacter) {

}

async function chapter5(mainCharacter, fox) {
  let kolobokAnswer = await Character.prototype.say('Лисичко сестричко не їж мене, я тобі пісеньки заспіваю!');
  console.log('kolobokAnswer', kolobokAnswer);
  mainCharacter.prototype.say('Лисичко сестричко не їж мене, я тобі пісеньки заспіваю!');
  console.log(mc.say);
}
fairytale()
