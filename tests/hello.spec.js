
// console.log("Hello world");

// let name = "Garvit";
// name =  52;
// const age  = 56;
// const salary = 100000;
// const isMarried = true;
// const decima = 10.5

// console.log(name); 
// console.log(age); 
// console.log(salary); 
// console.log(isMarried); 
// console.log(decima);


// // null and un defined
// let val;
// console.log(val); // undefined

// val = null;
// console.log(val); // null


// //type of

// console.log(typeof name);
// console.log(typeof isMarried);



// // if else if  else

// let num = 50;


// if (num <= 30) {
//     console.log("Grade A")
// }
// else if(num){
//     console.log("Grade B");
// }
// else{
//     console.log("Grade C");
// }



// //  % gives reaminder

// let a = 10;
// let b = 3;
// console.log(a % b); // 1


// // ==  light equal and === strict equal

// console.log(10 =="10");
// console.log(10 ==="10");

// // !=   and   !==

// console.log(10 != "10");
// console.log(10 !== "10");

// //reverse
// let flag = false;
// console.log(!flag);

// //for

// for(let i = 0; i< 5; i++){
//     console.log(i);
// }

// //while
//  let o = 5;

//  while (o <10){
//     console.log(o);
//     o++;
//  }



// // for ..... of

// const fruits = ["apple", "amrud", "mango"];

// for (const fruit of fruits){
// console.log(fruit);

// }



// const nums = [40,39,58];

// for (const n of nums){
// console.log(n);

// }



// // normal func
// function add(a,b){

//     return a+b;

// }
// console.log(add(10,50));


// // arrow func
// // =    =>   are additional in arrow function
// const addSum = (a,b) => {
//     return a+b
// }
// console.log(addSum(10,50));

// // or
// //remove brackets and return if only one line of code
// const addSum2 = (a,b) => a+b;
// console.log(addSum2(20,48));



// // array methods. Push, pop, length, includes

// const fruitsPlatter = ["apple","mango","nariyal"]

// console.log(fruitsPlatter);
// console.log(fruitsPlatter[0]);
// console.log(fruitsPlatter.length);


// fruitsPlatter.push("banana");
// console.log(fruitsPlatter);

// fruitsPlatter.pop();
// console.log(fruitsPlatter);


// console.log(fruitsPlatter.includes("Orange"));







// // for each
// fruitsPlatter.forEach((fruit) => {console.log(fruit)});




// // map() func
// const numbers = [1,2,3,4,5,6];
// console.log(numbers);
// const doubleNumbers = numbers.map((number) => {return number*2});
// console.log(doubleNumbers);


// //filter 
// // and find : returns first num.
// const numbers2 = [12,9,34,56,34];
// const result = numbers2.filter((number)=>{return number >= 45});

// console.log(result);

// const result2   = numbers2.find((number) =>{return number > 12});
// console.log(result2);

// // objects 

// const persons = {name: "Ravi", age: 27, number: 76686786}
// console.log(persons.name);
// console.log(persons["name"]);



// //string func
// const nam = "garvit";
// const name2 = "      Sanya     ";

// console.log(nam.length);
// console.log(nam.toUpperCase());

// console.log(nam);
// console.log(nam.toLowerCase());

// console.log(nam.startsWith("g"));
// console.log(nam.endsWith("s"));

// console.log(name2.trim());

// console.log(name2.slice(0,3));
// console.log(name2.trim().slice(0,3));


// //export and import

// //export function add(a,b) { return a+b; }

// //import {add} from './hello.spec.js';



// // try and catch and finally


// try {


//     //delberately creating an error
//     throw new Error("not ofund error");
// }

// catch(error){

//     console.log(error);
//     console.log("error occured");
// }

// finally{

//     console.log("finally block");

// }


// // promises and async await





// //Playwright 
// // writing a test function using playwright
// //async and await are used to wait for the line of code to load before executing the next line of code

// //two ways of calling test and expect func for tests

// //CommonJS
// const {test, expect} = require('@playwright/test');

// // ES syntax
// //import {test, expect} from '@playwright/test';


// //test("has tab",async ({page}) => { await console.log("inside  func");});





// // const {test, expect} = require('@playwright/test');

// test('has title',async ({page}) => {
//     await page.goto('google.com');
//     await expect(page).toHaveTitle(/Google/);

//     await page.getByRole('button',{name:'input'}).click();
//     await page.getByLabel('input');
//     await page.getByPlaceholder('').fill('hi');


// })



// // choosing a specific button in a list
// //const loc = page.getByRole('#ListItem').filter({hasText: 'Product B'});
// //loc.getByRole('button',{name:'Add to Cart'}).click();

