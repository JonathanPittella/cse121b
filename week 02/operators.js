var a = 2;
var b = 2;
var c = 1;
var d = "0";
var e = "0";
var seventy = 70;
var ten = 10;

var adition = a + b;
var multiplication = a * b;
var subtraction = a - c;
var concatenation = d + e;
var valueinvariable = seventy + 3;
var comparetwo = (a === b);
var comparetoo = (a === c);
var lessthan_a = (a < c);
var lessthan_c = (c < a);
var lessandgreater = (a < ten) && (ten > 0);
var lessandgreater_b = (ten < a) && (0 > ten);

document.getElementById("valuea").innerHTML = "Value a: " + a;

document.getElementById("valueb").innerHTML = "Value b: " + b;

document.getElementById("valuec").innerHTML = "Value c: " + c;

document.getElementById("adition").innerHTML = "Result: " + adition;

document.getElementById("multiplication").innerHTML = "Result: " + multiplication; 

document.getElementById("subtraction").innerHTML = "Result: " + subtraction;

document.getElementById("concatenation").innerHTML = "Result: " + concatenation;

document.getElementById("valueinvariable").innerHTML = "Result: " + valueinvariable;

document.getElementById("comparetwo").innerHTML = "Result: (a == b): " + comparetwo;

document.getElementById("comparetoo").innerHTML = "Result: (a == c): " + comparetoo;

document.getElementById("lessthan_a").innerHTML = "Result: (a < c): " + lessthan_a;

document.getElementById("lessthan_c").innerHTML = "Result: (c < a): " + lessthan_c;

document.getElementById("lessandgreater").innerHTML = "Result: (a < ten): " + lessandgreater;

document.getElementById("lessandgreater_b").innerHTML = "Result: (ten < a): " + lessandgreater_b;