let Array1 = ['Hello', 1, 17, null, NaN];
let countOfEven = 0;
let countOfNotEven = 0;
let zeroIndex = 0;
Array1.map((item, index) => {
    if (index % 2 == 0 && index != 0){
        countOfEven+=1;
    } else if (index == 0){
        zeroIndex+=1
    } else{
        countOfNotEven+=1;
    }
})
console.log(`Even index count = ${countOfEven}\n`)
console.log(`Zero index count = ${zeroIndex}\n`)
console.log(`Not even index count = ${countOfNotEven}`)