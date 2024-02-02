function greeting(name) {
    alert("Olá " + name);
}

function processUserInput(callback) {  
    var name = prompt("Por favor insira seu nome.");
    callback(name);
}

function calculate(a, b, callback) {
    callback(a + b);
}
function displayResult(result) {
    document.getElementById("result").innerHTML = "The result is: " + result;
}

calculate(2, 3, displayResult);

/*processUserInput(greeting);

const nums = [1,2,3,4,5];
nums.forEach(function(num) {
    console.log(num);
    document.getElementById("num").innerHTML += num + "<br>";
});
*/