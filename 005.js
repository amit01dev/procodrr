// new EP - 50 BOM (browser object model)-----------**************


// location.reload()

// location.href = 'index.html'
// location.href = 'https://google.com'


// new EP ---- 51 DOM ( document object model) --------*********

// DOM manipulation --------*****



// document.body.children[1].innerText = 'this is added through console.'

// const variable = document.getElementsByTagName('p')
// const variable1 = document.getElementsByClassName('tags')
// const variable2 = document.getElementById('h3')

// querey selector ----*****

// const new1 = document.querySelector('.tags')
// const new2 = document.querySelector('#para')
// const new3 = document.querySelector('p')

// const img1 = document.querySelector()
// query selectorAll ------******

// const new4 = document.querySelectorAll('.tags')
// const new5 = document.querySelectorAll('#para')
// const new6 = document.querySelectorAll('p')

// we can select all the attribute in this 

// const new7 = document.querySelectorAll('')

// we can do select nested elements also -----------*********

// const nested = document.querySelector('ul')
// const deepNested = document.querySelector('ul li')

// this above line give first li in ul , if i want all li in ul then ---

// const allNested = document.querySelectorAll('ul li')

// this above is scanning all ul and inside this all ui it is giving all li means we have 2 ui and each one have 4 li then it give 8 li.

// if i want to print all the li of first ul then , this below line ----

// const firstNested = document.querySelector('ul')
// const finalNested = firstNested.querySelectorAll('li')

// if i want to select i tag which is inside --->>>.  ul -> li -> p -> i
// very important --------************

// go to console = elements = select i tag and right click then click on copy and then = select js copy path.





// task -1 ----- ****** change image with the help of dom

// method -1 ---*****

// const changeImage = document.querySelector('#image0')
// changeImage.src = 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'

// const changeImage1 = document.querySelector('#image1')
// changeImage1.src = 'https://www.shutterstock.com/image-photo/ancient-temple-ruins-gadi-sagar-260nw-786126286.jpg'

// const changeImage2 = document.querySelector('#image2')
// changeImage2.src = 'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg'



// method -2 --------********
//   it is more optimise then method -1



// const allImage = document.querySelectorAll('img')

// const updateImagesLinks = [
//     'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',

//     'https://www.shutterstock.com/image-photo/ancient-temple-ruins-gadi-sagar-260nw-786126286.jpg',

//     'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg'

// ]


// allImage[0].src = updateImagesLinks[0]
// allImage[1].src = updateImagesLinks[1]
// allImage[2].src = updateImagesLinks[2]


// method ---3 ----*******
// more optimise using for loop

// const allImage = document.querySelectorAll('img')

// const updateImagesLinks = [
//     'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',

//     'https://www.shutterstock.com/image-photo/ancient-temple-ruins-gadi-sagar-260nw-786126286.jpg',

//     'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg'

// ]



// for (let i =0;i<allImage.length;i++){
//     allImage[i].src = updateImagesLinks[i]
// }


// method -4 --------********** using forEach() method -----
// we can apply only  forEach() method b/c it is an array ( give node array )  other method is not applicable on this.

// const allImage = document.querySelectorAll('img')

// const updateImagesLinks = [
//     'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',

//     'https://www.shutterstock.com/image-photo/ancient-temple-ruins-gadi-sagar-260nw-786126286.jpg',

//     'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg'

// ]

// allImage.forEach((value,index)=>{
    
//     value.src = updateImagesLinks[index]

// })



// important note --------***********


// we can't use this forEach() method on document.image or document.getElementbyid / class / tag b/c they all give html collection not an array . 

// but we can convert into an array by useing spread operator [... document.image] , now it become an array and we can use foreach(), map() or reduce()....

// new topic ------------************** EP - 53 ----------------------
//  innerHTML VS innerText vs innerContent

// const value = document.querySelector('#inner')

// new topic ------------**************** EP - 54 -----------------
// getAttribute and SetAttribute ----------------

// this line is for extra knowledge -------*******
// we can give attribute in html with random name with its random value with the help of this----->>>
// <p [procodrr ='amit']> this is p tag </p>
// we can also style any attribute with the help of  this ---->>>  []


// main topic----

// we can access any attribute ----- 
// method -1 

// const value = document.querySelector('[procodrr]').attributes.procodrr

// another example --------****

// const value = document.querySelector('[id]').attributes.id

// the above line give the first  id in the html

// method -2 ( getAttribute)-----*****

// the html line is -->>  <p procodrr = 'amit' id="id2" class="class1">

// const value1 = document.querySelector('[procodrr]').getAttribute('procodrr')

//  in the above line the first procodrr is seletecting the whole line and the second is selecting the value of procodrr, another example is below----

// const value2 = document.querySelector('[procodrr]').getAttribute('id')

// const value3 = document.querySelector('[procodrr]').getAttribute('class')


// how to access a attribute which is predefined by html like id,class, alt etc...  the above example is not pre- defined , it is created by me.

// access pre-defined attributes ----

// const value4 = document.querySelector('h1')

// in this  above code h1 is selected now we need to access it's attribute---

