// mouse event 
// 1. onclick 
// 2. ondblclick
// 3. mousedown
// 4. mouseup
// 5.mouseenter
// 6.mouseleave
// 7.mousemove
// 8.mouseout
// 9.mouseover
// 10 wheel 
// 11.scroll
// 12.touchstart
// 13.touchend
// 14.touchmove
// 15.drag
// 16.pointer - 
//    a. pointermove
//    b. pointerenter
//    c. pointerout


// 
// 1. onclick ----

const selectContainer = document.querySelector('.container')
const selectCard = document.querySelector('.card')

let count =1


// selectCard.addEventListener('click', ()=> {
//     const newDiv = document.createElement('div')
//     newDiv.setAttribute('class','card')
//     newDiv.innerText = count
//     count++
//     // or 
//     // newDiv.innerText = count++
//     selectContainer.append(newDiv)

// })

// 2. dblclick-----

// selectCard.addEventListener('dblclick', ()=> {
//     const newDiv = document.createElement('div')
//     newDiv.setAttribute('class','card')
//     newDiv.innerText = count
//     count++
//     // or 
//     // newDiv.innerText = count++
//     selectContainer.append(newDiv)

// })


// 3. mousedown --------

// selectCard.addEventListener('mousedown', ()=> {
//     const newDiv = document.createElement('div')
//     newDiv.setAttribute('class','card')
//     newDiv.innerText = count
//     count++
//     // or 
//     // newDiv.innerText = count++
//     selectContainer.append(newDiv)

// })

// in mousedown when we click on focus element then it fires it doesn't wait to complete the click.
// click complete means when we click and relese then it is called click completed . 

// here in mousedown it is not wait complete click , when we click it , it fire the event and then we release the mouse. 

// but in click event , event is fire when click is completed.

// 4. mouseup -------

// selectCard.addEventListener('mouseup', ()=> {
//     const newDiv = document.createElement('div')
//     newDiv.setAttribute('class','card')
//     newDiv.innerText = count
//     count++
//     // or 
//     // newDiv.innerText = count++
//     selectContainer.append(newDiv)

// })


// in mouseup when we click it is  not fired , but when we release the click it is fired.  

// important ----###******
// difference between click vs mousedown vs mouseup 
// click event is fired when a click is completed ( click down and release the click)
// mousedown event is fired when we press the click , it is not waiting to complete the release.
// mouseup event is fired when we press release the click .

// 5. mouseenter ------

// selectCard.addEventListener('mouseenter', ()=> {
//     const newDiv = document.createElement('div')
//     newDiv.setAttribute('class','card')
//     newDiv.innerText = count
//     count++
//     // or 
//     // newDiv.innerText = count++
//     selectContainer.append(newDiv)

// })

// when we enter our curser in the selected element then the event is fired, in the above code.


// 6. mouseleave ------

// selectCard.addEventListener('mouseleave', ()=> {
//     const newDiv = document.createElement('div')
//     newDiv.setAttribute('class','card')
//     newDiv.innerText = count
//     count++
//     // or 
//     // newDiv.innerText = count++
//     selectContainer.append(newDiv)

// })

// in mouseleave when we enter into selected element and when we leave the element then this event is fired.

// 7. mousemove ------

// selectCard.addEventListener('mousemove', ()=> {
//     const newDiv = document.createElement('div')
//     newDiv.setAttribute('class','card')
//     newDiv.innerText = count
//     count++
//     // or 
//     // newDiv.innerText = count++
//     selectContainer.append(newDiv)

// })

// when we enter the selected element and whenever we move inside this selected element teritory it is firing the event.


// 8. mouseout -------

// selectCard.addEventListener('mouseout', ()=> {
//     const newDiv = document.createElement('div')
//     newDiv.setAttribute('class','card')
//     newDiv.innerText = count
//     count++
//     // or 
//     // newDiv.innerText = count++
//     selectContainer.append(newDiv)

// })


// it is same as mouseleave , when we enter a selected element teritory and when we leave a event is fired.

// 9. mouseover --------

// it is same as mouseenter but only difference is that in mouseover if selected element have a children and we enter the element a event is fired and when enter child element a event is fired and when we leave child and again enter the parent element a event is fired.

