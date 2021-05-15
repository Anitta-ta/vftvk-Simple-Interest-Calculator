
function compute()
{
    alert("hiiii")
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var amount = principal + interest;
    document.getElementById("result").innerText="If you deposit "+<b>principal</b>+",\<br\>at an interest rate of "+<b>rate</b>+"%\<br\>You will receive an amount of "+<b>amount</b>+",\<br\>in the year "+<b>year</b>+"\<br\>";
    
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}       