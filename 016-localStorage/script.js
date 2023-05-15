// localStorage -----

// localStorage is the feature of modern web browser which allow websites to store data on user's computer or device with the help of javascript.

// it is stored in key-value pair and if we close the window, browser or even close the computer the data stored in localstorage is safe, we can access it anytime we want until we are not intensely modifying it.

// localStorage object is present in window object , we can access it by typing window.localStorage or directly typing localStorage 



// task -1 --***
// create an input box & a h3 tag , when we type in input box the data should update in h3 tag & in localStorage in real time.

// selection the elements-

// const selectInputBox = document.querySelector('.input')
// const selectSpan = document.querySelector('.span')


// selectInputBox.addEventListener('input',(e)=>{
//     localStorage.myName = e.target.value
//     selectSpan.innerText = localStorage.myName
    
// })
// or ---****
// this above method is not recommended  

// we use setItem() -> to set the value in localStorage 
// we use getItem() -> to get the value from localStorage

// we do this above operation with the help of getItem() & setItem() right below -->>

// const selectInputBox = document.querySelector('.input')
// const selectSpan = document.querySelector('.span')

// when we refresh the page then the data inside the input box is deleted & hence the data in h3 tag is also deleted so this below line is preventing the data to delete.

// selectSpan.innerText = localStorage.getItem('myName')

// selectInputBox.addEventListener('input',(e)=>{
//      localStorage.setItem('myName',e.target.value)
//     selectSpan.innerText = localStorage.getItem('myName')
    
// })


// important points ----****

// 1. difference b/t getitem() &  localStorage.myName is that if we do  getItem('age')( here age is not saved in localStorage as a key) then it is giving  null whereas localStorage.Age is giving undefined.

// 2. localStorage is not working in incognito mode.

// 3. in localStorage whatever we save it is going to save in value section ( key-value) & here only string is saved. if we want to save an object then we have to convert into a string -->>

// A. with the help of JSON.stringify() .
// B. & if we want to extract data (object) from localStorage then we have to convert this string (b/c here only string is saved) into normal object with the help of JSON.parse()

// 4. localStorage is only accessible on all the pages of that website, one  website can't access another website localStorage, although all the different pages of the website can access the localStorage.


// task-2 add age also along with myName into localStorage -------****

// const selectInputBox = document.querySelector('.input')
// const selectSpan = document.querySelector('.span')
// const selectInputAge = document.querySelector('.age-input')
// const selectAgeSpan = document.querySelector('.age-span')

// selectSpan.innerText = localStorage.getItem('myName')

// selectInputBox.addEventListener('input',(e)=>{
//     localStorage.setItem('myName',e.target.value)
// selectSpan.innerText = localStorage.getItem('myName')

// })

// selectAgeSpan.innerText =  localStorage.getItem('Age')

// selectInputAge.addEventListener('input',(e)=>{
//     localStorage.setItem('Age',e.target.value)
//     selectAgeSpan.innerText =  localStorage.getItem('Age')

// })



// task -3 create an object and place name & age inside this object( here name & age is taken from user in input boxes ) & then put this object into localStorage.


const selectInputBox = document.querySelector('.input')
const selectInputSpan = document.querySelector('.span')
const selectInputAge = document.querySelector('.age-input')
const selectAgeSpan = document.querySelector('.age-span')

// const objectData = {
//     name: " ",
//     age : ' ',

// }


// when this below line is writen then the above exmpty object must be deleted , here i am not deleting b/c of my future reference ( in future i can understand this code)


// this below line check if localData is present in localStorage then it take first parameter and if not present then it take second parameter

const objectData = JSON.parse(localStorage.getItem('localData')) || {}

if(objectData.name){
    selectInputSpan.innerText = objectData.name
}
if(objectData.age){
    selectAgeSpan.innerText = objectData.age
}
selectInputBox.addEventListener('input',(e)=>{
    objectData.name = e.target.value
    localStorage.setItem('localData',JSON.stringify( objectData))
    selectInputSpan.innerText = e.target.value

})

selectInputAge.addEventListener('input',(e)=>{
    objectData.age = e.target.value
    localStorage.setItem('localData', JSON.stringify( objectData))
    selectAgeSpan.innerText = e.target.value
    
})

// with the above code we can write simuntaneusly in input box and in below tag (h3) but when we refresh it we can't keep the data in h3 tags.
// so to fetch the data from localStorage & put inside the h3  tag & even if refresh the page data will not go away b/c it is fetching from localStorage , we use this below code

// selectInputSpan.innerText = objectData.name
// selectAgeSpan.innerText = objectData.age

// if we delete the localStorage then the data is not accessible in h3 tags so they give undefined.
// to solve this we have to give if() conditions
// if condition is applyed in above of the code.


// delete the localStorage data----*****

// to delete all localStorage data we use localStorage.clear() 
// to delete one key-value pair , we use localStorage.removeItem('itemName')
