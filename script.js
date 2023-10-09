// Define an array of dog objects with information about each cat.
const CATS = [
  {
    name: "Rick",
    img: "assets/cat1.jpeg",
    fur: "grey",
    breed: "british-shorthair",
    age: 5,
    kitten: false,
  },
  {
    name: "Morty",
    img: "assets/cat2.webp",
    fur: "golden",
    breed: "british-shorthair",
    age: 10,
    kitten: false,
  },
  {
    name: "Leo",
    img: "assets/cat3.jpeg",
    fur: "mixed",
    breed: "bengal",
    age: 1,
    kitten: true,
  },
  {
    name: "Fluffy",
    img: "assets/cat4.jpeg",
    fur: "mixed",
    breed: "norwegian-forestcat",
    age: 0.6,
    kitten: true,
  },
  {
    name: "Michael",
    img: "assets/cat5.jpeg",
    fur: "grey",
    breed: "ragdoll",
    age: 0.2,
    kitten: true,
  },
  {
    name: "Kevin",
    img: "assets/cat6.jpeg",
    fur: "mixed",
    breed: "ragdoll",
    age: 8,
    kitten: false,
  },
  {
    name: "Pam",
    img: "assets/cat7.jpeg",
    fur: "grey",
    breed: "norwegian-forestcat",
    age: 9,
    kitten: false,
  },
];

// Initialize an empty array to store favorite cats.
const faveCats = [];

// Get references to HTML elements using their IDs.
const container = document.getElementById("container");
const favorites = document.getElementById("favorites");
const filterDropdown = document.getElementById("filterDropdown");

// Function to load and display the list of cats.
const loadCats = (catArray) => {
  container.innerHTML = "";

  catArray.forEach((cat) => {
    container.innerHTML += `
    <div class="card">
      <h2>${cat.name}</h2>
      <p>Age: ${cat.age} years old</p>
      <button onclick="addToFaves('${cat.name}')">Add to favories</button>
      <img src=${cat.img} art=${cat.name}>
    </div>
      `;
  });
};

// Function to filter and display cats based on breed.
const filterCats = () => {
  // Get the selected value from the filter dropdown.
  const value = filterDropdown.value;

  if (value === "all") {
    loadCats(CATS);
  } else {
    // Otherwise, filter cats based on breed and load the filtered list.
    const filteredList = CATS.filter((cat) => cat.breed === value);

    loadCats(filteredList);
  }
};



// Function to sort cats by age in ascending order (youngest to oldest)
const sortCatsByAgeAscending = () => {
  CATS.sort((cat1, cat2) => cat1.age - cat2.age);
  loadCats(CATS);
};

// Function to sort cats by age in descending order (oldest to youngest)
const sortCatsByAgeDescending = () => {
  CATS.sort((cat1, cat2) => cat2.age - cat1.age);
  loadCats(CATS);
};

// Add event listeners to the sort buttons
const sortYoungestButton = document.getElementById("sortYoungest");
const sortOldestButton = document.getElementById("sortOldest");

sortYoungestButton.addEventListener("click", sortCatsByAgeAscending);
sortOldestButton.addEventListener("click", sortCatsByAgeDescending);




// Function to add a cat to the list of favorite dogs.
const addToFaves = (cat) => {
  // Push the cat's name to the favorite cats array.
  faveCats.push(cat);
  // Update the display of favorite cats.
  loadFaves();
};

// Function to display the list of favorite cats.

const loadFaves = () => {
  // Clear the favorites element's content.
  favorites.innerHTML = "";
  // Iterate through the favorite cats array and display their names.
  faveCats.forEach((cat) => {
    favorites.innerHTML += ` <p>${cat}</p>`;
  });
};

// Apply the filter when the user changes the dropdown selection.
filterDropdown.addEventListener("change", filterCats);
// Load the initial list of cats when the page loads.
loadCats(CATS);