// selectCard.addEventListener('mouseover', ()=> {
//     const newDiv = document.createElement('div')
//     newDiv.setAttribute('class','card')
//     newDiv.innerText = count
//     count++
//     // or 
//     // newDiv.innerText = count++
//     selectContainer.append(newDiv)

// })

// 10. wheel event ---------

// selectCard.addEventListener('wheel', ()=> {
//     const newDiv = document.createElement('div')
//     newDiv.setAttribute('class','card')
//     newDiv.innerText = count
//     count++
//     // or 
//     // newDiv.innerText = count++
//     selectContainer.append(newDiv)

// })

// in this event when we scroll the wheel inside the seletected element then a event is fired , and if we scroll the wheel multiple times then multiple events are fired.


// 11. scroll event ----------

// in this event --- if this event is applied on an element and if this element is scrolable then this event is fired . yes to be fired this event we have to use scroll ball in the mouse. 

// but first condition is that this element should be scrolable, for example if we apply on document then the page have enough content so that we can scroll and if we scroll then this event is fired.

// and if document page is not having enough content so that we can't scroll it , in this case this event is not firing.


// document.addEventListener('scroll', (e)=> {
//     console.log(e);
    // const newDiv = document.createElement('div')
    // newDiv.setAttribute('class','card')
    // newDiv.innerText = count
    // count++
    // or 
    // newDiv.innerText = count++
    // selectContainer.append(newDiv)

// })





// ####***** important ----------
// wheel event vs scroll event 

// wheel event is applied on an element and when go inside this element and scroll then this event is fired.
// in scroll event   event to be  fired the element should have enough space to be scrolled , and then if we scrolled then this event is fired.


// 12. touchstart---------

// it is fire event when we touch the element. it is used in mobile devices.

// when we click it is firing a event. it is not waiting to complete the click means when we remove the touch it is not waiting. when we touch the element it fire the event.

// selectCard.addEventListener('touchstart', ()=> {
//     const newDiv = document.createElement('div')
//     newDiv.setAttribute('class','card')
//     newDiv.innerText = count
//     count++
//     // or 
//     // newDiv.innerText = count++
//     selectContainer.append(newDiv)

// })


// 13. touchend ----------

// when we touch an element it is not firing an event, when we leave that element then it is firing an event.
// although this below code is not working , i don't understand why ??#### *** , i just keep moving.


// selectCard.addEventListener('touchend', (e)=> {
//     console.log(e);
//     // const newDiv = document.createElement('div')
//     // newDiv.setAttribute('class','card')
//     // newDiv.innerText = count
//     // count++
//     // or 
//     // newDiv.innerText = count++
//     // selectContainer.append(newDiv)

// })


// 14. touchmove ------

// in this when we touch selected element and without releasing the touch we move the touch inside this selected element then this event is firing. 

// selectCard.addEventListener('touchmove', (e)=> {
//         console.log(e);
//         const newDiv = document.createElement('div')
//         newDiv.setAttribute('class','card')
//         newDiv.innerText = count
//         count++
//         // or
//         newDiv.innerText = count++
//         selectContainer.append(newDiv)
    
//     })


// 15. drag --------

// const selectH1 = document.querySelector('h1')

// selectH1.addEventListener('drag', ()=> {
//     const newDiv = document.createElement('div')
//     newDiv.setAttribute('class','card')
//     newDiv.innerText = count
//     count++
//     // or 
//     // newDiv.innerText = count++
//     selectContainer.append(newDiv)

// })

// this drag event is fired when we draged a element.

// this above code is not working b/c h1 element is not dragable , we have to make h1 element dragable by giving 'draggable= "ture" ' attribute in html.

// this drag event is not fire in mobile devices, it is only fired on desktop.

// when we drag a element , this event is firing , means when we pick the element and move it so when it change its position a event is fired.


// 16. pointer ------
// pointer is combination of mouse and touch b/c in mouseopen or mouseout etc ... ( in short in mouse ) it is only aplicable on desktop and in touch , it is also applicable on only touch screen. pointer is applicable on both . 

// a. pointermove -------

// when we enter selected element and move inside this element teritory, then an event is fired.
// it is applicable on both mouse and touch.

//  selectCard.addEventListener('pointermove', ()=> {
//         const newDiv = document.createElement('div')
//         newDiv.setAttribute('class','card')
//         newDiv.innerText = count
//         count++
//         // or 
//         // newDiv.innerText = count++
//         selectContainer.append(newDiv)
    
//     })
    

