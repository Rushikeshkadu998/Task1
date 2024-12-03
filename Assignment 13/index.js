//1

// function rotate(arr)
// {
//     let index;
//     const last = arr.length>0 ? arr[arr.length-1] : null;
//     for(index=arr.length-1;index>=0;index--)
//         arr[index] = arr[index-1];
//     arr[0] = last;
// }


//2

// function reverse(arr)
// {
//     let index;
//     for(index=0;index<arr.length/2;index++)
//     {
//         let temp = arr[arr.length-index-1];
//         arr[arr.length-index-1] = arr[index];
//         arr[index] = temp;
//     }
// } 


//3

// function sort(arr)
// {
//     let round, index;
//     for(round=1; round<arr.length;round++)
//     {
//         for(index=0;index<=arr.length-round-1;index++)
//         {
//             if(arr[index]>arr[index+1])
//             {
//                 let temp = arr[index];
//                 arr[index] = arr[index+1];
//                 arr[index+1] = temp;
//             }
//         }
//     }
// }


//4

// const smallIndex = (arr)=>{
//     let smallIn = 0;
//     let small = arr.length ? arr[0] : 0;
//     for(let index in arr)
//     {
//         if(small>arr[index])
//         {
//             small = arr[index];
//             smallIn = index;
//         }
//     }
//     return smallIn;
// }

// function uniqueElement(arr)
// {
//     let index;
//     let uniqueElement = []
//     for(index=0;index<arr.length;index++)
//     {
//         if(count(arr,arr[index])===1)
//             uniqueElement.push(arr[index]);
//     }
//     return uniqueElement;
// }

// function count(arr,num)
// {
//     let count = 0;
//     for(let n of arr)
//         if(num===n)
//             count++;
//     return count;
// }

// function checkNotInclude(arr, num)
// {
//     for(let n of arr)
//         if(n===num)
//             return false;
//     return true;
// }

// 5

// function distinct(arr)
// {
//     let distinctElements = [];
//     for(let num of arr)
//     {
//         if(checkNotInclude(distinctElements,num))
//             distinctElements.push(num)
//     }
//     return distinctElements;
// }

//6

// function frequency(arr)
// {
//     const distinctElements = distinct(arr);
//     for(let num of distinctElements)
//     {
//         console.log(num," ", count(arr,num))
//     }
// }


//7   mean deviation

// 1) calculate average of Array
// 2) do subtract average from each element of Array
// 3) Take the average of those new generated array

// function sum(arr)
// {
//     let sum = 0;
//     for(let num of arr)
//         sum+=num;
//     return sum;
// }

// function meanDeviation(arr)
// {
//     let average = sum(arr)/arr.length;
//     const newArray = arr.map(num=>num-average);
//     const meanDev = sum(newArray)/newArray.length;
//     console.log("Mean Deviation:",meanDev);
// }

let arr = [10,9,9,8,8,7,7,6,5,4,3,2,1];
meanDeviation(arr)
// console.log(arr);
// sort(arr)
// console.log(arr);



