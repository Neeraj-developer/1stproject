// JavaScript Slider Functionality
const sliderTrack = document.getElementById('slider-track');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const sliderItems = document.querySelectorAll('.slider-item');

let itemWidth = 130 + 12; // Include gap (12px)
const totalItems = sliderItems.length;
let currentIndex = 0;
let translationCount = 0; // Counter for total translations

const MAX_TRANSLATIONS = 9; // Maximum number of translations

// Function to update the slider position
function updateSliderPosition() {
  sliderTrack.style.transition = 'transform 0.5s ease'; // Add transition for smooth effect
  sliderTrack.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

// Handle next button click
nextBtn.addEventListener('click', () => {
  if (translationCount < MAX_TRANSLATIONS) {
    if (currentIndex < totalItems - 1) {
      currentIndex++;
    } else {
      currentIndex = 0; // Loop back to the first item
    }
    translationCount++;
    updateSliderPosition();
  } else {
    console.log("Maximum translations reached.");
  }
});

// Handle previous button click
prevBtn.addEventListener('click', () => {
  if (translationCount > 1) {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = totalItems - 1; // Loop back to the last item
    }
    translationCount--;
    updateSliderPosition();
  } else {
    console.log("Maximum translations reached.");
  }
});

// Adjust item width dynamically on window resize
window.addEventListener('resize', () => {
  itemWidth = sliderItems[0].offsetWidth + 12; // Recalculate the width including the gap
  updateSliderPosition();
});

// Initial slider position
updateSliderPosition();
