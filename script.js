
function compute()
{
    alert("hiiii")
    var principal = document.getElementById("principal").value;
    principal_validation();
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var amount = parseInt(principal) + interest;
    document.getElementById("interest").innerText=interest;
    var res = "If you deposit "+principal+",\nat an interest rate of "+rate+"%\nYou will receive an amount of "+amount+",\nin the year "+year+"\n";
    res.replace(principal,'<b>'+principal+'</b>')
    document.getElementById("result").innerText= res;
  
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}       
function principal_validation(){
    var principal = document.getElementById("principal").value;
    if(principal<=0){
            alert("Enter a positive number")
        }
    }
