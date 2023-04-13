// event bubbling and event capturing --------********EP-65 

// selecting element -----
const selectGreen = document.querySelector('.green')
const selectPink = document.querySelector('.pink')
const selectBlue = document.querySelector('.blue')


// event bubbling ---

//understant with a condition----
// in parent we added three children which is inside eachother(children inside children) and apply event listener on parent ,  when we click on parent a event is fired b/c we apply it , but when we click on the first child this event is also fired, when we click on second child which is inside the first child , this event is also fired ... similar with thrid child.


// this phenomena is known as event bubbling ... it is always bubbling inside out and it go till window object.

// this bubble is expending inside out --------- 




// window.addEventListener('click',()=>{
//     console.log('event listener on window');

// })


// document.addEventListener('click',()=>{
//     console.log('event listener on document');

// })


// document.body.addEventListener('click',()=>{
//     console.log('event listener on body');

// })


// in below we apply event listener on parent (green) but when we click on  the child event fire

// selectGreen.addEventListener('click',()=>{
//     console.log('event listener on green');

// })


// when we apply on pink and click on pink then first pink event lister happend then green happend.

// selectPink.addEventListener('click',()=>{
//     console.log('event listener on pink');

// })


// point to be noted ---they both are going till window means it is going to html -> then going to document -> then window object. 


// selectBlue.addEventListener('click',()=>{
//     console.log('event listener on blue');

// })


// i write  event lister on body -> document -> window on the above section 
// b/c they are also parent of these green , pink .... so they can also hear the event of their child.

// bydefault nature of event bubbling is that it moves to the parent

// ###*******----------want to stop the event bubbling on a element then use e.stopPropagation()


// window.addEventListener('click',()=>{
//     console.log('event listener on window');

// })


// document.addEventListener('click',()=>{
//     console.log('event listener on document');

// })


// document.body.addEventListener('click',()=>{
//     console.log('event listener on body');

// })




// selectGreen.addEventListener('click',(e)=>{
//     e.stopPropagation()
//     console.log('event listener on green');

// })





// selectPink.addEventListener('click',()=>{
//     console.log('event listener on pink');

// })


// selectBlue.addEventListener('click',()=>{
//     console.log('event listener on blue');

// })

// event capturing -----*****
// want to capture an event ---


// window.addEventListener('click',()=>{

//     console.log('event listener on window');

// },true)


// document.addEventListener('click',(e)=>{
//     // e.stopPropagation()
//     console.log('event listener on document');

// },true)


// document.body.addEventListener('click',()=>{
//     console.log('event listener on body');

// },true)




// selectGreen.addEventListener('click',(e)=>{
//     console.log('event listener on green');

// },true)





// selectPink.addEventListener('click',()=>{
//     console.log('event listener on pink');

// },true)


// selectBlue.addEventListener('click',()=>{
//     console.log('event listener on blue');

// },true)

// in the above code event is captureing outside to inside we can stop it at any element by giving e.stopPropagation()

// ******* if we want to capture only once even if we clicking so many times then we give this object on third argument of addeventlistener 

// this object is ---- {once:true}

// code is below------------







selectBlue.addEventListener('click',()=>{
    console.log('event listener on blue');

},{once : true})

// in this above code event is capture only once even if we clicked multiple times.

