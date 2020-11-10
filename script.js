function calculateTip() {
  var Price = document.getElementById("Bill").value;
  var Tip = document.getElementById("Tip").value;

//Calculate tip
 var total = Price * (Tip/100);
 //round to two decimal places
 total = Math.round(total * 100) / 100;
 //allows us to always have two digits after decimal point
 total = total.toFixed(2);
 //Display the tip
 document.getElementById("totalTip").innerHTML = total;

}
