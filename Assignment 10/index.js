//1

function areaOfCircle(r)
{
    return 3.14*r*r;
}

function circumferenceOfCircle(r)
{
    return 2*3.14*r;
}

function naturalNumber(N)
{
    for(let i=1;i<=N;i++)
        process.stdout.write(i+" ");
}

function checkPrime(N)
{
    let i;
    for(i=2;i<=parseInt(N/2);i++)
    {
        if(N%i===0)
            return 0;
    }
    if(i===parseInt(N/2)+1)
        return 1;
    else
        return 0;
}

function nextPrime(N)
{
    while(true)
    {
        N+=1;
        if(checkPrime(N))
        {
            console.log(N);
            break;
        }
    }
}

function primeBetween(a,b)
{
    for(let N=(a<b?a:b);N<=(a>b?a:b);N++)
    {
        if(checkPrime(N))
            console.log(N+" ");
    }
}

function armstrong(N)
{
    let r, p=0;
    let num = N;
    while(N)
    {
        r = N%10;
        p = p+(r**3);
        let d = (N+'').split('')
        d.pop();
        d = d.join('');
        N = parseInt(d);
    }
    if(num === p)
        return 1;
    else
        return 0;
}

function armstrongInRange(a,b)
{
    for(let N=(a<b?a:b); N<=(a>b?a:b); N++)
    {
        if(armstrong(N))
            console.log(N+" ");
    }
}

function removeOccurence(num,d)
{
    let arr = (num+'').split('');
    const newArray = arr.filter(char=>char!=d)
    const ans = parseInt(newArray.join(''));
    console.log(ans)
    return ans;
}

