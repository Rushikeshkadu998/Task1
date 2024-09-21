let arr = [1,2,3,4];
// let new_arr = arr.map(num=>num**2)
// console.log("New array:",new_arr);


// let new_arr = arr.filter(num=>!(num%2))
// console.log(new_arr)


let new_arr = arr.reduce((acc,cur)=>acc+cur**2,0)
console.log(new_arr);