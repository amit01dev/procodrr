// fetch api ---***
    // API - application programming interface ( it is a way to communicate b/t two or more  programmes)
// fetch API - is used in js to fetch data from other sources.

// when we do this ---
// fetch('https://dummyjson.com/products') -> then it is giving a promise
// so we can apply .then() on that 


// in below response is giving data coming from this url

// in response many parts are coming in many parts one is body & other is headers , if header is coming before data then promise is fullfilled.

// and respose object is passed in response & in this response response object is present but data is not present.
// to bring the data we 

// fetch('https://dummyjson.com/products').then((response)=>{
//     console.log(response.json());
// })

//  ( in above) in short if i want to summerise of the above then -->> if we apply .then() on the fetch() then it first return respose object then we have to apply a method on that & the method is .json() then we can receive the promise inside this promise the data is present.


// case -1
// ( in below) the above code is not giving data, it is only giving promise, to brign data we apply another .then() method on response.json()


fetch('https://dummyjson.com/products')
.then((response)=>{
    (response.json()
    .then((data)=>{console.log(data);}));

})

// or 

// we can do the above code in different way, we are returning the response.json() and then apply .then() method.

fetch('https://dummyjson.com/products')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data)})

    // or 
// we can do more effective the above code -->> if we remove return keyword then we have to remove {} ( it is called inplicit return ), that's all we do below.

fetch('https://dummyjson.com/products')
.then((response)=> response.json())
// this above is giving a promise so we apply .then() method on this promise.
.then((data)=>{
    console.log(data)})




// important ---**** ###
// fetch() bydefault sending get request, if we want to send post request then we can pass an object in fetch as a second argurment and this object we can write method : post.


fetch('https://dummyjson.com/products', {
    method : 'POST'
})
.then((response)=> response.json())
.then((data)=>{
    console.log(data)})







