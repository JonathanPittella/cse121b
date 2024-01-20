/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = "Jonathan Pittella";
const nameElement = document.getElementById("name");
nameElement.innerHTML = `<strong>${fullName}</strong>`;

let currentYear = 2024;
const yearElement = document.querySelector("#year");
yearElement.innerHTML = currentYear;

let favoriteFood = ['Barbecue '];
favoriteFood.push(' Sushi', ' Rice', ' Potato Salad');

const myfoodElement = favoriteFood.indexOf('Barbecue', 0);
if (myfoodElement !== -1) {
    favoriteFood.splice(myfoodElement, 1);
}

const foodElement = document.getElementById("food");

foodElement.innerHTML = favoriteFood.join(', ');

for (let i = 0; i < 2; i++) {
    favoriteFood.forEach((element, index, array) => {
       foodElement.innerHTML += index == array.length - 3 ? element 
        : element + ',<br> '; });
    }

// Log the sliced array to the console
let removeElement = favoriteFood.slice(0);
console.log(removeElement);


//foodElement.innerHTML = `<br>${favoriteFood}`;

//let faviteFood = ['Barbecue '];
//favoriteFood.push(' Sushi', ' Rice', ' Potato Salad, ');

//document.getElementById("food").innerHTML = faviteFood.join(', ')

//let removeElement = favoriteFood.splice(0);
//console.log(removeElement);

//const foodElement = document.getElementById("food");
//foodElement.innerHTML = `<br>${favoriteFood}</br>`

//for (let i = 0; i < 5; i++) foodElement.innerHTML += ", " + favoriteFood.slice(0).join(", ");

const profilePicture = "images\JonathanPittella.jpeg";
const profileImage = "Profile Image of Jonathan Pittella"

let profileImageElement = document.getElementById("PlaceholderImage");
profileImageElement.src = profilePicture;
profileImageElement.alt = profileImage;