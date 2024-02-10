// Declare global variables
const templesElement = document.getElementById("temples");
let templeList = [];

// Function: displayTemples
const displayTemples = (temples) => {
  templesElement.innerHTML = ""; // Clear previous content

  temples.forEach(temple => {
    // Create <article> element
    let article = document.createElement("article");

    // Create <h3> element and set templeName
    let h3 = document.createElement("h3");
    h3.textContent = temple.templeName;

    // Create <img> element and set imageUrl to src and location to alt
    let img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.location;

    // Append <h3> and <img> to <article> element
    article.appendChild(h3);
    article.appendChild(img);

    // Append <article> element to templesElement
    templesElement.appendChild(article);
  });
};

// Function: getTemples
const getTemples = async () => {
  try {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json();
    displayTemples(templeList);
  } catch (error) {
    console.error("Error fetching temple data:", error);
  }
};

// Function: reset
const reset = () => {
  templesElement.innerHTML = ""; // Clear displayed list
};

// Function: filterTemples
const filterTemples = (temples) => {
  reset(); // Clear displayed list before applying filters
  let filter = document.getElementById("filtered").value;

  switch (filter) {
    case "utah":
      displayTemples(temples.filter(temple => temple.location.includes("Utah")));
      break;
    case "notutah":
      displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
      break;
    case "older":
      displayTemples(temples.filter(temple => new Date(temple.dedicatedDate) < new Date(1950, 0, 1)));
      break;
    case "all":
      displayTemples(temples);
      break;
    default:
      console.error("Invalid filter value");
  }
};

// Event Listener: filterTemples Element change
document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) });

// Call getTemples function to fetch and display temple data
getTemples();