// const  value5 = document.querySelector('h1').getAttribute('class')




// now setAttribute -----------*********
// we can set a attribute 

// const value6 = document.querySelector('h1').setAttribute('title','hello world!!')

// give a id with the help of this method ------

// const value7 = document.querySelector('h1').setAttribute('id','id1')
// // or 
// const value8 = document.querySelector('h1').id = 'id2'


// new topic --------********* how to apply style in js --- EP - 55 

// const style0= document.querySelector('h1').style

// the above line give us style object in which we can see style which is applyed on h1  at inline level. it don't give css style property it only give style which is given on inilne.

// important note --- when we manipulate style through dom it is not changing in css file , it is changing on inline of an element.
//  property which is in css file  we can't change it.

// want to add style on html element at inline (b/c it is only adding on inline)

// const style1 = document.querySelector('h1').style.color = 'red'

// or 

// const style2 = document.querySelector('h1').style.backgroundColor = 'lightpink'


// task ---1---*****
// color all anchore tag into three differnt color ---- using dom manipulation ---



// const task = document.querySelectorAll('a').style.color ='red'
// we can't do with the above line 

// we have to do this below lines ----------

//  const task = document.querySelectorAll('a')

// in task we have all anchore tags

//  task[0].style.color='red'
//  task[1].style.color= 'blue'
//  task[2].style.color= 'yellow'

// we can perform this above action with the help of for loop ---( dicuss below)

// const color1 = ['red','blue','yellow']

// for (let i =0; i<task.length;i++){
//     task[i].style.color = color1[i]

// }

// we can optimize this above code which is written with the help for loop ------
// we can optimize with the help of for - of loop ----(below is the code)

// let i = 0;

// for (const singleAnchore of task){
//     singleAnchore.style.color= color1[i]
//     i++;
// }

//  explaination of above lines here singleAnchore in for loop --->>> task[0] in first loop and in second loop task[1] ... so on...



// we can give multiple css property with the help of this for - of loop ----but it is apply on inline.

// for(link of task){
//     link.style.color = 'green',
//     link.style.backgroundColor = 'lightpink'
// }
// or 

// we can give property like we give in css --- means in a line by line way --- using this property --

// for (link of task){
//     link.style.cssText =
//     `color: red;
//     background-color : lightpink;
//     `
// }

// this above lines are not effective or optimize ---- we use this below line 
// in this belows lines what we are doing is that we create a class and apply property in css file and here in js we add this class into our desire element using two method - 1.  .className 2. setAttribute

// const task = document.querySelectorAll('a')

// method -1

// task[0].className = 'select-anchore'
// task[1].className = 'select-anchore'
// task[2].className = 'select-anchore'



// method -2

// task[0].setAttribute('class', 'select-anchore')
// task[1].setAttribute('class', 'select-anchore')
// task[2].setAttribute('class', 'select-anchore')


// we can apply  for loop on these both methods  for -of loop 

// for(link of task){
//     link.className = 'select-anchore'
// }

// or 

//  for(link of task){
//         link.setAttribute('class','select-anchore')
//     }


// and this select-anchore class is present in css file and we can give as much property as we want.



// ### important --- ***** these above methods are not optimise so we use this optimise code which is discuss below --------- we use this often -----


// we use classList.add() - for adding a class
// we use classList.remove() - for removing a class
//  we use classList.toggle() - if class is not present then it add it and if prensent then it remove it.

// for(link of task){
    // link.classList.add('select-anchore')
    // link.classList.remove('select-anchore')
    // link.classList.toggle('select-anchore')

// }

// new topic ----------************EP - 56 access sibling and parent and child in js

// access parent element ---****

// const access =  document.querySelector('h1').parentElement
// console.log(access);

// access children element ----*****

// const access1 =  document.querySelector('h1').parentElement.children
// console.log(access1);

// access sibling of an element -------*****

// next sibling --------

// const access2 =  document.querySelector('h1').nextElementSibling
// console.log(access2);

// previous sibling ------

// const access3 =  document.querySelector('h1').previousElementSibling
// console.log(access3);

// to go the next ... next sibling  we have to write two time  like below --

//  const access4 =  document.querySelector('h1').nextElementSibling.nextElementSibling
// console.log(access4);

// important ---****####

// nextsibling is giving  --->>>>    node not element.( what is node , we will be discussing in next episode)




// new topic ---------*************EP - 57 ----- element vs node 

// document.body.children

// this above line give all html element in an array type object.

// document.body.childNodes

// this above line gie all nodes , they are always more then the element.
// in nodes it is counting spaces , comments etc. that's why it's value is increse.

// each type of element have differnt type of node value --- like attribute have different node value 
// document have different node value. we can find these value on MDN. 


// each element is node but each node is not element.

// node means we are going deep inside element . 

// if we write some text in body without any element then how can we access this world with the help of js and how to manipulate this word from js , how can we change the text of this word using js, we can do this with the help of node.

// steps are --

// document.body.childNodes
// this above line give all the nodes , now we have to find the text and also find its index.

// document.body.childNodes[0].nodeValue= 'changed'
// this above line change the value into 'changed'


