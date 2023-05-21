let myArray = ['Hello', 'Hello', 'Hello', 'Hello', 'Hello']

console.log(myArray.every(function(elem){
    console.log(elem)
    if (elem != myArray[0] || elem != myArray[1] || elem != myArray[2] || elem != myArray[3] || elem != myArray[4]){
        console.log('Not identity')
    } else if(elem == myArray[0] && elem == myArray[1] && elem == myArray[2] && elem == myArray[3] && elem == myArray[4]){
        console.log('Indentity')
    }
}))

// Indentity