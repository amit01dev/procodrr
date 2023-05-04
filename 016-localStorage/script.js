const selectSpan = document.querySelector('.name')
const selectInputBox = document.querySelector('.inputBox')



selectInputBox.addEventListener('input',(e) => {
    
    localStorage.name = e.target.value

    selectSpan.innerText = localStorage.name

})


