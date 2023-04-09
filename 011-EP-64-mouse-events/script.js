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
