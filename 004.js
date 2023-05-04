// EP - 46 default parameters ---*****
// from this onward we are discussing ES6 features ---

// function add(a,b = 1){
//     return a+b
// }

//  console.log( add(1,3))

// task ---1 ---*****
//  create a function which generate a random number b/t 1-9

// function rollADie(numberOfSides = 6){
//     return Math.floor(Math.random()*numberOfSides +1)
// }
// rollADie()

// before ES6 we are using this below method for this above code ------*****


// function rollADie(numberOfSides ){
//     if(numberOfSides === undefined){
//         numberOfSides = 6
//     }
//     return Math.floor(Math.random()*numberOfSides ) +1
// }
// rollADie()


// EP-- 47 spread operator ----*****
// we can use this operator to spread the value ---
// it can be used with string, array, object, function 

// example -1 on string   ----****

// const name1 = 'amit'
// const name2 = 'mohan'
// const addName = [...name1, ...name2]
// const newName2 = [...name1, ...name2, 'gita']

// in the above line gita is not spread. 



// console.log(addName);

// example -2 ----***** on array 

// const array1 = [1,2,3,4]
// const array2 = [5,6,7,8]

// var addArray = [...array1,...array2]
// const addArray2 = [...array1,...array2, 4]

// the above line is not adding 4. 


// console.log(addArray);

// example -3 in object -----*****

// const object1 = {
//     name : 'amit',
//     age : 33
// }

// const spreadObject = {...object1}
// const spreadObject1 = {...object1, gender : 'male'}

// this above line of code is adding gender.

// console.log(spreadObject);

// example --4 -- in function *****


// function add(){
//     let sum =0
//     for (let i=0; i<arguments.length;i++){
//         sum += arguments[i]

//     }
// return sum

// }

//  if i want  addition of array1 and array2  with the help of above function - then -----****

// function add( addArray[0],addArray[1] addArray[2]){
//     let sum = 0
//     for (let i=0; i<arguments.length;i++){
//         sum += arguments[i]

//     }
// return sum

// }

// we can do this above method or we can diretly spread addArray in the add().


// function add(...addArray){
//     let sum = 0
//     for (let i=0; i<arguments.length;i++){
//         sum += arguments[i]

//     }
// return sum

// }
// console.log( add())

// important -----***** we can't spread a object in a function -----

// function add(...object1){
//     let sum = 0
//     for (let i=0; i<arguments.length;i++){
//         sum += arguments[i]

//     }
// return sum

// }

// *******  --------in this above code it is saying object1 is not iterable.
// so we can't iterate object in a function.
// in function we can only spread number or string , we can't spread an object in a function.
 
 

// new topic ------****** rest parameter----

// it is store value in an array .
// it is used in function parameter.

// part -1

// function add(...num){
//     console.log(num);
// }

// add(1,2,3,4,5)

// part -1.1 ----*****

// always use rest parameter at the end of parameter b/c it is taking rest value in it.

// function add(a,b, ...num){
//     console.log(num);
// } 

// console.log(add(1,2,3,4));
// in this above code 1 and 2 are going into a and b and rest are going in to ...num 
// if we have only 2 value --->> 1 and 2 then ...num return []
// always use rest parameter at the last.



// part -2----*****

// sum of all the value which is send in the add() , code is below-----

// const number = [1,1,1,1]

// function add(...num){
//     // console.log(num);
//     let sum = 0
//     for( let i = 0; i<arguments.length; i++){
//         sum += arguments[i]

//     }
//     return sum

// }

// console.log( add(...number))

// explaination of above code -----*****

// in function add(...num ) -->> it is taking argument from add(...number) and in this add(...number)
//   we mean (1,1,1,1) and [1,1,1,1] is sending to the add(...num) and this add(...num) is wraping again into array like this --->>>> [1,1,1,1]

// --------******************
// we can do with more effectivness of this above code by using reduce method b/c it is an array 

// const number = [1,1,1,1]

// function add(...num){
//    return num.reduce((value, current)=> value + current )
// }

// const result = add(1,1,1,1)
// console.log(result);
// or 
// console.log(add(1,1,1,1));
// or 
// console.log(add(...number));


// new topic -----***** destructuring in js
// we can do destructuring in array , object and function 

// first --destructuring of array -----****

// const array = [1,2,3,4,5,6,7]

// part -1

// const [value1, value2, value3] = array

// in array while destructring squence is matter.

// in the above line value1 and value2 and so on ... is a variable inwhich array element is placed 


// part -2

// const [,,,value4] = array

//  in the above line we can access value4 , but what to do when i want to access a element which is placed on 100th index.
// then we this below method ---

// part -3 

// const { 3: newVariable} = array


// **********destructing in objects -----

// const user = {
//     name1 : 'amit',
//     age : 18,
//     more:{
//         city : 'bikaner',
//         state : 'rajasthan'
//     }
// }

// case -1 ------************

// const {name1, age } = user

// important---- in object series is not matter ---

// const { age, name1 } = user

// case -2 --------*******
// when we want to store in different variable then ----

// const {name1: newVariable} = user


// case -3 -----********  how to access nested object element or multi-level- destructuring---- 
// how to access city in the above object -----

// method -1 ( old method )---------********

// const {more} = user
// const {city} = more


// method -2 ( new method  ES6 )--------********

// const {more : {city}} = user

// method -2.1 ( want to store in a new variable )

// const {more : {city : newCity}} = user

// another example -------*****


// const object = {
//     firstName : 'amit',
//     age : 33,
//     city : 'bikaner',
//     other : {
//         cast: 'bramin',
//         gender : 'male',
//         born :{
//             inDay : 'yes',
//             inNight : 'no'
//         }
//     }

// }

// const {other : {born :{inDay}}} = object 
// console.log(inDay);



// destructuring in function () , when argurment is passed  -----*******

// const object = {
//     name1 : 'amit',
//     age : 44,
//     city : 'bikaner',
//     state : 'rajasthan'
// }
// function add({name1,age:newAge}){
//     console.log(name1,newAge);

// }

// add(object)

