let autos = new Map ([
    ['BMW', "Black"],
    ['Volvo', "Red"],
    ['Tesla', "White"]
])
// autos.set('BMW', 'Black')
// autos.set('Volvo', 'Red')
// autos.set('Tesla', 'White')

autos.forEach((value,key) =>{
    console.log(key + " = " + value)
})