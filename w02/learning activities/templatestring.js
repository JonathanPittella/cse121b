let courseSubject = "Computer Science test";
let courseNumber = 101;
let courseCredits = 3;
let courseLength = "12 weeks test";

let temples = ["Rome", "Salt Lake", "Nauvoo"];
let listItems = "";

for (const temple of temples) {
  listItems += `<li>${temple}</li>`;
}

let output = `Welcome to ${courseSubject} ${courseNumber}! Credits: ${courseCredits} Length: ${courseLength}`;

console.log(output);

document.getElementById("output").textContent += output;

document.querySelector("#templeList").innerHTML = listItems;
