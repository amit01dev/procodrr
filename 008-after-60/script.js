// new topic -----Event listner --***** EP - 61 
// what is event --- when user do any activity on the browser to interact with borwser it is known as a event. 
// we can listen these events and apply something on these events like --- click ..etc

// method -1 
// onclick --->>>

// this is basic method we apply it as an attribute in html element.
// i applyed on html which is connected to this js file.

// mehtod -1.1
// ondblclick ---->>>

// when we do double click then this apply  

// important point -------####****

// they both above is converting into function whatever we do inside this -------- 
//  we can see this by visiting  ---->>>> selecting a element and then go to property -> go onclick -> here we can find that what ever we pass inside this it is onclick or ondblclick it is store in a function form.

// if we give function inside this onclick or ondblclick then it not creating another function it is store this function inside onclick property .


// method -2

// const h1Element = document.querySelector('h1')


// function sayHi(){
//     console.log('hi this text is coming from js');
    
// }

// h1Element.onclick = sayHi

// method -3 ******----------
// addEventListner('event', action perform)

// it is taking first argument as what type of event you want to perform and the second argument is taking what action you want to perform.

// task-1 ****
// apply click event on h1 tag using addEventListener

// h1Element.addEventListener('click', sayHi)

// h1Element.addEventListener('click', "console.log('hey")

// in above line in second argument it is not taking any other thing except a function , it is only taking function , we can pass anonymous function.


// task -2 ********-----------
// print ' hey' when click on h3 using addEventListener and pass a function in second argument.

// const h3Element = document.querySelector('h3')
// h3Element.addEventListener('click', function(){
//     console.log('hey');

// })



// task ----3 *******
// when click on the card it should print "clicked on card"

// const selectCard = document.querySelector('.card')

// selectCard.addEventListener('click', () => { console.log('clicked on card');})


// task -----4********
// when click on the card it create a new card next to its own.

// create an element (div) and apply attribute

// const newElement = document.createElement('div')
// newElement.setAttribute('class','card')

// clone this element ---

// const cloneElement = newElement.cloneNode()

// cloneElement.innerText = '2'


// select element on which we want to apply eventlistener

// const selectCard = document.querySelector('.card')

// we select the container in which we append this --

// const selectContainer = document.querySelector('.container')


// selectCard.addEventListener('click', ()=> {
//     selectContainer.appendChild(cloneElement)

// })

// above is my method -------*****( in my method when click on card it only add once )
// below is the procodrr method --------(which is short and sweet) ( in this method when i click on card it add every time i click it on 'click' )

// const selectContainer = document.querySelector('.container')
// const selectCard = document.querySelector('.card')

// selectCard.addEventListener('click', ()=> {
//     const newDiv = document.createElement('div')
//     newDiv.setAttribute('class','card')
//     selectContainer.append(newDiv)

// })

// task -----5*********
// when we click on the card it create a new card ( the above code ) but i want that when i click on card  it create a card with a number in it and number should increase one by one 


const selectContainer = document.querySelector('.container')
const selectCard = document.querySelector('.card')

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


// important doubt ------------***********######

// important #### in the above code a doubt come to my mind that why count++ value is accessible in count variable , count++ is in the block scope then why it is access outside the block .

// and chatgpt is giving ans -- and it is because count variable is define in global scope that's why it is access of anywhere in the code.

// exact ans is below ------********

// The count variable is declared outside of the event listener function, which means it has a scope that encompasses the entire code block. Therefore, each time the event listener function is executed, the count++ statement will execute and increase the value of count by 1.

// The fact that the count++ statement is inside the block of the event listener function does not affect its ability to modify the count variable because it is declared in a higher scope.

// In summary, the value of count will increase each time the event listener function is executed because the count++ statement is in a scope that includes the entire code block.