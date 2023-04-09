// new topic ----**** EP - 59 ---create element in js

// task -1 -----
// create a code which can print the pokemon link ( in html , in img tag) 100 times with 100 different charactor ( we can achieve this by increasing the no. in the link)

// first we clone the image element ----( below )

// const imageElement= document.querySelector('.image')
// const containerElement = document.querySelector('.container')


// for(let i =2; i<= 100; i++){
//     const  newImage = imageElement.cloneNode()
//     newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
//     containerElement.appendChild(newImage)
    
// }


// to create an element we use ------****** document.createElement()

// now we create an element --- element p

// const createElement = document.createElement('p')


// now we are adding text in this newelement---

// createElement.innerText = 'this is p tag'

// we can add class ---
// 1.
// createElement.classList.add('para')

// or 
// 2.
// createElement.setAttribute('class','para')


// we can add id ----

// 1.
// createElement.id = ('para-id')

// 2.
// createElement.setAttribute('id','para-id')




// now we append into the body --(b/c it is appended it is going at the last )

// document.body.appendChild(createElement)


// task-1 ***********----------

// now we create img element and then i give attribute to it and then i print all the images which i print above ---


// const containerElement = document.querySelector('.image-container1')


// const imageElement = document.createElement('img')
// const addingAttribute = imageElement.setAttribute('src','https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png')




// for(let i = 1;i<=100; i++){
//     const cloneElement = imageElement.cloneNode()
//     cloneElement.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`

//     containerElement.appendChild(cloneElement)

// }

// task -2 *********************------
// in the above code , i want to add numbers below to the image from 1 to 100.
// for hint i create a sample in html in 'image-container' class.
// i have to replicate this 100 time using for loop 


// create a div tag in which i through these images----

const divElement = document.createElement('div')


// giving div a class -----

divElement.classList.add('image-container2')

// append this new div (divElement) into div (.container) ----

// in the below line we select main div ( .container)

const divContainer = document.querySelector('.container')

// now we are appending ----

divContainer.appendChild(divElement)


// created  image element and adding attribute in it.

const imageElement = document.createElement('img')
const addingAttribute = imageElement.setAttribute('src','https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png')

// create p tag 
const pElement = document.createElement('p')






for(let i = 1;i<=100; i++){
    const cloneElement = imageElement.cloneNode()
    cloneElement.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`

    divElement.appendChild(cloneElement)

    const cloneOfp = pElement.cloneNode()
        cloneOfp.innerText= `${i}`
    divElement.appendChild(cloneOfp)

}


// new topic ----------***********EP- 60 how to remove element using js
// before ES6 we use .removeChild(img)
// this above is applyed on parent element.

// const img1 =  document.querySelector("body > div > div.image-container2 > img:nth-child(9)")
// img1.parentElement.removeChild(img1)


// after ES6 we use .remove(img)
const img2 = document.querySelector("body > div > div.image-container2 > img:nth-child(1)")
img2.remove()

// important note ---*** don't remove element by storing in an element. b/c it is stored in memory , when we append this it is again appear in the code.

