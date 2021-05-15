
//Function to calculate the interest amount
function compute()
{
    var principal = document.getElementById("principal").value;
    //function call for principal validation
    principal_validation();
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var res = "If you deposit "+principal+",\nat an interest rate of "+rate+"%\nYou will receive an amount of "+interest+",\nin the year "+year+"\n";
    res.replace(principal,'<b>'+principal+'</b>');
    document.getElementById("result").innerText= res;
  
}
//Function to dynamically update the rate value
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}       
//Function for principal validation
function principal_validation(){
    var principal = document.getElementById("principal").value;
    if(principal<=0){
            alert("Enter a positive number");
            document.getElementById("principal").focus();
        }
    }
