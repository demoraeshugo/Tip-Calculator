//document.getElementById("returnData").innerHTML = calculateTip();






function calculateTip() 
{
    var total = parseFloat((document.getElementById('total').value));
    var percentage = parseFloat((document.getElementById('percentage').value));
    var numOfPeople = parseFloat((document.getElementById('numOfPeople').value));

    var totalTip = total * (percentage/100);
    
    var individualTip = (totalTip) / (numOfPeople);
    
    var totalWTip = (total) + (totalTip);
    
    var individualTotal = (totalWTip) / numOfPeople;
    
    return "The Total Tip is: $" + totalTip +
            "\nThe Individual Tip is: $" + individualTip +
            "\nThe Total with Tip is: $" + totalWTip +
            "\nThe Individual Total is: $" + individualTotal;

    //return totalTip;
    //alert("Testing" + "\n total = " + total + "\n percentage = " + percentage + "\n number of people = " + numOfPeople);
    //alert("Total Tip = $" + (totalTip).toFixed(2) + "\nIndividual Tip = $" + (individualTip).toFixed(2) + "\nTotal with Tip = $" + (totalWTip).toFixed(2) + "\nIndividual Totals with Tip = $" + (individualTotal).toFixed(2))
};

function display()
{
    
}

