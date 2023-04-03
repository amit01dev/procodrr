// const age = 10;
// if (age >=20)
// console.log("age is greter");
// console.log("program end");

// const userName = prompt('please enter your name')||("procodrr")
// const userAge =   parseInt(prompt("Enter you Age")) || (24)



// document.write(`userName is : ${userName} and userAge is ${userAge}`)

// const daynumber = parseInt(prompt("enter a number"))
// if (daynumber ===0){
//     console.log("sunday");
// }
// else if (daynumber===1){
//     console.log("Monday");
// }
// else if (daynumber ===2){
//     console.log("tuesday");
// }
// else if (daynumber ===3){
//     console.log("wednesday");
// }
// else if (daynumber ===4){
//     console.log("thursday");
// }
// else if (daynumber ===3){
//     console.log("friday");
// }
// else if (daynumber ===3){
//     console.log("saturday");
// }else{
//     console.log("wrong input");
// }

// switch (daynumber) {
//     case 0:
//         console.log("sunday");
//         break
//     case 1:
//         console.log("monday");
//         break
//     case 2:
//         console.log("tuesday");
//         break
//     case 3:
//         console.log("wednesday");
//         break
//     case 4:
//         console.log("thursday");
//         break
//     case 5:
//         console.log("friday");
//         break
//     case 6:
//         console.log("saturday");
//         break
//     default:
//         console.log("wrong input")

// }
// debugger
// const name = "amit"

// const firstName = 'gita'
// const lastName = 'gita'
// const againName = 'gita'
// const clgName = 'gita'


// const userName1 = {firstName : "amit",}
// const userName2 = {firstName : "amit",}

// const user = {
//     firstName : 'amit',
//     lastName : 'kumar',
//     age : 44
// }
// console.log(user);

// delete user.firstName
// console.log(user);

// Object.seal(user)
// user.city = 'bikaner'
// user.firstName = 'gita'
// delete user.age

// console.log(user);

// const fruit = ['apple', 'mango','banana']
// fruit[fruit.length] = 'allout'

// console.log(fruit);


// const number = [2,4,5,6,33,32,55,64]
// const fruit = ['apple','mango','banana' , "Bambu", 'Anotherapple']


// tic- tac -toe

// const ticGame = [
//     ['x', null , null],
//     [null ,null ,'o'],
//     ['o', null, 'x']
// ]

// const n = [1,2,3,4,5,6]
// // n.slice(2,3),33

// const fruit1 = ['mango','apple','orange']

// jugaad ---

// const fruit2 = [].concat(fruit1)
// const fruit2 = fruit1.slice()



// shallow copy

// const fruit2 = []
// Object.assign(fruit2,fruit1)
// fruit2.push('grapes','lichi')
// const fruit2 = [...fruit1]   
// fruit2.push('grapes','lichi')


// compound operator ( combined assignment operator)

// addition assignment (+=)
// substraction assignment (-=)
// multiplication assignment (*=)
// division assignment (/=)
// remainder assignment (%=)

// increment operator (++)
// decrement operator  (--)

// let num = 10


// num = num + 5
// num = num + 5
// num = num + 5

// num += 5

// num -= 5
// num -= 5

// num *= 2

// num /= 2

// num %= 7

// increment assignment ---
// let value =  num++
// let value =  ++num

// decrement assignment ---
// let value =  num--

// let value = --num

// while loop 
// print 0-10

// let num = 1
// while(num < 11){
//     console.log(num);
//     num++

// }
// let num = 1
// while(num <= 100){
//     console.log(num);
//     num++

// } 

// print all the element in an array with the help of while loop ----

// let friends = ['amit','kumar','gita','sita','mohan']
// let i = 0
// while (i< friends.length){
//     console.log(` ${i + 1}. ${friends[i]} procodrr `)
//     i++

// }


// for loop ----

// for (let i = 0; i<=10; i++){
//     console.log(i);
// }

// let people = ['amit','kumar','gita','sita','mohan']

// for (let i = 0; i< people.length; i++){
//     console.log(people[i]);
// }

// print all even numbers ---

// for (let i = 0; i<=100; i++){
//     if (i % 2 === 0){
//         console.log(i);
//     }else{false}

// }

// print all odd number ----

// for (let i = 0; i<=100; i++){
//     if (i % 2 === 1){
//         console.log(i);
//     }else{false}

// }

// do while loop ----

// let i = 0
// do {
//     console.log(i);
//     i++
// }
// while(i<5)

// function --------------------

// function user (){
//     console.log("hi");
//     console.log("hello");

// }
// console.log(user()


// debugger
// let username = 'amit'
// let a = 4;
// let b=444;
// debugger
// aaauser()


// const name = 'amit'
// const age = 44

// function aaauser() {
//     add(4,4)
//     console.log('userName');
// }

// function add(a,b){
//     console.log(a+b);
// }


// debugger
// user()

// function expression

// const user =  function (){
//     console.log('hi my name is amit');
// }
// user()


// anonymous function

// const city = function (){
//     console.log('my city is bikaner');

// }
// function add(a,b){
// return    a+b
// }

// console.log(add(4,4)); 


// function details(username , profession, age ){
// if (username === undefined){
//     username = 'user'
// }
//     if (profession === undefined){
//         profession ='(No input from user)'
//     }
//     if (age === undefined){
//         age = '(No input from user)'
//     }
// console.log(`hi my name is ${username || 'user1'} and my profession is ${profession} and my age is ${age}`);
// }
// details()


// function sum(number1, number2){
//     return number1 + number2
// }
// const addingNumber = sum(2,2)
// console.log(addingNumber);


// function subtract(number1, number2){
//     return number1 - number2
// }
// const addingNumber = subtract(2,2)

// console.log(addingNumber);
// debugger
// let name = 'amit'
// introduceMe()

// function introduceMe() {
//     console.log('hi');
//      console.log(add(4,4))
// }
// function add(a,b){
//     khuchBhi()
//     return a+b

// }

// function khuchBhi(){
//     console.log('khuch');
// }

// let a;
// console.log(a);
// console.log(a);
// let a = 3


// let number = 0;
// console.log(number++);
// console.log(++number);
// console.log(number);

// function intro() {


//     if (true) {
//         var user = 'amit'
//         let user1 = 'golu'
//         console.log(user);
//         console.log(user1);
//     }
//     console.log(user);
//     console.log(user1);
// }

// intro()

// function intro(b){
//     console.log(b);
//     // console.log(typeof(b));
// }
// intro('amit')
// intro({username : 'arpit'})
// intro([2,3,4,5,6,5])

// console.log(typeof intro);
// // console.dir(intro)
// intro.age = 44;
// console.log(intro);


// function intro(){

//     console.log('hi');
// }

// const b = intro

// b.age = 44

// b()

// intro()


function a(b){
    console.log('hi');
    b()
}

// const sayHi = function(){
// console.log('hello');
// }
// a(sayHi)


// or

a(function(){console.log('hello');})
