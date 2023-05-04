// (function add(){
//     var a = b= 3
//     })()
//     console.log(typeof(a));
//     console.log(typeof(b));

//     console.log(a);
//     console.log(b);

// answer -----

//     Even if you declare the variables with var, the a variable is still only accessible within the function add() because it has a function scope. The b variable, on the other hand, is created as a global variable because it is not declared with var, let, or const.

// However, in this case, both a and b are declared with the same var statement. This means that a is actually a variable that is scoped to the function add(), but b is created as a global variable.

// So after the function add() is executed, a is no longer accessible outside the function, but b is accessible as a global variable.

// To avoid confusion, it is generally recommended

    
// // 2


// (function add(){
//     let a = b= 3
//     })()
//     console.log(typeof(a));
//     console.log(typeof(b));

    
    // console.log(a);
    // console.log(b);
    
    
    
// 3

// (function add(){
//     const a = b= 3
//     })()
//     console.log(typeof(a));
//     console.log(typeof(b));
    
    
//     console.log(a);
//     console.log(b);
    

// answer of these above questions---


// The reason why a is undefined is because it is declared inside the function add() using the const keyword, which means that it has block scope and is only accessible within the block in which it is defined. In this case, it is only accessible inside the function add().

// On the other hand, the variable b is declared without the const keyword, which means that it is created as a global variable. Since it is not declared with var, let, or const, it is created as a property of the global object (in a browser environment, this is typically the window object).

// Therefore, after the function add() is executed, a is no longer accessible because it has block scope and only exists within the function. However, b is accessible outside of the function because it is a global variable.
    

// 4


// var a =0
// function b(){
//     a=10;
//     return ;
//     a = function (){}

// }

// b()
// console.log(a);

// idealy value of a should be function  (){}  b/c all three a is declare in global scope and the last one is a = function(){} , but the value of a is 10 b/c after return keyword function doesn't read anything except if it is a function . 

// in simple words function is closed after return keyword is hited.


// 5


// var a =0
// function b(){
//     a=10;
    
//     a = function (){}

// }

// b()
// console.log(a);

// // now in above  value of a is function (){}



// sort this aray -----------***********8


// const value = [1,3,44,66,2,6,0]

// console.log(value.sort());
// console.log(value.sort((a,b)=>{return a-b}));
// console.log(value.sort((a,b)=>{return b-a}));
// it negative value occur it is not swaping and if positive value is occur is it swaping the value.


// example 2-----****

// const value1 = ['G','A','Z','M','B']
// console.log(value1.sort());



// sort this above array without using function inside the sort()

// for(let i =0;i<value.length;i++){
//  if(value[i]- (value[i+1]) === ){
//      value[i]
//  } 
// }


//  -----------***********

// 1== '1'


//  -------------*********

// []==0

// --------------**********

// 0==""


// ----***

// const value1 = !+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![]
// console.log(value1);


// ------*****

typeof NaN

// ----****

typeof null

// -----*****
// console.log('1' - -'1')
// console.log('1' + - '1')



// ---------******

// function add(){
//     var a =3
// }
// add()

// console.log(a);

// -------*****

// const obj = { a: 'one', b: 'two', a: 'three' };
// console.log(obj);

// const a = {};
// const b = { key: 'b' };
// const c = { key: 'c' };

// a[b] = 123;
// a[c] = 456;
// console.log(a);



// console.log([] + []);               
// console.log([1] + []);              
// console.log([1] + "abc");           
// console.log([1, 2, 3] + [1, 3, 4]); 


// var a = 3;
// var b = {
//   a: 9,
//   b: ++a
// };
// console.log(a + b.a + ++b.b);


// const arr1 = [1, 2, undefined, NaN, null, false, true, "", 'abc', 3];
// console.log(arr1.filter(Boolean)); 

// const arr2 = [1, 2, undefined, NaN, null, false, true, "", 'abc', 3];
// console.log(arr2.filter(!Boolean)); 



// ---------************88


// function fruits (){


//     console.log(fruit);
//     console.log(age);

//     var fruit = 'apple'
//     age = 44

// }

// console.log(fruits());

// ---------*************

// for(var i =0;i<3;i++){
//     setTimeout(() => console.log(i), 1);
// }


// -----------**********

// for(let i =0;i<3;i++){
//     setTimeout(() => console.log(i), 1);
// }


// ----------**********

// for(const i =0;i<3;i++){
//     // setTimeout(() => console.log(i), 1);
//     console.log(i);

// }

// console.log(+"true");

// console.log(+true);

// function add(a,b){
//     return a+b

// }
// for(let i = 0 ; i<2000;i++){
//    console.log(add(2,2));
//    x

// }

// object = {
//     first : 'amit',
//     age : 33,
//     city : 'bikaner'

// }
// object.delete(first)

// console.log(object
// delete object.age
// console.log(object);

// Object.seal(object)
// Object.freeze(object)

// object.power = 'hot'
// console.log(object);



// ------------***********8


// function* add(){
//     yield 30
//     yield 40
//     console.log('hi');

// }
// var functionCall = add()
// console.log(functionCall.next());
// console.log(functionCall.next());
// console.log(functionCall.next());


// console.log(3);


// ----------************


// console.log(3<2);
// console.log(3<2<1);

// ---------------********************

console.log('A' - 'B' + '2');
// answer is NaN2

// ----------------**************

console.log('A' -'B' + 2);
// ans is NaN


// ------*****

var a = 0
function b(){
    a=10
    return ;
    var a = function (){}
    
}

b()
console.log(a);


// var a = 0
// function b(){
//     a = 10
//     return 'hi'

// }
// console.log(b());

// console.log(a);

