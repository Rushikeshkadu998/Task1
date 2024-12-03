/* 

         *
       *   *
     *   *   *
   *   *   *   *
 *   *   *   *   *

*/

// let N;
// let i,j,k;
// for(i=1;i<=N;i++)
// {
//     for(j=4;j>=i;j--)
//     {
//         process.stdout.write(" ");
//     }
//     for(k=1;k<=i;k++)
//         process.stdout.write(" *");
//     console.log()
// }   


// let i,j,k;
// for(i=1;i<=N;i++)
// {
//     for(j=1;j<=9;j++)
//     {
//         if(j>=6-i && j<=4+i)
//         {
//             if(i%2===0 && j%2===0)
//                 process.stdout.write("*");
//             else if(i%2 && j%2)
//                 process.stdout.write("*");
//             else
//                 process.stdout.write(" ");

//         }
//         else
//         {
//             process.stdout.write(" ");
//         }
//     }
//     console.log()
// }   




let i,j;
for(i=1;i<=9;i++)
{
    for(j=1;j<=9;j++)
    {
        if(i<=5)
        {
            if(j<=i || j>=10-i)
               process.stdout.write("*");
            else
                process.stdout.write(" ");
        }
        else if(i>5)
        {
            if(j<=10-i || j>=i)
                process.stdout.write("*");
            else
                process.stdout.write(" ");
        }
    }
    console.log()
}