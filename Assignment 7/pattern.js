//1

/*

* * * *
* * *
* *
*

*/


// let i,j;
// for(i=1; i<=4; i++)
// {
//     for(j=1; j<=4; j++)
//     {
//         if(j<=5-i)
//             process.stdout.write("*");
//     }
//     console.log();
// }



// 2

/*

* * * *
  * * *
    * *
      *

*/

// let i,j;
// for(i=1; i<=4; i++)
// {
//     for(j=1; j<=4; j++)
//     {
//         if(j>=i)
//             process.stdout.write("*");
//         else
//             process.stdout.write(" ");

//     }
//     console.log();
// }


// 3

/*

      *
    * *
  * * *
* * * *

*/

// let i,j;
// for(i=1; i<=4; i++)
// {
//     for(j=1; j<=4; j++)
//     {
//         if(j>=5-i)
//             process.stdout.write("*");
//         else
//             process.stdout.write(" ");
//     }
//     console.log();
// }



// 4

/*

* * * * * * *
  * * * * *
    * * *
      *

*/

// let i,j;
// for(i=1; i<=4; i++)
// {
//     for(j=1; j<=7; j++)
//     {
//         if(j>=i && j<=8-i)
//             process.stdout.write("*");
//         else
//             process.stdout.write(" ");
//     }
//     console.log();
// }


//5

/*

      *
    * * *
  * * * * *
* * * * * * *

*/

// let i,j;
// for(i=1; i<=4; i++)
// {
//     for(j=1; j<=7; j++)
//     {
//         if(j>=5-i && j<=3+i)
//             process.stdout.write("*");
//         else
//             process.stdout.write(" ");
//     }
//     console.log();
// }


//6

/*

1
12
123
1234

*/

// let i,j;
// for(i=1; i<=4; i++)
// {
//     for(j=1; j<=4; j++)
//     {
//         if(j<=i)
//             process.stdout.write(j+" ");
//         else
//             process.stdout.write(" ");
//     }
//     console.log();
// }


// 7

/*

 ABCDCBA
 ABC CBA
 AB   BA
 A     A

*/

let i,j;
for(i=1;i<=4;i++)
{
    let char = 65;
    let reg = 1;
    for(j=1;j<=7;j++)
    {
        if(j<=5-i || j>=3+i)
        {
            process.stdout.write(String.fromCharCode(char));
            if(j<=3)
                char+=1;
            else
                char-=1;
        }
        else
        {
            if(reg==1)
            {
                char-=1;
                reg=0;
            }
            process.stdout.write(" ");
        }
    }
    console.log()
}