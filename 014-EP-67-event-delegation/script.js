// select container and card 
const selectContainer = document.querySelector('.container')
const selectCard = document.querySelector('.card')
const selectAllCard = document.querySelectorAll('.card')



// create a new element & give a class ---

// const newCard = document.createElement('div')
// newCard.setAttribute('class','card')



// append this new element into container

//  selectContainer.append(newCard)



let count =1;
// now we apply event listener ------

// selectCard.addEventListener('click',()=>{
//     const newCard = document.createElement('div')
// newCard.setAttribute('class','card')
// newCard.innerText = count++
// selectContainer.append(newCard)

// })



// event delegation --------*********

// before understaind this complete this task ---1
// when i click on  any card except one which is resposible for creating the card, it will delete the card.



selectCard.addEventListener('click',()=>{
    const newCard = document.createElement('div')
newCard.setAttribute('class','card')
newCard.innerText = count++
selectContainer.append(newCard)

})


// in this below code card is giving each value in selectAllCard means it is giving one by one card.
// this below is not working 

selectAllCard.forEach((card)=>{
    console.log(card);
    card.addEventListener('click',()=>{
        card.remove()

    })
    

})