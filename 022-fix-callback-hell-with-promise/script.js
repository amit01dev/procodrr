// fix callback-hell with the help promises--->>>

// 1. we get all user data
// 2. we get all post of first user ( using userdata)
// 3. we get comment on first post ( using postdata)
// 4. we get first comment on first post (using comment data)
// 5. we get full detail of this person who done first comment (using comment data)


// first we send XMLHttpRequest() 
// then we solve the callback problem with the help of promise.

// send XMLHttpRequest()  --->>>
// here i am calling api which are depended on each other.

// const xmlRequest = function (method, url, callback) {
//     const xml = new XMLHttpRequest()
//     xml.responseType = 'json'
//     xml.addEventListener('load', () => {
//         callback(xml.response)
//     })
//     xml.open(method, url)
//     xml.send()

// }

// first we fetch all users
// second we fetch all posts of first user (using user id)
// thrid we fetch comment  from  post id ( using post id)
// four we fetch user complete detail who do first comment ( using user id who is commenting )

// xmlRequest('GET', 'https://dummyjson.com/users', (userData) => {
//     xmlRequest('GET', `https://dummyjson.com/posts/user/${userData.users[0].id}`,(postData) => {
//         xmlRequest('GET', `https://dummyjson.com/comments/post/${postData.posts[0].id}`, (commentData) => { xmlRequest('GET', `https://dummyjson.com/users/${commentData.comments[0].user.id}`,(userData) =>{console.log(userData);}) })

//     })
// })

// this above is callback hell , we are going to solve it using promise---***



 function xmlRequest (method, url) {
    const xml = new XMLHttpRequest()
    xml.responseType = 'json'

  const promise1 = new Promise((resolve, reject)=>{
    xml.addEventListener('load',()=>{
        resolve(xml.response)
    })
    xml.addEventListener('error',()=>{
      // console.log('link is broke');
      reject('link is broke')
      })
  })

    xml.open(method, url)
    xml.send()

    return promise1

}










// this below is giving a promise so we can apply .then() method on this promise
xmlRequest('GET', `https://dummyjso.com/users`).then((userData)=>{
    // / this above give users data,
    // console.log(userData);



// / b/c we knw that then() method also return a promise so we can apply .then() method.in below
// this below will give undefined b/c the above then() method is not returning anything.
// }).then((data)=>{console.log(data);})


// so we return the function with different url ( this url is depended on the first url )
return xmlRequest('GET',`https://dummyjson.com/posts/user/${userData.users[0].id}`)

// this below data is returning what is return in the previous then() method b/c  if then() method is applyed on then() method then it is returning the return value. )

// }).then((data)=>{console.log(data);})

}).then((postData)=>{
  return xmlRequest('GET',`https://dummyjson.com/comments/post/${postData.posts[0].id}`)
}).then((commentData)=>{
  return xmlRequest('GET',`https://dummyjson.com/users/${commentData.comments[0].user.id}`)

  // this below will give the user complete details which is commenting first comment.
// if our promise is giving reject then we have to add catch() which can catch the error.

}).then((userData)=>{console.log(userData);}).catch((err)=>{console.log(err);})








// below is the shortest form of this above----->>>

// xmlRequest('GET', `https://dummyjson.com/users`)
// .then((userData)=> xmlRequest('GET',`https://dummyjson.com/posts/user/${userData.users[0].id}`))
// .then((postData)=> xmlRequest('GET',`https://dummyjson.com/comments/post/${postData.posts[0].id}`))
// .then((commentData)=>xmlRequest('GET',`https://dummyjson.com/users/${commentData.comments[0].user.id}`)).then((userData)=>{console.log(userData);}).catch((err)=>{console.log(err);})

