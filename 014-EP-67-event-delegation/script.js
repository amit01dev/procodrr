// select container and card 
const selectContainer = document.querySelector('.container')
const selectCard = document.querySelector('.card')
const selectAllCard = document.querySelectorAll('.card')

// case -1
// when click on + card it should create a new card.

// let count = 1
// selectCard.addEventListener('click', () => {
//     let newCard = document.createElement('div')
//     newCard.classList.toggle('card')
//     newCard.innerText = count++
//     selectContainer.append(newCard)

// })

// case -2
// now i want to delete a card when i click on that card.
// i can select all the card (selectAllCard) and apply  click event in eventlistner & write a function inside eventlistner and remove all the element which have card as a class.

// let count = 1
// selectCard.addEventListener('click', () => {
//     let newCard = document.createElement('div')
//     newCard.classList.toggle('card')
//     newCard.innerText = count++

//     newCard.addEventListener('click',()=>{
//         newCard.remove()
        
//     })
//     selectContainer.append(newCard)
    
// })


// we can do this above but when we create lots of newCard then each card having one eventlister on them, which makes page slow and it is not efficent.

// ---------****** now event delegation comes into picture and it is not a dedicated topic which we can found on MDN or other website but it is more like a efficient way to do the above work.


// instead of giving on each child we give on container.

let count = 1
selectCard.addEventListener('click', () => {
    let newCard = document.createElement('div')
    newCard.classList.toggle('card')
    newCard.innerText = count++
    selectContainer.append(newCard)

})


// when we apply evenlister on parent it means it is listen click event if event is happened on their own or in their child , let's understand event bubbling --->> when a click event or any- other event  is fired inside a child then it is spread like a bubble and it go till global from all his parent.

// if we apply event lister in between it's origin to global then we can listen these event.

// so here we are listening event on parent but we can track it where the event is actually fired with the help of e.target.this below code is doing that.

// selectContainer.addEventListener('click', (e)=>{
//     console.log(e.target);
// })

// now we know on which child event is fired we can delete it with the help of e.target.remove()

// selectContainer.addEventListener('click', (e)=>{
//     e.target.remove()
// })

// in the above code one problem is there when we click on + sign on a card. this +sign card is also inside the container and this above eventlister is appliced on this card and this + sign card will delete but it is created 1 sign card b/c before this above code is running.

// solution of this is that we can move this child card from container.


// ----***** in above one problem is also occur when we click on blank space of container then b/c we apply this event lister it listen the event which is fired on container and e.target is saying that container is the space where the event is fired so remove it , 

// so it remove the container .

// solution -----
// we apply a if property.

selectContainer.addEventListener('click', (e)=>{
// if e.target is not container then go e.target.remove() , and if e.target === container then it is not going inside if and not execute it .

   if(e.target !== selectContainer){
    e.target.remove()
   }
})


