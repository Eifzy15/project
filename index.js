// let bestPlayer = "sAlaH";
// const PI = 3.142;
// //console.log('good morning '+ "ydfhdg");// concatenation
// // console.log(bestPlayer[bestPlayer.length -1]);
// // console.log('A'.concat('h', 'dg', 'gd'));
// let address = 'Abakpa     ';
// address.at(8) //tyuutyyuuuuuu
// console.log(bestPlayer.endsWith('H'));

// console.log(bestPlayer[0].toUpperCase() + bestPlayer.slice(1).toLowerCase());
// console.log('h'.toLowerCase() == 'H'.toLowerCase());


// bestPlayer[0]
// let bestfood = 'yamandoil'
// bestfood.at(9)
// console.log(bestfood.at)

let bestsport = "football"
// console.log(bestsport.split('t'));
// console.log(bestsport.toLowerCase());
// console.log(bestsport.toUpperCase());

// console.log(bestsport.slice(2, -2));
// console.log(bestsport.substring(5));
// console.log(bestsport.indexOf('t'));
// console.log(bestsport.lastIndexOf('l'));
// console.log(bestsport.includes('r'));
// console.log(bestsport.startsWith('t'));
// console.log(bestsport.endsWith('a'));
// console.log(bestsport.replace('o','a'));
// console.log(bestsport.replaceAll('o', 'u'));

let firstname = 'ify'
let lastname = 'okpaleke'
// console.log(firstname + " " + lastname);
// console.log(`${firstname} ${lastname}`);
// console.log(firstname.concat(" ",lastname));
// console.log(Boolean(10 > 9));
let admin = 'true'
//  if (admin) { console.log( Boolean ('you are an admin'));
//  };
let date = new Date();
let hours = date.getHours();
//  console.log(hours);
//  if (hours < 12){
//     console.log('good morning');
//     } else if (hours < 16){
//     console.log('good aftertoon');
//     }

//  else if (hours > 20) {
//     console.log('good evening');

//  }
let person = {
   lastname: 'jane',
   firstname: 'amara',
   age: 24,
   gender: 'female',
   hobbies: ['eating', 'dance',],
   address: {
      street: 'no 5 havil',
      city: {
         longitude: 15,
         latitude: 4,
         details: {
            countryCode: 234,
            boundaryStates: [
               {
                  name: 'Ebonyi',
                  boundary: 'South'
               },
               {
                  name: 'Anambra',
                  boundary: "West"
               }
            ]
         }
      },
      state: 'Eungu',

      formerAddresses: [
         {
            city: 'Jos',
            state: "Plataeu"
         },
         {
            city: 'Lagos',
            state: 'Lagos'
         }
      ]
   }
}
person.hobbies[1] = 'play'

let foods = ['rice', 'beans', 'egg']
person.color = 'Black'
person.lastname = "Joy"
delete person.firstname

foods[0] = 'Akpu'
foods[3] = 'Soup'
foods[4] = 'Oka'
// delete foods[1]
// console.log(foods.length);

// console.log(foods);


// //  console.log(person);

// console.log(person.address.city.details.countryCode);
// console.log(person.address.city.latitude);
// console.log(person.address.city.details.boundaryStates[1].name);
// person.address.city.details.boundaryStates[0].boundary = "East"
// console.log(person.address.city.details.boundaryStates[0].boundary);

//  console.log(person.address.formerAddresses[1].city);
//  person.lastname
//  console.log( person.lastname.toUpperCase());
//  console.log(person.age);
//  console.log(person.address);
//  person.hobbies.pop()
//  person.hobbies.push('soccer')
//  console.log(person.hobbies);

//  console.log(person.address.city);

//  for(let i = 0; i<foods.length; i++){
//    console.log(foods[i]);
//  }
//  let i = 0;
//  while (i<foods.length) {
//    console.log(foods[i]);
//    i++;
//  }
// let i =0
// do {
//    console.log(foods[i]);
//    i++
// } while (i<foods.length);
// for (let i = 0; i < 20; i++) {
//    if (i % 2 == 1) {
//       continue;
//    }
//    if(i > 10){
//       break
//    }
//    console.log(i);
// }

// let x = function(){}

// greet() hoisting example

// function greet(user = "User") {
//    console.log('Good morning '+ user);
// }
// // const greet = function(){
// //    console.log('Good morning');
// // }
// greet("Ify")
// greet('Uche')
// greet()
// greet()


// function add(a, b) {
//    return a + b;
// }
const add =  (a, b) =>  a + b;
const result = add(532, 78);
console.log(result);  // Output: 8


// foods.forEach(function (item) {
//    console.log('item: ', item);
// })

// foods.forEach((item)=> console.log(item))
let numbers = [1,2,3,4,5,6,7,8,9,10,11]
let upperCasedFoods = foods.map((item)=> item.toUpperCase())
let threeLetterFoods = foods.filter((item)=>item.length === 4)
let sumOfNumbers = numbers.reduce((aggregate, current)=>aggregate+ current)
console.log(upperCasedFoods);
console.log(threeLetterFoods);
console.log(sumOfNumbers);

