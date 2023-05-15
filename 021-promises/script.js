// promises -----***

// 1. we don't need to create promises, promises are created we just have to use it, but in this lecture we are going to create promises so that we can understand it.

// 2.promises are object

// 3. there are three state of a promise ---> 1. pending  2. fullfilled  3. rejected

// 4. promises are created with new keyword -->>

// 5. promise is a object which is provided by browser it is not a part of the js main thread, it is working asynchronously. promise is handled by web API.
// browser constantely tracking the promise state, if promise is handled by js main thread then we are not able to do anything.b/c it is tracking the promise, so this is proof that it is handled by browser.


// 6. when promise is settled ( resolve or reject ) then it is going into micro-task queue. & from here it is going into callstack.


// 5. promise take callback function as an argument.


// A.    pending state ---****

// this is pending state of the promise , if it remain in this way means if we don't change anything then it is remain pending.

// const p = new Promise(()=>{})

// B.     fullfilled state ---****

// if we pass argument in callback function & call the first argument in the function itself  then promiseState become fullfilled but promisesResult is undefined until we pass something inside resolve()

// we can give any-name but resolve , reject is widly used.


// const p = new Promise((resolve , reject)=>{
// resolve()
// })

// when we pass something inside resolve() then promiseResult become that value.

// const p = new Promise((resolve , reject)=>{
//     resolve('hello')
//     })
    


// we can pass object also ---***
// it works fine , it give object in promiseResult

// const p = new Promise((resolve , reject)=>{
//     resolve({name : 'amit'})
//     })
    



// C.   RejectState--****

// it can open promises widow in console but it is error form.
// if we pass something insdie reject() then promisResult become that value.

// const p = new Promise((resolve , reject)=>{
//     reject()
//     })
    

// if we pass something insdie reject() then promisResult become that value.

// const p = new Promise((resolve , reject)=>{
//     reject('Rejected message')
//     })


// we can give settimeout in promises-------***
// here in below promise is resolved after 5 second b/c we set timer
// after 5 second promiseState is fullfiled and promiseResult is hello


// const p = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('hello')
//     },5000)
// })


// we can apply event lister to a button & when we click on the button, event fired & promise resolved.

const button = document.querySelector('button')
const rejectedButton = document.querySelector('.rejected')


// promise state remained pending until we click on the resolve button when we click on the button then promiseState become resolved.


// const p = new Promise((resolve,reject)=>{
//     button.addEventListener('click',()=>{
//         resolve('hello')
//     })

    
//     rejectedButton.addEventListener('click',()=>{
//         reject('Rejected message')
//     })

    
// })

// important point ---***#### 
// once a promise state is filled  ( pending or fullfilled or reject) then another state is not able to declare.
// in above code once we click on resolve button and promise state is become fullfilled & then if we click on the reject button, promise state will not changed to reject.


// ---**** inside promise object various methods are present ---
// here we discuss two -->> catch(), then() --> they both take callback function inside them.

// then()--- & catch()
// when promise is resolve then --->>> then() function is activated and whatever we put inside this then, it is going to executed. then () take callback function inside them.

// catch() --- ****
// when promiseState is rejected then we have to catch this state with the help of catch() method.
// here whatever is in reject will print ( here it is Rejected message)
// p.catch((err)=>{
//     console.log(err);
// })




const p = new Promise((resolve,reject)=>{
    button.addEventListener('click',()=>{
        resolve('hello')
    })

    
    rejectedButton.addEventListener('click',()=>{
        reject('Rejected message')
    })

  
    })
    

// p.then(()=>{
//     console.log('then method is applied');
// })
// p.catch(()=>{
// console.log('promise state is catched');
// })

// or we can write this above code like this ------>>>>>

// p.then(()=>{
//     console.log('then method is applied');
// }).catch(()=>{
//     console.log('promise state is catched');
// })


// ---***** if we pass parameter in callback function of then () or catch() & do console inside these methods then this parameter is giving the value of promiseResult.

// means in simple words whatever we typed inside resolve( 'here') it is going to pass as a parameter in then() method.

// similarly whatever we write in reject('here'), it is going to pass in catch('here') method.


// in below code when promise state become fullfilled then the then () method is called, similar with cath().



// p.then((data)=>{
//     console.log(data);
// }).catch((data)=>{
//     console.log(data);
// })


// finally() method ---****
// now we discuss  finally() method in promise , it is called when promise is settled. means when promise is fullfied or rejected , it is called.
// finally() also take callback function as an argument.

// p.then((data)=>{
//     console.log(data);
// }).catch((data)=>{
//     console.log(data);
// }).finally(()=>{
//     console.log('finally-message');
// })

// part-1 --> in above section
// part-2 --> in notebook

// part-3

// p.then() p.catch both  returning a promise.

// const p4 = p.catch((err)=>{
//     console.log(err);
// })
// console.log(p4);

// so we can do p.then() of another p.then() b/c first p.then() is a promise & we can do p.then() on a promise.

// the then() method is returning a value --> if we don't write intentially return then it will return  undefined in promiseResult.

// if here p is pending in promiseState then p2 is also pending in promiseState.



// const p2 = p.then((data)=>{
//     console.log(data);
// })



// and if we write a value in return then it will return that value.

// const p2 = p.then(()=>{
//     return 25
// })



//  so we can do p.then() of another p.then() b/c first p.then() is a promise & we can do p.then() on a promise.

p.then((data)=>{
    console.log(data);                     // here data is hello, which is used in resolve
    return  114       
}).then((data)=>{
    console.log(data);         //  data is above promise return value, which is 114
    return 'Amit'
}).then((data)=>{
    console.log(data);              //data is Amit
    return 'Mohan'  
}).catch((err)=>{
    console.log(err);     //data is not Mohan , data is rejected message from  reject(rejected message)
})


// in above at last catch( ) method is used to catch any error.it is not returning Mohan.


// point---**## 
// that's how we can solve callback problem with the help of promise our code is grow vertically not horizontally.




