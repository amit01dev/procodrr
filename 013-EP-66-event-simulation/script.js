// new topic event simulation ------
// event simulation is not a topic in mdn or any official document , i just put some functionality into this event simulation category b/c it is act like simulation.

// 1. click event simulatator ---***

// selecting element---

const selectContainer = document.querySelector('.container')
const selectCard = document.querySelector('.card')
const selectInput = document.querySelector('.inputClass')
const selectForm = document.querySelector('form')


let count =1

selectCard.addEventListener('click', ()=> {
    const newDiv = document.createElement('div')
    newDiv.setAttribute('class','card')
    newDiv.innerText = count
    count++
    // or 
    // newDiv.innerText = count++
    selectContainer.append(newDiv)

})


// if i want to click on the card with the help of js then we use this below line

// selectCard.click()

// if i want to print 1000 cards with the help of this then , i apply for loop 

// for(let i =1;i<=1000;i++){
// selectCard.click()

// }

// if i want to print cards infinite times then i use --- this below code ----****
// we use setInterval() 

// setInterval(()=> { selectCard.click()})


// if we want to print card and want to see them priting then we set a time in this above code ----***


// setInterval(()=> { selectCard.click()}, 1000)


// and if we want to stop at 1000 then we use clearInterval and give id of this interval ( each setInterval is giving a id ) , code is below ----------


// const intervalId = setInterval(()=> {
//     if(count>999){
//         clearInterval(intervalId)
//     }
//     selectCard.click()}, 10)


// 2. input related event simulator ---------*****

// a. focus
// b. blur
// c.submit
// d.reset



// a. focus -----
// selectInput.focus()

// this above line is focus on the input box 

// if we want to see the focusing happening then we apply setTimeout()

// setTimeout(()=>{
// selectInput.focus()
    
// }, 2000)


// b. blur ---------
// selectInput.blur()


// we can also apply settimeout on blur---------

// setTimeout(()=>{
// selectInput.blur()
    
// }, 2000)



// c. submit----*******

// we can submit form automatically with the help of js , we have to select form element with the help of queryselector

// selectForm.submit()


// we can set a time using settimeout()

// setTimeout(() => {
//     selectForm.submit()
// }, 2000);



// d. reset----------*****

    // we can reset form by using a attribute in button element ----    <button type="reset">click me</button>

// so when we fill input form and click on button then it is reset it b/c of this above code .

// we  can do this with the help of js 

// selectForm.reset()





