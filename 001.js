// first topic  --- setTimeout() *******---------

// setTimeout()

// 1. 

// 2.    whatever we give inside this it is treated as a js code , if we give 'hi' inside this then it is giving error b/c it is not a code.

// 3.  if we give simple 'hi' with ' ' then it is searching hi as a variable in the js and if it find then it not giving error but also it is not printing this value in the console.

// const hi = 'hello'
// setTimeout('hi')


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

// first a() ---- return function return value --- which is undefined 
// so it is created like this --- setTimeout(undefined, 6000)
// so it is not calling function b/c undefined is present.

//  const infinite = setInterval(`console.log("hello")`, 2000)


// now it become higher order function ( in below)

//  const infinite = setInterval(a, 2000)

 function a(){
    // console.log(arguments);
    console.log('hello world !!');
}
