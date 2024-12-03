//1

// function natural(N)
// {
//     if(N==0)
//         return 1;
//     natural(N-1);
//     console.log(N+" ");
// }

// natural(10);


//2

// function naturalReverse(N)
// {
//     if(N===0)
//        return 1;
//     console.log(N);
//     naturalReverse(N-1)
// }

// naturalReverse(10)


//3

// function evenNumbers(N)
// {
//     if(N===0)
//         return 1;
//     evenNumbers(N-1);
//     console.log(N*2);
// }

// evenNumbers(10)\


//4

// function evenNumbersReverse(N)
// {
//     if(N===0)
//         return 1;
//     console.log(N*2);
//     evenNumbersReverse(N-1);
// }

// evenNumbersReverse(10)


//5

// function oddNumbers(N)
// {
//     if(N===0)
//         return 1;
//     oddNumbers(N-1);
//     console.log(N*2-1);
// }

// oddNumbers(10)


//6

// function reverseOddNumbers(N)
// {
//     if(N===0)
//         return 1;
//     console.log(N*2-1);
//     reverseOddNumbers(N-1);
// }

// reverseOddNumbers(10)


//7

// function sumOfNatural(N)
// {
//     if(N===0)
//         return 0;
//     return N+sumOfNatural(N-1);
// }

// console.log(sumOfNatural(10))


//8

// function sumEvenNatural(N)
// {
//     if(N===0)
//         return 0;
//     return N*2+sumEvenNatural(N-1);
// }


//9

// function sumOddNatural(N)
// {
//     if(N===0)
//         return 0;
//     return (N*2-1)+sumOddNatural(N-1);
// }

// console.log(sumOddNatural(3));


//10

// function sumSquareOfNatural(N)
// {
//     if(N===0)
//         return 0;
//     return N**2+sumSquareOfNatural(N-1);
// }

// console.log(sumSquareOfNatural(3))


//11

// function sumOfNumber(N)
// {
//     if(N===0)
//         return 0;
//     return (N%10)+sumOfNumber(parseInt(N/10))
// }

// console.log(sumOfNumber(123))


//12

// function binary(N)
// {
//     if(N===0)
//         return 0;
//     binary(parseInt(N/2))
//     process.stdout.write(N%2+"");
// }

// binary(8)
// console.log();


//13

// function octal(N)
// {
//     if(N===0)
//         return 0;
//     octal(parseInt(N/8))
//     process.stdout.write(N%8+"");
// }

// octal(8)
// console.log();


//14

// function reverseNumber(N)
// {
//     if(N===0)
//         return 0;
//     process.stdout.write(N%10+"");
//     reverseNumber(parseInt(N/10))
// }

// reverseNumber(1234)
// console.log();


//15

// function fib(N)
// {
//     if(N===1 || N===2)
//         return N-1;
//     return fib(N-1)+fib(N-2);
// }

// console.log(fib(46))



// function hcf(a,b)
// {
//     if(b===0)
//         return a;
//     return hcf(b,a%b);
// }


// console.log(hcf(70,15))