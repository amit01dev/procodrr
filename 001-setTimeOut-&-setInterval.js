// first topic  --- setTimeout() *******---------

// setTimeout()

// 1. it is not a part of core js it is provided from browse, it is not present in ecma script sepecification.

// 1 it is a part of webAPI , browser give up this and we can use this.

// 1. it is a function setTimtOut()

// 1 . when we call this function it's output is not coming from script.js file it is coming from a another file which  is -> VM0303  , b/c whatever operation it perform it is perform in this file.

// 1. it pass a return value, if we want to see then we have to paste this setTimeout() into console.


// 1. setTimeOut() is called higher order function when we pass a function inside this.




// 2.    whatever we give inside this it is treated as a js code , if we give 'hi' inside this then it is giving error b/c it is not a code, it is a string.

// 3.  if we give simple hi without ' ' then it is searching hi as a variable in the js and if it find then it not giving error but also it is not printing this value in the console.

// in the above code settimeout() take first argurment in the ' ' .that's why i write hi in 'hi'


// const hi = 'hello'
// setTimeout(hi)


// 4.   if we pass a string('hello1) in this function  setTimeout() then it create this string as a code , but this code is not present in the codebase so it give error.  

// 5.   whatever we pass inside the paranthesis () it will go to the new file VM file and here it is running line by line if we give multiple line inside the paranthesis ().


// 6.   setTimeout('console.log(ture)') 
//    this above run in VM file and b/c ture is a boolean value so it print true.

// 7.   if we want to print a string then ---
    //   setTimeout('console.log("Amit")')

//  8.    setTimeout ( 'console.log("Amit"); console.log("mohan")' 2000)
// in this above we it is printing amit and mohan with 2000 milisecond delay.
//  in this second parameter is time delay.

// 9.    if we want to write in multiple lines then we use ` ` backtics 
// setTimeout ( ` console.log("amit")
                // console.log("mohan")`, 2000)


// setTimeout(`console.log("amit")
// console.log("mohan")`, 2000  )


// 10.     if we copy the above code and run on console then it give first it's return value which is also known as it's id ( setTimeout() --- return value or id)
// with the help of this id we can stop the timeper for particular line of code , each line geterate a id but when we console in a group then it is showing only last one id.

// setTimeout(`console.log("hi-1")`,2000)
// setTimeout(`console.log("hi-2")`,4000)
// setTimeout(`console.log("hi-3")`,6000)

// 11.    we can stop the time -out with the help of  --->>  cleartimeout( return value or id)
// but we have to be quick, we have to enter this function after the timer start and before the timer end.



// 13.     we can store in a variable and this variable is having the return value with the help of this we can stop the timer, we use ---

// const timer1 = setTimeout(`console.log("hi-1")`,2000)
// const timer2 = setTimeout( `console.log("hi-2")`, 4000)
// const timer3 = setTimeout(`console.log("hi-3")`, 6000)

// clearTimeout(timer3)


// 12.    when we pass a function inside this then it is called higher order function.




// practical ------

// setTimeout(`console.log("hi-1")`,2000)
// setTimeout(`console.log("hi-2")`,4000)
// setTimeout(`console.log("hi-3")`,6000)

// const timer1 = setTimeout(`console.log("hi-1")`,2000)
// const timer2 = setTimeout( `console.log("hi-2")`, 4000)
// const timer3 = setTimeout(`console.log("hi-3")`, 6000)

// clearTimeout(timer3)

setTimeout(`console.log("hi-1")`,2000)
setTimeout(`console.log("hi-2")`,4000)
setTimeout(a,6000, 'amit',44,[4,5])


function a(){
    console.log(arguments);
    console.log('hello world !!');
}

// if we give a() instead of a then what happend is that ---- 

// first a() ---- return -->>> function return value --- which is undefined 
// so it is created like this --- setTimeout(undefined, 6000)
// so it is not calling function b/c undefined is present.

// to call the function we write a in settimeout()

// we use arguments keyword -->> which is store all the values which is passed after 2nd parameter in settimeout() 



// important question---#### 1.

setTimeout('console.log("hello")',0)
console.log('hi')

// in the above code which is printing first -----

// hi print first and then hello print second, b/c console.log is a syncronous code and it is run directly and settimeout is a asyncronous code which is go first in webAPI and then go to callback quue.that's the reason. 

// #### 2. 
// settimeout is run the code only once but setinterval is run the code infinity times if we don't give clearinterval()


// setInterval()-------------------******

// it is same as settimeout only difference is that is it runing infinite times if we don't give clearinterval() and in () we have to paste setinterval id.




//  const infinite = setInterval(`console.log("hello")`, 2000)

// now it become higher order function ( in below)

//  const infinite = setInterval(a, 2000,'amit',44)


//  function a(){
//     // console.log(arguments);
//     console.log('hello world !!');
// }

// clearInterval(infinite)
