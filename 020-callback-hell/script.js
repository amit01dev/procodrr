// const xml =  new XMLHttpRequest()
// xml.responseType = 'json'



    // in above we use xml.responseType = 'json , so that we have to not use the console.log(JSON.parse( xml.response));

// xml.addEventListener('load',()=>{
//     console.log(xml.response);

    // console.log(JSON.parse( xml.response));
// })
// xml.open('GET','https://dummyjson.com/users')
// xml.send()



// if we want to use this above code as a reusable code then we have to pack this into a function.
// 1. we give parameters to the function ( method, url , callback) so that when we call function we can change the method and url.
// 2. here second api is depended on first api and so on, means each API is depended on it's upper api b/c it is taking data from upper api.
// 3.



const httpRequest = function(method,url,callback){
    const xml = new XMLHttpRequest()
    xml.responseType = 'json'
    xml.addEventListener('load',()=>{
        callback(xml.response)
    })
    xml.open(method, url,)
    xml.send()
    
}
httpRequest('GET',`https://dummyjson.com/users`,(usersData)=>{
    console.log(usersData)
    // console.log(data.users[0].firstName);                        // here data means xml.response
    // console.log(data.users[0].id);


    // case -1 fetching posts through userid 

    httpRequest('GET',`https://dummyjson.com/posts/user/${usersData.users[0].id}`,(postData)=>{   
      
    // here this data is related   their own link.
                                                                    
   //   here this template literal is taking data from first api.
   // b/c we are using (data.users[0].id), this second api is depend on the first api.                                             
                                                        


   console.log(postData);
        // console.log(data.posts[0].id);
        // console.log(data.posts[0]);



        // case-2  get comments from post id 


        httpRequest('GET',`https://dummyjson.com/comments/post/${postData.posts[0].id}`,(commentData)=>{
            console.log(commentData);

            // here above we use data.posts[0].id --> it is giving the id of the post which comment we want to fetch.
            // this api is depended on 'fetching post through user id' api  b/c we use ${postData.posts[0].id} and this is coming from fetching post through user id.



            // case-3 when we get all the comment from the above api, now find out who is doing a specific comment, like who is doing second comment or first comment and print that user id.


            // here we are priting user id who do first comment.
            console.log(commentData.comments[0].user.id);


            // case-4 
            // now from above we know that who is doing the first comment on the post so if we want to accesses all the information of this user then we call an api which fetch single user data and in that api in last we dynamically pass the id.


            httpRequest('GET',`https://dummyjson.com/users/${commentData.comments[0].user.id}`,(userData)=>{
                console.log(userData);
            })

        })
    })
})


// callback Hell -----*****
// so what is callback hell
// when we use many api inside a function & these api is depended on each other for example we call four api and four is depend on third , third is depend on second , second is depend on first. 
// then it is becoming callback hell , b/c we are doing callback and our code is growing horizontally and not in vertically direction.

// cons of callback hell ---
// it is difficult to track our code.


// to get rid of this we introduce promises and with the help of promises we can do the same this , (apis are depended on each others) but our code is not growing horizontally our code is growing vertially.



// or

// in below i am writing the whole code which i discuss above.

// const xmlRequest = function (method, url, callback) {
//     const xml = new XMLHttpRequest()
//     xml.responseType = 'json'
//     xml.addEventListener('load', () => {
//         callback(xml.response)
//     })
//     xml.open(method, url)
//     xml.send()

// }
// xmlRequest('GET', 'https://dummyjson.com/users', (userData) => {
//     xmlRequest('GET', `https://dummyjson.com/posts/user/${userData.users[0].id}`,(postData) => {
//         xmlRequest('GET', `https://dummyjson.com/comments/post/${postData.posts[0].id}`, (commentData) => { xmlRequest('GET', `https://dummyjson.com/users/${commentData.comments[0].user.id}`,(userData) =>{console.log(userData);}) })
        
//     })
// })