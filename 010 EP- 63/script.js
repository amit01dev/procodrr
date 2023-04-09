// new topic ------*****EP -63 -----keybord events

// in keyboard events --- 
// three events are present ---
// 1. keypress event
// 2. keyup event
// 3. keydown event
 
// keyboard event is only applicable when element is in focus  

const selectH1 = document.querySelector('h1')
// by default it is not in focus to be in focus we use an attribute in html element and this attribute is --->>> 'Tabindex '

// so we use Tabindex in the h1 element with the help of this attribute --- when we press tab key it will focus to the h1 element and if multiple element is present in the html then it when we click tab key the focus will move one element to another.


// 1.keypress event
// in this event special keys are not firing events (ex alt, shift,caps lock etc..)

// selectH1.addEventListener('keypress',(e)=> {
//     // console.log(e.key);
//     console.log(e.code);


// })


// generally we don't use on h1 , we use on window object --- means on the browse view - port area


//     window.addEventListener('keypress',(e)=> {
//     // console.log(e.key);
//     console.log(e.code);


// })
// in this above code if we want to know which key value is pressed then we use e.key ex. - if i press small 'a' then it give -->> a , if i press big 'A' then it will give --->>> A 

// in this above code if i want to print which key is pressed then --->> e.code is used. ex. - if i press a key then it print -->>> keyA ( it doen't matter if caps lock is on or off) 

// 2. keyup event
// in this special keys are also firing the events

// window.addEventListener('keyup',(e)=> {
//     console.log(e.key);
//     // console.log(e.code);

// })


// in this when we press the key it not firing the event , it is firing when we release the press key then it fires the event. that's why it is called keyup event.

// 3. keydown event 

// in this special keys are also firing the events

window.addEventListener('keydown',(e)=> {
    console.log(e.key);
    // console.log(e.code);

})

// when we press the key it is fire .
