// // Your component data (replace with your actual data)
// const components = [
//     { name: "madras", link: "component1.html" },
//     { name: "Chennai", link: "component2.html" },
//     { name: "mango", link: "component3.html" },
//     // Add more components as needed
// ];

// function searchComponent() {
//     const searchInput = document.getElementById("searchInput").value.toLowerCase();
//     const searchResults = document.getElementById("searchResults");
//     const suggestions = document.getElementById("suggestions");
//     let found = false;

//     // Clear previous results
//     searchResults.innerHTML = "";
//     suggestions.innerHTML = "";

//     for (const component of components) {
//         if (component.name.toLowerCase().includes(searchInput)) {
//             const link = document.createElement("a");
//             link.href = component.link;
//             link.textContent = component.name;
//             searchResults.appendChild(link);
//             found = true;
//         } else if (component.name.toLowerCase().startsWith(searchInput)) {
//             const suggestion = document.createElement("div");
//             suggestion.textContent = component.name;
//             suggestions.appendChild(suggestion);
//         }
//     }

//     if (!found) {
//         searchResults.innerHTML = "Data not found.";
//     }
// }
const slider = document.querySelector(".slider");
const slideCount = slider.querySelectorAll(".slide").length;
const slideWidth = 100 / slideCount; // Calculate the width of each slide
let currentIndex = 0;

// Function to update the slider position
function updateSlider() {
    const translateValue = -currentIndex * slideWidth;
    slider.style.transform = `translateX(${translateValue}%)`;
}

// Function to go to the next slide
function nextSlide() {
    if (currentIndex < slideCount - 1) {
        currentIndex++;
        updateSlider();
    }
}

// Function to go to the previous slide
function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
}

// Add event listeners for navigation buttons
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);


const searchBar = document.getElementById('search-bar');
const suggestionsList = document.getElementById('suggestions');

// Simulated list of suggestions (replace this with your own data)
const suggestions = ['Bits Plani', 'IIT Jodhpur', 'Skit Jaipur','LMNIIT','MNIT'];

searchBar.addEventListener('input', () => {
    showSuggestions();
});

function showSuggestions() {
    const searchTerm = searchBar.value.toLowerCase();
    const filteredSuggestions = suggestions.filter(option => option.toLowerCase().includes(searchTerm));
    suggestionsList.innerHTML = '';
    
    if(searchTerm.length !== 0){
    filteredSuggestions.forEach(option => {
        const listItem = document.createElement('li');
        listItem.classList.add("searchedItem");
        listItem.textContent = option;
        listItem.addEventListener('click', () => {
            // Handle navigation to the selected option's link or page
            navigateToLink(option);
        });
        suggestionsList.appendChild(listItem);
    })
    }
    else{
        document.getElementsByClassName("searchedItem").remove();
    }
}

function navigateToLink(option) {
    // Define a mapping of suggestions to URLs
    const suggestionToUrl = {
        'Bits Plani': 'bits.html',
        'IIT Jodhpur': 'IIT.html',
        'Skit Jaipur': 'skit.html',
        'LMNIIT': 'lmniit.html',
        'MNIT': 'mnit.html',
        // Add more mappings as needed
    };

    const url = suggestionToUrl[option];

    if (url) {
        // Open the URL in a new browser tab
        window.open(url, '_blank');
    }
}
