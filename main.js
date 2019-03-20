    //Hide tipping data on load
    document.getElementById("returnData").style.display = "none";
    
    //Custom function
    function calculateTip() 
    {
        //Get data from forms
        var total = parseFloat((document.getElementById('total').value));
        var percentage = parseFloat((document.getElementById('percentage').value));
        var numOfPeople = parseFloat((document.getElementById('numOfPeople').value));

        //Do math 
        var totalTip = total * (percentage/100);
        var individualTip = (totalTip) / (numOfPeople);
        var totalWTip = (total) + (totalTip);
        var individualTotalWTip = (totalWTip) / numOfPeople;

        //Rounding
        
        totalTip = Math.round(totalTip * 100) / 100;
        totalTip = total.toFixed(2);

        individualTip = Math.round(individualTip * 100) / 100;
        individualTip = individualTip.toFixed(2);

        totalWTip = Math.round(totalWTip * 100) / 100;
        totalWTip = totalWTip.toFixed(2);

        individualTotalWTip = Math.round(individualTotalWTip * 100) / 100;
        individualTotalWTip = individualTotalWTip.toFixed(2);
        
        //Return data
        var display = document.getElementById("returnData");
        if (display.style.display === "none")
        display.style.display = "block";
        else 
        display.style.display = "none";

        document.getElementById("totalTip").innerHTML = totalTip;
        document.getElementById("individualTip").innerHTML = individualTip;
        document.getElementById("totalWTip").innerHTML = totalWTip;
        document.getElementById("individualTotalWTip").innerHTML = individualTotalWTip;
    }
