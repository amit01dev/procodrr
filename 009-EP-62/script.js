const selectUsername = document.querySelector('#username')
// selectUsername.addEventListener('click',()=>{console.log('clicked on form');})

// this above line is click event ---****

// event -1 --> onclick event ----****
// event -2 --> ondblclick event---****
// event -3 input event ---******
// and the below line is input event ---****

// when we type something inside the input box then this event is trigger.

// selectUsername.addEventListener('input',()=>{console.log('input event fired');})

// when we write a word inside the input box this event is fired.
// point to be noted ---- every world even a space cause a event to fire.

// important note ---**** 
//this eventlistener call the function which we pass in it's second argument and also it pass a object called 'event object' we can access this object by giving anything in the function () inside this (). 

// whatever we give inside this ( ) , if we print this word then it give the object in which it has lots of values.


// selectUsername.addEventListener('input',(afjfjf)=>{
//     console.log(afjfjf);
//     console.log('input event fired');})


// use of this object which i discss above---

// if we want to access the value which is printing in the input box then we use this object ( event object ) and access the value. 
// inside this object we go to target -> target tells on which element is targing eventlistener, inside this target we go to value -> whatever we type inside the input box , it go in this value section.



// selectUsername.addEventListener('input',(e)=>{
//     console.log(e.target.value);
//     console.log('input event fired');})

// with the help of this above code we can print each word which is typed in the input box.

// task -1 ---------***********

// we can print this word into a new paragraph element -> means when i type a word in input box it automatically print into a new p tag which is just below 


// const selectP = document.querySelector('p')

// selectUsername.addEventListener('input',(e)=>{
//     selectP.innerText = e.target.value

// })


// event -4 -------******* change event 

// when we change something inside the input box ( element )  then it is fired.


// const selectP = document.querySelector('p')

// selectUsername.addEventListener('change',(e)=>{
//     console.log(e);

// })



// event -5 -------******** focus event 

// when we focus or click on the input (element ) then it triggers.in other words when we click on the input box then it triggers.

// const selectP = document.querySelector('p')

// selectUsername.addEventListener('focus',(e)=>{

//     console.log(e);

// })

// event -6 ----------********* blur event 

// when we click out side of the input box (element ) then it is trigggers

// const selectP = document.querySelector('p')

// selectUsername.addEventListener('blur',(e)=>{
//     console.log(e);

// })

// event -7 ------******** submit event ----
// this event is applied on form element , when we submit form then this event is triggers.

// const formElement = document.querySelector('form')
// const pElement = document.querySelector('p')


// formElement.addEventListener('submit',(e)=> {
//     console.log(e);
// })

// inthis above code when we submit the form browser take us on different page (b/c when form submited it create a link and redirect us on that link ) so we can't see the console value but this event is happening , to see this event we go to console-> setting and select preserve log.

// in that way we preseve the log of last page and see the event object.

// -----***** and even we want to see the event object then we use a event object method which is preventdeafult() 
// it prevent form to submit and hence the page is not loaded or redirected.

// code is below --------

// const formElement = document.querySelector('form')
// const pElement = document.querySelector('p')


// formElement.addEventListener('submit',(e)=> {
//     e.preventDefault()
    
//     console.log(e);
// })


// important ------*******
// when we apply click event  on form then its target may be changed based on where it is clicked. 

// const formElement = document.querySelector('form')

// formElement.addEventListener('click',(e)=> {
//     console.log(e.target);


// })

// in this above code when we click on name then target value is input type -text ( name ) and when we click on email section its value is email. 
// so target changed based on where we click in the form. but event is fired on form.


// if we want  not to change the target then we use this below ---

const formElement = document.querySelector('form')

formElement.addEventListener('click',(e)=> {
    console.log(e.currentTarget);
})

