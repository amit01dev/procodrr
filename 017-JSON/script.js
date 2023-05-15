const image = document.querySelector('img')
const button = document.querySelector('button')



// we fecth data from internet and using this url into our file.
// this is called api and this one is rest api.

// fetch('https://dog.ceo/api/breeds/image/random')
// .then((response) => response.json())
// .then((json) => {
// console.log('Got the data');
// console.log(json);
// image.src = (json).message

// })


button.addEventListener('click', () => {

    fetch('https://dog.ceo/api/breeds/image/random')
        .then((response) => response.json())
        .then((json) => {
            console.log('Got the data');
            console.log(json);
            image.src = (json).message

        })

})
