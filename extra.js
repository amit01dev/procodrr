// practicing forEach method in array ----*****

// const months = [ 'january','february','march','april','may']
//  const countMonth = months.forEach((month, index, array1) => {
//     console.log(month, index, array1 );

//  })
 

// practing map method in array ------******

// if we don't write return keyword , then also it is returning an array which have undefined 5 times b/c we have 5 elements in an array.

// const months = [ 'january','february','march','april','may']

// const countMonth  = months.map((month , index , array1) => {
//     console.log(month);

//  })
// console.log(countMonth);



// practicing filter method --- ******

//  in filter method if truly value is present in the return then it print all the element in an array as a return and if false value is present in return then it doesn't print anything, it only show an empty array.

// const months = [ 'january','february','march','april','may']
// const countMonth = months.filter((month, index, array1)=> {
//     console.log(month, index, array1);
    


// })

// console.log(countMonth);

// difference b/t map and filter ---*****
// map -----

// 0. if we don't write a return keyword in map then it return an array with undefined as an element and this element is printed based on the total element in the array on which we apply this method , if this array is having 5 element then it print 5 times undefined.

//  1.   map return anything which we write after the return keyword if we write a string then it return a string if we write a variable then it print this variable .

// 2. it return whatever we write in return.

//  filter -------

// 0.   if we don't write a return keyword in filter method then it give an empty array.

// 1. if we write anything which is truely value then it print all the element of the array on which it is applying, if falsy value is given then it print nothing and if we apply any condition then which element satisfy this condition will print and others will not print.

// 2. it evaluate return value  whethere it is true or false , if true  then it print the array element which is satisfied true condition.  

function factorial(n){
    if(n===1){
        return 1
    }else{
        return n* (n-1)
    }
}

console.log(factorial(5));
