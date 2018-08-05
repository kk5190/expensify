//Object Destructuring

// const person = {
//   name: 'kks',
//   age: 28,
//   location: {
//     city: 'Gurg',
//     temp: 32
//   }
// };

// const { name ='Anon', age } = person;

// console.log(`${name} is ${age}.`);

// const {city, temp: tempr} = person.location;
// if(city && tempr) {
//   console.log(`${tempr} - ${city}`);
// }


// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };
// const {name: publisherName = 'selfPublished'} = book.publisher;
// console.log(publisherName);

//Array Destructuring


const address = ['1299 S Jun St', 'Phila', 'Pensy', '121'];

const [, , state] = address;
console.log(`You ar in ${state}`);
