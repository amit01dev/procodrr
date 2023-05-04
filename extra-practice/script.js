// const first = setTimeout(`console.log("hi-1")`,100)


// const second = setTimeout(`console.log("hi-2")`,6000)

// const thrid = setTimeout(`console.log("hi-3")`,8000)


// let hi = 'hello'
// setTimeout('hi')


// const infinite = setInterval(a, 1000,'amit',44)


// function a(){
//    // console.log(arguments);
//    console.log('hello world !!');
// }

// // clearInterval(infinite)

// function a (x,y){
//     return x+y;
// }

// console.log(a(3,3));

// const math = {add: function(a,b){return a+b}}
// console.log(math.add(2,2));



// fruits = ['apple','banana','mango','graps']

// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i]);

// }

// for(fruit of fruits){
//     console.log(fruit);

// }

// details = {
//     name : 'amit',
//     age : 44,
//     city : 'bikaner'
// }

// // for(detail in details){
//     console.log(detail);

// }

// const detail = Object.keys(details)

// const detail1 = Object.values(details)
// console.log(detail1);


// const detail1 = Object.entries(details)
// console.log(detail1);


// for(eachDetail of detail){
//     console.log(eachDetail);

// }


// let object1 = {
//     firstName : 'amit',
//     lastName : 'kumar',
//     age : 33,
//     city : 'bikaner',

// }

// for(object in object1){
//     console.log(object);
// }


//  const number = [1,2,3,4,5,6,7]

// number.forEach((person,index)=>{
//     console.log(index +1,person);


// })

// const charactor = ['a','b','g','s']


// const ab = charactor.filter(function(value,index){
//     // console.log(value,index);
//     return value.toUpperCase()

// })
// console.log(ab);


// const months = ['january', 'february', 'march', 'april', 'may']

// const value =  months.filter((month, index, array1) => {
//     console.log(month, index);
//     return month.length<5 })


// console.log(value);

// reduce method on array -------

// const number = [1,2,3]


// const sum = number.reduce((accumeletor,current,index,array1)=>{
//     console.log(accumeletor);

// })
// // console.log(sum);

// const number = [1,2,3,4,5,6]

//  const output = number.map((value)=>{
//    return value.toString(2)

// })
// console.log(output);



// filter method ----

// const number = [1,2,3,4,5,6,7]

// const output = number.filter((value)=> value % 2
// )

// console.log(output);


// const number = [1,2,3,4,5]

// const output = number.forEach((value, index , array1)=>{
//     console.log(value,index,array1);

// })

// console.log(output);


// practicing map method -------**********

// if we want to transform an array and get output as an array , then we use this --------

// const number =[1,2,3,4,5]

// convert into double , thriple ,binaray and print it in array form


// const output  = number.map((value)=>{
//     return value *2

// })
// console.log(output);

// const output  = number.map((value)=>{
//     return value *3

// })
// console.log(output);



// const output  = number.map((value)=>{
//     return value.toString(2)


// })
// console.log(output);



// practicing filter method ---------**********

// filter all the values which are odd value.


// const number = [1,2,3,4,5,6,7,8,9]

// const output  = number.filter((value )=>{

//     return value % 2 !== 0

// })

// console.log(output);


// filter all the values which are even value.


// const number = [1,2,3,4,5,6,7,8,9]

// const output  = number.filter((value )=>{

//     return value % 2 == 0

// })

// console.log(output);


// reduce method ---------*****

// const arr = [1, 2, 3, 4, 5, 6]

// find out sum and max value in the arr.

// without using the reduce method ----

// let sum = 0

// for (let i = 0;i<arr.length;i++){
//     sum = sum + arr[i]

// }

// console.log(sum);


// with the help of function ---*****

// function add(){
//     let sum =0
//     for(let i=0;i<arr.length;i++){
//         sum = sum + arr[i]
//     }
//     return sum
// }

// console.log(add());




// find out max value in the array-----

// let sum = 0
// for(let i =0;i<arr.length;i++){
//     if(sum<arr[i]){
//         sum = arr[i]
//     }else{
//         sum=sum
//     }
// }


// this below is the shortcut of finding the max value in an array .it is a math function.

// const output = Math.max(...arr)
// console.log(output);

// find out the max value in this array --------******
// with the help of reduce method-----

// const num = [2,4,1,33,66,0]

// const output = num.reduce((acc,cur)=>{
//     for(let i = 0; i <num.length;i++){
//         if(cur>acc){
//             acc=cur        
//         }}
//     return acc

// },0)

// console.log(output);


// shortcut of this above -------


// const second = Math.max(...num)
// console.log(second);



