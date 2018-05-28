function multi(){
    var n=document.getElementById("num").value;
    var m=parseInt(n);
    document.getElementById("res").innerHTML=loo(m-1);    
}
function loo(n)
{
    if(n==0)
    {
        return 0;
    }
    if(n%3==0||n%5==0)
    {
    return n+loo(n-1);
    }
    return loo(n-1);
}