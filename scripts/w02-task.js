const fullName = "Jonathan Pittella";
const currentYear = new Date().getFullYear();
const profilePicture = "images\\JonathanPittella.jpeg";

const foodElement = document.querySelector(".block");
let yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");

yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", fullName);

let favoriteFood = ['Barbecue', 'Sushi', 'Rice', 'Potato Salad'];

foodElement.innerHTML = favoriteFood.join('<br>');

let newFood = "Ice Cream";
favoriteFood.push(newFood);

let foodSlice = favoriteFood.slice();

console.log(foodSlice);
foodElement.innerHTML += `<br>${favoriteFood}`;




/*const nameElement = document.getElementById("name");
//nameElement.innerHTML = `<strong>${fullName}</strong>`;

const myfoodElement = favoriteFood.indexOf('Barbecue', 0);
if (myfoodElement !== -1) {
    favoriteFood.splice(myfoodElement, 1);
}
foodElement.innerHTML = favoriteFood.join(', ');

for (let i = 0; i < 2; i++) {
    favoriteFood.forEach((element, index, array) => {
       foodElement.innerHTML += index == array.length - 3 ? element 
        : element + ',<br> '; });
    }

 Log the sliced array to the console
let removeElement = favoriteFood.slice(0);
console.log(removeElement);


foodElement.innerHTML = `<br>${favoriteFood}`;

let faviteFood = ['Barbecue '];
favoriteFood.push(' Sushi', ' Rice', ' Potato Salad, ');

document.getElementById("food").innerHTML = faviteFood.join(', ')

let removeElement = favoriteFood.splice(0);
console.log(removeElement);

const foodElement = document.getElementById("food");
foodElement.innerHTML = `<br>${favoriteFood}</br>`

for (let i = 0; i < 5; i++) foodElement.innerHTML += ", " + favoriteFood.slice(0).join(", ");

const profileImage = "Profile Image of Jonathan Pittella"

let profileImageElement = document.getElementById("PlaceholderImage");
profileImageElement.src = profilePicture;
profileImageElement.alt = profileImage;
*/