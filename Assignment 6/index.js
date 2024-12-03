//1

// const num = 12;
// let i;
// for(i=2; i<=parseInt(num/2);i++)
//     if(num%2==0)
//     {
//         console.log("Not prime number");
//         break;
//     }
// if(i==parseInt(num/2)+1)
//     console.log("prime number");


//2

// for(let num=1; num<=100;num++)
// {
//     let i;
//     for(i=2; i<=parseInt(num/2);i++)
//     {
//             if(num%2==0)
//             {
//                 break;
//             }
//     }
//     if(i==parseInt(num/2)+1)
//         console.log(num," ");
// }


//3

// const a = 20;
// const b = 10;
// for(let num = (a<b?a:b); num<=(a>b?a:b); num++)
// {
//     let i =2;
//     for(;i<=parseInt(num/2);i++)
//     {
//         if(num%i==0)
//             break;
//     }
//     if(i==parseInt(num/2)+1)
//         console.log(num," ")
    
// }


//4

// let num = 13;
// let i;
// while(true)
// {
//     num+=1;
//     for(i=2; i<=parseInt(num/2);i++)
//     {
//             if(num%i==0)
//                 break;
//     }
//     if(i==parseInt(num/2)+1)
//     {
//         console.log(num);
//         break;
//     } 
// }


//5

// const a = 28
// const b = 21
// let H;
// for( H=(a<b?a:b); H>=1; H--)
// {
//     if(a%H==0 && b%H==0)
//         break;
// }
// if(H===1)
//     console.log("Co-Prime");
// else
//     console.log("Not Co-Prime");

    
//6

// let N = 15
// let num = 2;
// while(N)
// {
//     let i;
//     for( i=2;i<=parseInt(num/2);i++)
//     {
//         if(num%i==0)
//             break;
//     }
//     if(i==parseInt(num/2)+1)
//     {   
//         console.log(num," ");
//         N-=1;
//     }
//     num+=1;
// }

//7

// const a = 10;
// const b  = 25;
// let L;
// for(L=(a>b?a:b);L<=a*b;L++)
// {
//     if(L%a==0 && L%b==0)
//     {
//         console.log("LCM:",L)
//         break;
//     }
// }

//8

// const a = 10;
// const b = 25;
// let H;
// for(H=(a<b?a:b);H>=1;H--)
// {
//     if(a%H==0 && b%H==0)
//     {
//         console.log("HCF:",H);
//         break;
//     }
// }
