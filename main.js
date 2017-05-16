console.log('Hello World');

var person = {
    height: 6.2,
    firstName: 'Savannah',
    lastName: 'TreasureChest',
    hairColor: 'no hair'
};

console.log(person.lastName);
console.log(person['firstName']);

person.job = 'Pirate';
person['eyeCount'] = 3;

var colors = 'flagType';

person[colors] = 'Jolly Rodger';

console.log(person[colors]);

var answer = prompt('what do you want to know about this person?');

console.log(person[answer]);

var treasureChest = {
   contents: {
       goldCount: 1000,
       jewelCount: 'infinite',
       gun: true
   },
   boobyTraps: {
       poisonTraps: {
           darts: true,
           gas: false,
           snakes: 'why snakes?'
       },
       violentTraps: true
   }
}
console.log(treasureChest.contents.goldCount);
console.log(treasureChest.boobyTraps['poisonTraps'].snakes);

var favoriteFoods =  ['pizza', 'spaghetti', 'biscuits', 'donuts'];


console.log(favoriteFoods);
console.log(favoriteFoods[0]);

favoriteFoods.push('Egg Rolls');

var favoriteBands = [
    'Foo Fighters',
    'Justin Beiber',
    '3 doors down'
];
var myString = 'Super Things';

person.favorites = [favoriteFoods, favoriteBands, myString];

for (var i = 0; i < person.favorites.length; i = i + 1) {
    console.log(person.favorites[i]);
}

var favorites = [favoriteFoods, favoriteBands, 2];
console.log(favorites);
console.log(favorites[0][1]);
console.log(favorites[0][favorites[0].length - 1];
"Egg Rolls")

var firstNumber = 3;

function multiply(firstInt, secondInt) {
   var outPut = firstInt * secondInt;
   return sum(outPut, 2);
}

function sum(a, b) {
    var total = a + b;
    return total;
}

var outPut = multiply(5, 10);

person.thoughtsBeforeSleep = multiply;
