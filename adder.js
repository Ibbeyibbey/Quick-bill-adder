function myFunction() {
    var num1 = document.getElementById("renttext").value;
    var num2 = document.getElementById("foodtext").value;
    var num3 = document.getElementById("enttext").value;
    var num4 = document.getElementById("transtext").value;
    var num5 = document.getElementById("stutext").value;
    var total = Number(num1) + Number(num2) + Number(num3) + Number(num4) + Number(num5);
    document.getElementById("totaltext").innerHTML = total;
} 
