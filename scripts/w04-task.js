/* LESSON 4 - Programming Tasks */
let photoElement = document.querySelector("#photo");
/* Profile Object  */
/* Populate Profile Object with placesLive objects */

let myProfile = {
    name: "Jonathan Pittella",
    photo: {
        src: "images/JonathanPittella.jpeg",
        alt: "My profile Picture",
    },
    favoriteFoods: [
        'Barbecue', 
        'Sushi',
        'Rice', 
        'Potato Salad'
    ],
    hobies: [
        "Playing With my Familie",
        "Playing Video Games",
        "Reading HQs"
    ],
    placesLived: [
        "Pelotas, Brazil",
        "19 yers",
        "Sao Paulo, Brazil",
        "2 yers"
    ],
     placesLived: [
        "Pelotas, Brazil",
        "19 yers",
        "Sao Paulo, Brazil",
        "2 yers"
    ]

};

/* DOM Manipulation - Output */
/* Name */
document.querySelector("#name").innerHTML = `<em>${myProfile.name}</em>`;

/* Photo with attributes */
photoElement.src = myProfile.photo.src;
photoElement.alt = myProfile.photo.alt;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobies.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item;
    document.querySelector("#hobbies").appendChild(li);
});
/* Places Lived DataList */
myProfile.placesLived.forEach(item => {
    let li = document.createElement("li");
    if (!item.includes("years")) {
        li.textContent = "🏠 " + item;
    } else {
        li.textContent = item;
        span.textContent = item + ", ";
    }
    document.querySelector("#places-lived").appendChild(li);
});
