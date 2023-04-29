function display()
{
    var dateTime=new Date();
    var hrs= dateTime.getHours();
    var min= dateTime.getMinutes();
    var sec= dateTime.getSeconds();
    var session=document.getElementById("session");
    
    
     if(hrs==12)
    {
        session="PM";
        
    }
    
    else if(hrs>12)
    {
        session="PM";
        hrs-=12;
    }
    else
    {
        session="AM";
    }
    document.getElementById('hours').innerHTML=hrs;
    document.getElementById('minutes').innerHTML=min;
    document.getElementById('seconds').innerHTML=sec; 
    document.getElementById('session').innerHTML=session;



}

setInterval(display,10);


function over()
{
    document.getElementsByTagName("body")[0].style.backgroundColor="#698269";
}

function out()
{
    document.getElementsByTagName("body")[0].style.backgroundColor="#A7727D";
}
