let t = Number(prompt());

if (typeof(t) == 'number'){
    if (t % 2 == 0){
        console.log("It's even number")
    } else{
        console.log("It's not even number")
    }
} else{
    console.log("It's not a number")
}