// generator function is the type of function which we can pause and resume.

// in below we can put * on function like this --->>> function* or we can put * on function name like this ---->>> *generatorFunction()

// the yield keyword is pause the function and to resume the funciton we have to again call the function.

// when we call the function it is giving two  values  in an object first one is the value which is written after yield and second one is done which  give true or false which means whether this function is completed the run or not if false then the function is not runed completed.

// if we want only value which is written after the yield then we write 
// console.log(callingFunction.next().value);



// function *generatorFunction(){
//     console.log('hi how are you');
//     yield 20
//     yield 30
//     yield 40
// }

// let callingFunction = generatorFunction()
// console.log(callingFunction.next().value);
// console.log(callingFunction.next());
// console.log(callingFunction.next());
// console.log(callingFunction.next());


