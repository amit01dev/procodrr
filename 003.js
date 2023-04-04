// returning function with closures ---

// function parent(){
//     const a = 5
//     const b = 5
//     function add(){
//         console.log(a+b);
//     }
//     return add
// }

// const value = parent()
// console.dir(value);
// // console.log(value);



// function parent(){
//     const a = 5;
//     const b = 10
//     function child(){
//         console.log(a + b);
//     }
//     return child

// }

// const value = parent()
// console.dir(value);



// function outer(){
//     const a = 5;
// function parent(){
//     const b = 10;
//     function child(){
//         console.log(a + b);
//     }

//     return child

// }
// return parent()
// }

// const value = outer()
// console.dir(value);




// function outer(){
//     const a = 5;
// function parent(){
//     const b = 10;


//     return function(){
//         console.log(a + b);
//     }

// }
// return parent()
// }

// const value = outer()
// console.dir(value);


// closure in advanced -----------*****


// function parent(num) {
//     const a = num;
//     const b = 5;
//     function child() {
//         console.log(a + b);
//     }
//     return child
// }

// const value = parent(5)
// const value1 = parent(11)
// console.dir(value);
// console.dir(value1);

// function gp(){
// function parent() {

//     function child()
//      {
//         const a = 5;
//         const b = 5;

//         console.log(a + b);
//     }
//     return child

// }
// const value = parent()
// const value1 = parent()
// console.dir(value);
// console.dir(value1);


// }
// gp()


// ???? important note --- 
// when we declare a hight order function and call this function in two different variable then these two variable have different memory location in memory when we change in first variable then it refeclte in first varibale and vice- varsa, example is below----




// function x(num){
//    let  a=num;
// function child(){
//     a++;
//     console.log(a);
// }
// return child
// }

// const value = x(1)
// const value2 = x(2)
// console.dir(value);
// console.dir(value2);


// create a function which can run only once ----

// function once(){
//     let executed = false
//     return function (){
//         if(!executed){
//             executed = true
//             console.log('Thank god');

//         }
//     }
// }

// const value = once()
// console.log(value);



//  new topic function and method --------********

// const maths= {
//     add : function (a,b){
//         return a+b;
//     }
// }

// const maths = {
//     substract : function (a,b){
//         return a-b;
//     }
// } 


// const maths = {
//     squre : function (a){
//         return a*a
//     }
// }


// // shortcout -----------****
// const maths = {
//     add : function(a,b){
//         return a+b},

//     // substract : function (a,b){
//     //     return a-b
//     // }
//     substract(a,b){return a-b},

//     square (num){return num *num},
//     cube (value){return value**3}


// }



// arrow function ---------------***************

// function declaration 

// function squre(num){
//     return num**2
// }
// function expression 

// const squre = function (num){
//     return num * num
// }


// arrow function --**************

// const squre = (num) => num * num
// const add = (a,b) => a+b 



// for of vs for in loop ---
// for of is used with all iterable objects except --- object literals
// for in is used for object literals

// const fruits = ['apple','banana','grapes','mango']

// for(let i=0; i<fruits.length;i++){
//     console.log(fruits[i] );

// }

// shortcut of this above loop ---

// for ( const fruit of fruits){
//     console.log(fruit);
// }

// let string= 'amit rajpurohit'
// for(const letter of string){
//     console.log(letter);
// }

// let object1 = {
//     firstName : 'amit',
//     lastName : 'kumar',
//     age : 33,
//     city : 'bikaner',

// }


//  when we deal with big data then we use this below method ----****

// const valueKey = Object.keys(object1)
// console.log(valueKey);                // it is store in array form
// for ( value of valueKey){
//     console.log(value);
// }

// const value = Object.values(object1)
// console.log(value);
// for (newValue of value){
//     console.log(newValue);


// }


// const allEntries = Object.entries(object1)
// console.log(allEntries);
// for (newEntries of allEntries){
//     console.log(newEntries);
// }


// new topic ----------------**********
// for Each method in javascript , it is used with array ----

// const fruits = ['apple','mango','kivi','banana']
// fruits.forEach(function (fruit){
//     console.log(fruit);

// })

// const fruits = ['apple','mango','kivi','banana']
// fruits.forEach( (fruit, index) => {console.log(index +1 , fruit );})

// it give return as undefined b/c we don't define this function it is pre-defined in js.
// if we give this below then we get output as undefined b/c it is not taking return value as their own b/c we don't define it.


// fruits.forEach( (fruit) => {return fruit})


// map method ----******
// part -1
// const months = ['janu','febru','march','april']

// months.map((month ) => {
//     console.log(month );
// })

// part -2

// const months = ['janu','febru','march','april']

// months.map((month, index, array1) => {
//     // console.log(month,index, array1 );
//     console.log(index, array1, month);
// })

// the above is giving return value which is not showing in clg , if we copy past this above part -2 code in the console direct then it show it's return value --

// it give return a array in side the array it return 4 undefined b/c we are not giving any return value in the code.

// part -3
// in this below code i use return keyword and give month so it return each month one by one in an array when i copy paste this code on console. 

// it is not showing directly b/c it is not stored in a variable , we have to put this code in a variable or put this code in a console.log( code ), i do on part -4

// const months = ['janu','febru','march','april']

// months.map((month, index, array1) => {
//     // console.log(month,index, array1 );
//     console.log(index, array1, month);
//     return month
// })

// part -4

// const months = ['janu', 'febru', 'march', 'april']