// task ---1*****----------

// const user = [
//     {firstName : 'amit', secondName : 'kumar', age :22},
//     {firstName : 'neha', secondName : 'purohit', age :22},
//     {firstName : 'deeksha', secondName : 'mishra', age :22}
// ]

// task is that you have to store full name in an array.

// we use here map mathod --------

// const output = user.map((value)=>{
//     return value['firstName'] + " " + value.secondName

// })

// console.log(output);


// task 2 ----------*******

// const user = [
//     { firstName: 'amit', secondName: 'kumar', age: 10 },
//     { firstName: 'neha', secondName: 'purohit', age: 20 },
//     { firstName: 'deeksha', secondName: 'mishra', age: 30 },
//     { firstName: 'mohan', secondName: 'khatri', age: 44},
//     { firstName: 'gita', secondName: 'gupta', age: 30 }

// ]

//create an object which show the age of all the people like this ---{ 10 :1 , 20: 1 , 30 : 2, 22: 1}





// we  are using reduce method here -------
// debugger

// const output = user.reduce((acc, curr)=>{

//     if (acc[curr.age]){
//         acc[curr.age] = ++ acc[curr.age]

//     }else{
//         acc[curr.age] =1
//     }
//     return acc


// },{})

// console.log(output);


// task -3 ---------*******
// find out full name of the people who's age is less than 30 

// we use filter ----*****

// when we want the output from the original array by modifing this original array, then we use filter method ----


// const user = [
//     { firstName: 'amit', secondName: 'kumar', age: 10 },
//     { firstName: 'neha', secondName: 'purohit', age: 20 },
//     { firstName: 'deeksha', secondName: 'mishra', age: 30 },
//     { firstName: 'mohan', secondName: 'khatri', age: 44},
//     { firstName: 'gita', secondName: 'gupta', age: 30 }

// ]

// const output = user.filter((x)=>{ return x.age<30});

// this above is giving user element which have age less than 3o but we can't apply more filter into this b/c filter method only give element value .

// we have to apply map method into this ---in order to get the first name 

// const finalOutput = output.map((x)=>{return x.firstName + ' ' + x.secondName })

// console.log(output);

// console.log(finalOutput);


// shortcout of this above  method -chaining is ---

// const output = user.filter((x)=>{ return x.age<30}).map((x)=>{return x.firstName + ' ' + x.secondName })

// console.log(output);



// task ---3 --- do this above problem with the help of reduce method -------*****



// const user = [
//     { firstName: 'amit', secondName: 'kumar', age: 10 },
//     { firstName: 'neha', secondName: 'purohit', age: 20 },
//     { firstName: 'deeksha', secondName: 'mishra', age: 30 },
//     { firstName: 'mohan', secondName: 'khatri', age: 44},
//     { firstName: 'gita', secondName: 'gupta', age: 30 }

// ]
// const output = user.reduce((acc, curr) =>{
    
//     if(curr.age<30){
//         acc.push(curr.firstName)
//     }
//     return acc

// },[])

// console.log(output);



// some array method -----*******

// const num  = [1,2,3,5,33,3]
// const output = num.some((value)=>{
//     return value >5

// })
// console.log(output);


// every array method ------********

// const num  = [1,2,3,5,33,3]
// const output = num.every((value)=>{
//     return value % 2 ===1
    
// })
// console.log(output);


// argument keyword ----------**********

// function add( ){

// //     let sum =0;
// // for (let i = 0;i<arguments.length;i++){
// //     sum = sum+ arguments[i]
// // }
// return arguments

// }


// console.log(add(1,2,3));


// function add(){
//     let convert = [...arguments]
//     return convert
// }
// console.log(add(1,2,3,4));


// rest parameter ---------*********

// function add(a,b, ...num){
//     return    (a + b + num );

// }
// console.log(add(1,1,10,10,10));


// destructuring of array ------****

// const arr = [1,2,3,4,5]

// const [value1 , value2 ] = arr
// console.log(value2);

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


// // const { firstName: newFirstName }  = object
// const {other} = object
// const {born} = other
// const {inDay} = born
// console.log(inDay);

// console.log(newFirstName);

// getAttribute and setAttribute-------

// const selectElement = document.querySelector('h2')
// const getClass = selectElement.setAttribute('class','h2')


//  const selectElement = document.querySelector('procodrr')

// // const getClass = selectElement.getAttribute('class','h2')



// console.log(selectElement);


// const value = [1,3,44,66,2,6,0]

// console.log(value.sort());
// console.log(value.sort((a,b)=>{return a-b}));
// console.log(value.sort((a,b)=>{return b-a}));


// sort this above array without 

