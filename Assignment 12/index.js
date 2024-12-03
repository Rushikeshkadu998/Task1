//1

// const arr = [10,20,30,40,50,60,70,80,90,100];
// let sum = 0;
// let se = 0;
// let so= 0;
// let great = arr[0];
// let small = arr[0];
// for(let num of arr)
// {
//     sum += num;
//     num%2===0 ? se+=num : so+=num;
//     if(great<num)
//         great=num
//     if(small>num)
//         small=num
// }
// console.log("Average of 10 Numbers:",sum/arr.length)
// console.log("Sum of even numbers:",se);
// console.log("Sum of odd numbers:",so);
// console.log("Greatest num:",great);
// console.log("Smallest num:",small)



//2

let arr = [100,90,80,70,60,50,40,30,20,10];
let index = 0,round = 0;
for(round=1; round<arr.length; round++)
{
    for(index=0; index<arr.length-round; index++)
    {
        if(arr[index]>arr[index+1])
        {
            const swap = arr[index];
            arr[index] = arr[index+1];
            arr[index+1] = swap;
        }
    }
}
console.log(arr)