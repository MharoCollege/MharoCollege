function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    // document.getElementById("mySidenav").style.color="white";
    document.getElementById("main").style.marginLeft = "250px";
  }  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

  const domainSelector = document.getElementById("domainSelector");
const coursesDiv = document.getElementById("courses");

// Sample courses data
const courses = {
    programming: ["Computer Science and Engineering", "Computer Science and Engineering (Artificial Intelligence)", "Computer Science and Engineering(Data Science)",
    "Computer Science and Engineering(IoT)","Civil Engineering","Electrical Engineering","Electronics and Communication Engineering ","Information Technology","Mechanical Engineering"],
    doctor: ["B Pharm", "D Pharm"],
    mba: ["MBA", "MTECH" ],
};

// Function to update courses based on the selected domain
function updateCourses() {
    const selectedDomain = domainSelector.value;
    const selectedCourses = courses[selectedDomain];

    // Clear previous courses
    coursesDiv.innerHTML = "";

    if (selectedCourses) {
        selectedCourses.forEach(course => {
            const courseElement = document.createElement("li"); // Use 'p' instead of 'h' for paragraphs
            courseElement.textContent = course;
            coursesDiv.appendChild(courseElement);
        });
    } else {
        coursesDiv.textContent = "No courses available for this domain.";
    }
}

// Event listener for domain selection change
domainSelector.addEventListener("change", updateCourses);

// Initialize courses on page load
updateCourses();

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
prevBtn.addEventListener("click", prevSlide);

