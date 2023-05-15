// XMLHttpRequest()--- ( short form XHR)

// it is a function which is called only when we use new keyword before this function 
//  ex -  New XMLHttprequest()

// new keyword -->> when we use new keyword before any function it is giving that's function as a return.

// before json format data is send through this format ( xmlhttprequest)






const image = document.querySelector('img')
const Lbutton = document.querySelector('.learning')
const button = document.querySelector('.dog')

// case-1

// button.addEventListener('click',()=>{
// const xml = new XMLHttpRequest()
// console.log(xml);

// it will only open it.
// xml.open('GET', 'https://dog.ceo/api/breeds/image/random')

// it is opening the link ( api ) and save the data into response key inside the xmlhttprequest() object.


// xml.send() -->>>  it is responsible for sending the request , if setup everything and don't send the request then this request is not send.

// xml.send()


// here we use an api which is very fast and data is store in the response key very quicky.


// })


// here in below we use an api which take longer time to fetch the data so how can we find out that data is received , well we apply load eventlistner on the xml.

Lbutton.addEventListener('click',()=>{
    const xml = new XMLHttpRequest()
    console.log(xml);


    // this below is used to set the response type when we use this we don't have to use JSON.parse() which we use in below.

    xml.responseType = 'json'

// this load event listner listen event when data is load, means when data received from api it is do console.
xml.addEventListener('load',()=>{

    // the data we fetch with the help of this below api is store in response key of XMLHttpRequest(). object
    // to bring this response key into an object form we use json.parse()

    
    // console.log(JSON.parse( xml.response)); 
    console.log(xml.response);


})
xml.open('GET', 'https://6wrlmkp9u2.execute-api.us-east-1.amazonaws.com/?sleep=5000')
xml.send()

})

    

// task-1 
// now use this above method and set the dog image in img tag and 


button.addEventListener('click',()=>{
    const xml2 = new XMLHttpRequest()
    xml2.responseType = 'json'



    // xml2.addEventListener('load',()=>{


        // in below we get the link which keep changing and responsible for different images of dog.

        // console.log(xml2.response.message);

    
       
        // now we add this link into our img tag

        // image.src = xml2.response.message
    // })

        // or 
        // we can use onload key of xml object rather than using eventlistener('load'), it work same way --->>>

    xml2.onload = ()=>{
        console.log(xml2.response.message);

        image.src = xml2.response.message

    }
    xml2.open('GET','https://dog.ceo/api/breeds/image/random')
    xml2.send()
    
    
})
