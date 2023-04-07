// new topic ----EP - 58 ********** append and appendChild

// mehthod -1 cut the element and paste inside an element.


const selecth1 = document.querySelector('h1')
const selectContainer = document.querySelector('.container')
const selectCard = document.querySelector('.card')

// now we send this h1(selecth1) into contanier


// selectContainer.appendChild(selecth1)

// this above lines cut the element and paste it . 
// but we can copy an element and paste it by using cloneNode() ---applying on below lines

// const normalClone = selecth1.cloneNode()

// normalClone is only clone the element not its text or content, but its  attribute  will coped.


// const deepClone = selecth1.cloneNode(true)

// this above is deep clone , it clone complete element with content.


// method -2 copy an  element and paste it inside an element.

//  selectContainer.appendChild(selecth1.cloneNode(true))

// this above line will clone h1 element ( copy and paste ) inside container element.

// we  are appending card inside container ( this card already inside container)

// selectContainer.appendChild(selectCard.cloneNode(true))
// this above line create a card with content.



// task --1********-----------------
// create 100 cards with numbers which are increasing --- till 100 

// const newCard = selectContainer.appendChild(selectCard.cloneNode())
//  

for(let i =2; i<=100;i++){
    // console.log(i);
    const newCard = selectCard.cloneNode()
    newCard.innerText = i

    selectContainer.appendChild(newCard)

}


// important ### we can't append any parent inside an children element..******------------


