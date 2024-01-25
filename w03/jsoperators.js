/*if(boolean expression){
    //code if true
}

else if(boolean expression){
    // code if true
}

else{
    //code if no other match
}

Notice the boolean expressions have parenthesis around them, and the JavaScript scope operators 
are used to indicate what lines of code executes in each condition. Here is a code example that 
evaluates the number of sales of product a company has for one day. The first condition checks 
if the number of sales is less than or equal to 50. Since the first check has been done, the second 
actually tests if the number of sales is greater than 50 and less than or equal to 1000. The default, 
'else', is the number of sales being greater than 1000.


if (numSales <= 50) {
  console.log("Way to few sales");
} else if (numSales <= 1000) {
  console.log("Average number of sales");
} else {
  console.log("A good number of sales.");
}


let grade = "A";
let gpaPoints = 0;
switch (grade) {
  case "A":
    gpaPoints = 4;
    break;
  case "B":
    gpaPoints = 3;
    break;
  default:
    gpaPoints = -1;
}

function gpaPoints(grade) {
  let gpaPoints = 0;
  switch (grade) {
    case "A":
      gpaPoints = 4;
    // break removed
    case "B":
      gpaPoints = 3;
      break;
    case "C":
      gpaPoints = 2;
    default:
      gpaPoints = -1;
  }
  return gpaPoints;
}

gpaPoints("A"); // returns 3!
gpaPoints("B"); // also returns 3
gpaPoints("C"); // returns -1!
gpaPoints("X"); // returns -1


const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
  const choice = select.value;

  if (choice === "sunny") {
    para.textContent =
      "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
  } else if (choice === "rainy") {
    para.textContent =
      "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
  } else if (choice === "snowing") {
    para.textContent =
      "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
  } else if (choice === "overcast") {
    para.textContent =
      "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
  } else {
    para.textContent = "";
  }
}

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
!!!!!!!!!!!!!!!!!!!HTML!!!!!!!!!!!!!!!!!!!!!!!!!
<label for="weather">Select the weather type today: </label>
<select id="weather">
  <option value="">--Make a choice--</option>
  <option value="sunny">Sunny</option>
  <option value="rainy">Rainy</option>
  <option value="snowing">Snowing</option>
  <option value="overcast">Overcast</option>
</select>

<p></p>

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



*/