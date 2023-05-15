// synchronous & asynchronous code --

// synchronous code is the code which is running line by line or doesn't depent on external factor such as where time gap is required.
// synchronous code is handle by core js and it is running line by line.

// asynchronous code is the code which depend on time gap and it is not handled by core js it is handled by web API which is a tool of modern browsers.



// two ways to stop the js thread at a thread---

// 1. using alert()

// 2. using loop 

// const startTime = Date.now()
// let currentTime = startTime

// while(startTime + 4000 > currentTime){
//     currentTime = Date.now()
//     console.log(Date.now());

// }

// *** when we send request  and received data from outside world( use API ) then this request is handled by web API  and it consider as asynchornous activity ( or it is fall under asynchronous code)
// by default it is considerd asynchronous activity. 

// this above phenomena is known as AJAX 
// AJAX means asynchronous-javascript and XML
// although XML is not used today to send and recieved data from outer world , today we use JSON.
// it is the old convention that's why we use AJAX as a name.


// pros of AJAX --

// we can get data from different places into our webpage without reloading the page.


// other talks---
// we can do others things like selecting the text or clicking on the different buttons while the request is sending b/c it is sending by web API. so the js can do next thread b/c it is not handled by js main thread.

// below is the code of the above theory.

const button = document.querySelector('button')

const xml =  new XMLHttpRequest()

button.addEventListener('click',()=>{
    console.log(xml);
    console.log(xml.response)
// xml.open('GET','https://6wrlmkp9u2.execute-api.us-east-1.amazonaws.com/?sleep=5000')
xml.open('GET','https://6wrlmkp9u2.execute-api.us-east-1.amazonaws.com/?sleep=5000',false)

xml.send()

xml.addEventListener('load',()=>{
  console.log(xml)
  console.log(xml.response)

})
})


// the above code is example of asynchronous-js  or AJAX.
// if we want to run this code synchronous or synchronously then we have to put false in the thrid argument.
// xml.open('GET','https://6wrlmkp9u2.execute-api.us-east-1.amazonaws.com/?sleep=5000', false)
// it is not adviced to do this b/c core js is stuck on this thread.



