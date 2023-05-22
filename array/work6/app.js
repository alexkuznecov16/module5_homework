let myArray = ['Hello1', 'Hello', 'Hello', 'Hello', 'Hello']

/* every - check all array elements by given element 
    !if every myArray elements === first myArray element then will be true */
    
let result = myArray.every(function(elem) { return elem === myArray[0] })

console.log(result)
// Indentity