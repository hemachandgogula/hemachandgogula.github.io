var n=new Array();
function add()
{
    var a=document.getElementById("arr").value;
    n.push(parseInt(a));
    document.getElementById("arr").value="";
}
function sixt(){
    var m=document.getElementById("num").value;
    var c=parseInt(m);
    //alert(n);
   arr(n,c);  
}
function arr(n,c)
{ 
    document.getElementById("res").innerHTML=n+"<br>";
    var i,j;
    for(i=0;i<n.length;i++)
    {
        for(j=i+1;j<n.length;j++)
        {
        
        if(n[i]+n[j]==c)
        {
            document.getElementById("res").innerHTML+="\""+n[i]+"\, "+n[j]+"\"<br>";                  
        }
        }
    }
}