//  const variable = months.map((month, index, array1) => {
//     // console.log(month,index, array1 );
//     console.log(index, array1, month);
//     return month
// })

// console.log(variable);

// or 

// console.log(months.map((month, index, array1) => {
//     // console.log(month,index, array1 );
//     console.log(index, array1, month);
//     return month
// }))

// or 

// console.log(months.map((month, index, array1) => {
//     // console.log(month,index, array1 );
//     console.log(index, array1, month);
//     return month.toUpperCase()
// }))

// another method in array -----------*************
// filter method 

// part-1

// const months = ['january', 'february', 'march', 'april', 'may']
// months.filter((month, index, array1) => {
//     console.log(month, index);

// })

// part -2

// in this below it retun the default value of array or i can say it give original array as a default return , if we apply someting which is less of the original array then it give this (less ) otherwise it give the original array, 

// const months = ['january', 'february', 'march', 'april', 'may']

// const value =  months.filter((month, index, array1) => {
//     // console.log(month, index);
//     return month.toUpperCase()  [ if we place (in return) true value then it print all original array value & if we place here false then it is not printing any element of array.]
// })
// console.log(value);


// part -3 ---------------------------------------

// here i apply a condition in the return which is less of the original array so this (less) is applied. 


// const months = ['january', 'february', 'march', 'april', 'may']

// const value =  months.filter((month, index, array1) => {
//     return month.length<=5;
// })
// console.log(value);

// ### task-1 for me --- 

// return only months who have M or m . 
// below i try out but things not going well -- 

// const months = ['january', 'february', 'March', 'april', 'May', 'december']

// const value = months.filter((month, index, array1)=> {
//      for( let i = 0; i<month.length;i++){
//         if(month[i] == "M" || "m"){
//             return month
//         }
//         else{
//             return 'empty'

//         }

//     }
// })
// console.log(value);

// actual solution ---- from procodrr ---*****

// const months = ['january', 'february', 'March', 'april', 'May', 'december']

// const value = months.filter((month, index, array1)=> {
//         return month.toUpperCase().includes('M')
//     }
// )
// console.log(value);


// *** task -2 for me -----
// only give return the elements which are above  3rd  index.

// const months = ['january', 'february', 'March', 'april', 'May', 'december']

// const value = months.filter((month, index, array1)=> {
//         return index >3 
//     }
// )
// console.log(value);




// task -3 for me 
//  filter out adult(=>18) students  from this below array and store an array ---

const students = [
    {
        name: 'amit',
        age: 13
    },
    {
        name: 'Neha',
        age: 18
    },
    {
        name: 'golu',
        age: 33
    },
    {
        name: 'menu',
        age: 55
    },
    {
        name: 'pinki',
        age: 76
    },
    {
        name: 'gudsa',
        age: 6
    }
]
// const task = student.filter((value, index, array1)=> {
//     // console.log();
//     return value.age >=18;
// })
// console.log(task);


// task -4 ****** ----------------- chaining of array method ---
// print only names which are adults from the above example.

// step -1
// const task = students.filter((student)=> {
//     return student.age >=18;
// })
// console.log(task);

// in the above we access adult student. 
// now in below we access name of these student.

// step -2

// const adultName = task.map((name1)=> {
//     return name1.name


// })
// console.log(adultName);


// shortcut of step -1 and step -2 ----********

// const  task = students.filter((student) => {
//     return student.age >=18;
// }).map((name1) => {
//     return name1.name
// })
// console.log(task);


// if we want to print only the name which has "N " then this below code is --------*****

// const  task = students.filter((student) => {
//     return student.age >=18;
// }).map((name1) => {
//     return name1.name
// }).filter((name2)=> {
//     return name2.includes('N') })

// console.log(task);



// new method of array ---- ****** reduce - method ---

// const number = [1,2,3,4]

// const sum = number.reduce((accumeletor, current, index, array1 )=> {
    // console.log(current, index);
    // console.log(accumeletor);
//     return current
// })
// console.log(sum);

// explaination of reduce method ---*****
// explained in notebook



// another array method ----***** some array method ---

// const num = [2,4,6,7]
// const someMethod = num.some((number, index) => {

//     console.log(number);
//     if(number % 2 === 1){
//         console.log(index);
//     }
//     return number % 2 === 1
// })

// console.log(someMethod);


// another array method -----****** every method ---

// const num = [2,4,6,7]

// const everyMethod = num.every((number) => {
//     // console.log(number);
//     return number % 2 === 0
    
// })

// console.log(everyMethod);


// argument keyword ------******* new topic
// this keyword is bydefault is present in function except arrow function.
// it give all the value which we pass in the function ()

// one property of this keyword -----
// argument.length


// function  add (a,b){
//     console.log(arguments);
//     console.log(a+b);
// }

// task -1 **** create a function in which whatever value we give it will sum it with the help of argument keyword.

// function add (){
//     let sum = 0
    
//     for(var i = 0; i< arguments.length;i++){
//         (sum = sum + arguments[i])
//     }
//     return sum

// }

// another task ***-------
// the argument keyword is not an array, it is an object.
// the task is that convert this argument keyword into an array ----


// method -1
// using Array.from()


// function add(){
//     let convert = Array.from(arguments)
//     console.log(convert);
//  const add = convert.reduce((value, current) => {
//     return value + current 
//  })
//  return add   
// }




// method -2
// using spread operator
function add(){
    let convert = [...arguments]
 const add = convert.reduce((value, current) => {
    return value + current 
 })
 return add   
}





