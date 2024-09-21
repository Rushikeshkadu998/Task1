// function example() {
//     let x = 10;
//     if (true) {
//         let y = 20;
//     }
//     console.log(y); // 20, because y is function-scoped
// }
// example();
// console.log(x); // Error: x is not defined outside the function



// const s = 10;
// console.log(s)
// s = 20;
// console.log(s)

// const s = "hey allien";
// console.log(s)
// s[0]='H'
// console.log(s)

// s = {a:10,b:20}
// console.log(s)
// s.a = 100
// console.log(s)
// s.c = 300
// console.log(s)



// a = 10.54
// b = 'hey'
// c = true
// d = undefined
// e = null


// let x = typeof true
// console.log(x)
// console.log(typeof x)


// 3. loops

// let arr = ['c','cpp','python','js'];
// for(let language of arr)
//     console.log(language)


// let string = "hey, let's fun with the JS";
// for(const char of string)
//     console.log(char);


// let obj = { firstName: "Rushikesh",
//     lastName: "Kadu",
//     age: 24
// }

// let arr = ['c','cpp','python','js'];
// for(let language in arr)
//     console.log(language)

// for(const prop of Object.keys(obj))
//     console.log(prop," : ",obj[prop])


// let arr = ['c','cpp','python','js'];
// arr.forEach((language,index,array)=>{
//     console.log("language:",language);
//     console.log("index:",index);
//     console.log("array:",array);

// })


// console.log(typeof new Array())


const arr = [10,20,30,40,50,40];
// arr.push(60,70,80)
// const ret = arr.pop()
// const ret = arr.shift();
// const ret = arr.unshift(1,2,3);

// const arr1 = [60,70,80];
// const arr2 = [90,100,110];
// const ret = arr.concat(arr1,arr2);
// const ret = arr.splice(2,2);
// const ret = arr.slice(2,5)
// const ret = arr.lastIndexOf(40);
// console.log(arr.includes(40))

const ret = arr.join(' ')
console.log("ret:",ret);
console.log("arr:",arr);