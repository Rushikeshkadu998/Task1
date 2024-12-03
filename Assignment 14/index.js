//Strings 
// let str = "   Javascript   ";
// console.log(str.length)
// console.log(str.charAt(3));
// console.log(str.charAt(6));

// console.log(str.indexOf('',4))
// console.log(str.includes('!'))

// console.log(str.substring(2,2))
// console.log(str.slice(0,-5));

// console.log(str.trim());


// let str = "apple,banana,orange,grape,mango";
// let str = 'It is a great day.';
// let value = str.startsWith('great', 8);

// console.log(value);


//1

const countOccurence = (str,char)=>
{
    let count = 0;
    for(let c of str)
        if(c===char)
            count++;
    return count;
}

const strlen = (str)=>{
    let len = 0;
    for(const char of str)
        len++;
    return len;
}

const string = "aabcdcdded";
console.log(string.toLowerCase())
console.log(string.toUpperCase())
console.log(string.split('').reverse().join(''))