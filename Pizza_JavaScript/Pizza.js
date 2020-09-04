function getReceipt() {
    //This initializes our string so it can get passed from 
    // function to function, growing line by line into a full receipt
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    //This variable takes in the size of pizza chosen
    var sizeArray = document.getElementsByClassName("size");    
    //This for loop checks sizeArray to see if size selected.
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            //If size selected it is assigned to selectedSize varialbe.
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>";

        }

    }
    //Once size of pizza is determined sizeTotal is assigned the proper cost amount
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    //Running Total = size total and then shown on console.log
    runningTotal = sizeTotal;
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");
    //Then getTopping function is called passing values from this function 
    getTopping(runningTotal, text1);

};

//Function to include toppings in pizza purchase based on selected toppings
function getTopping(runningTotal, text1) {
    // Keeps track of total of toppings chosen
    var toppingTotal = 0;
    //Keeps track of toppings chosen
    var selectedTopping = [];
    //This variable is assigned toppings
    var toppingArray = document.getElementsByClassName("toppings");
    //For loop itterates through toppings confirms they where checked and put them in selectedTopping array
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: (" + toppingArray[j].value + ")");
            text1 = text1 + toppingArray[j].value + "<br>";
        }
    }
    // This keeps track of the topping count 
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        // First topping is free so deduction in count is made if more than one
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }
    // This tracks running total cost adding in costs for all toppings chosen 
    runningTotal = (runningTotal + toppingTotal);
    // These are log functions confirming web app is working correctly  
    console.log("total selected topping items: " + toppingCount);
    console.log(toppingCount + " topping - 1 free topping = " + "$" + toppingTotal + ".00");
    console.log("topping text1: " + text1);
    console.log("Purchase Total: " + "$" + runningTotal + ".00");

    // This shows the items chosen on the web page after selections made and button pushed
    document.getElementById("showText").innerHTML = text1;
    // This shows the total costs of selections made. If you select more items and hit button again it will keep a running total
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";
}