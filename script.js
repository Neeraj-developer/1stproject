// Wait for the window to fully load
window.addEventListener('load', () => {
    // Display the loader for 5 seconds
    setTimeout(() => {
        // Hide the loader
        document.getElementById('loader').style.display = 'none';

        // Show the main content
        document.getElementById('content').style.display = 'block';
    }, 2000); // 5 seconds delay
});
const hoverItems = document.querySelectorAll('.li');
// Loop through each parent <li>
hoverItems.forEach((item) => {
    const dropdown = item.querySelector('.hover_link'); // The dropdown <ul>
    const icon = item.querySelector('.fa-angle-down, .fa-angle-right'); // The icon

    item.addEventListener('click', () => {
        // Check if the current dropdown is already open
        const isCurrentlyOpen = dropdown.classList.contains('ulShow');

        // Close all dropdowns and reset all icons
        hoverItems.forEach((otherItem) => {
            const otherDropdown = otherItem.querySelector('.hover_link');
            // const otherIcon = otherItem.querySelector('.fa-angle-down, .fa-angle-right');

            if (otherDropdown) {
                otherDropdown.classList.remove('ulShow'); // Hide all dropdowns
            }

        });

        // If it wasn't open before, open the clicked one
        if (!isCurrentlyOpen) {
            dropdown.classList.add('ulShow'); // Show the dropdown

            if (icon) {
                // icon.classList.remove('fa-angle-down');
                // icon.classList.add('fa-angle-right');
            }
        }
    });
});
// responsive cliked bar
const bars = document.getElementById('bar')
const slide = document.getElementById('slide')
const closebtn = document.getElementById('closebtn')

bars.addEventListener('click', () => {
    if (slide.classList.contains('slide')) {
        slide.classList.add('slideopen')
    } else {
        slide.classList.remove('slideopen')
    }
})
closebtn.addEventListener('click', () => {
    if (slide.classList.contains('slideopen')) {
        slide.classList.remove('slideopen')
    }
});
// searchbtn close or open using according to window.innerwidh
const search_btn = document.getElementById('search_btn');
const input = document.getElementById('input');
const search_icon = document.getElementById('search_icon');
const searchclose = document.getElementById('searchclose');
const search_overlay_div = document.getElementById('search_overlay_div');

// Function to handle the click event
function handleSearchClick() {
    search_btn.classList.add('show');
    input.classList.add('inputshow');
    search_icon.classList.add('search_icon_bg');
    searchclose.classList.add('closeshow');
    search_overlay_div.classList.add('search_overlay');
}

function handleSearchClose() {
    search_btn.classList.remove('show');
    input.classList.remove('inputshow');
    search_icon.classList.remove('search_icon_bg');
    searchclose.classList.remove('closeshow');
    search_overlay_div.classList.remove('search_overlay');
}
search_overlay_div.addEventListener('click', () => {
    search_btn.classList.remove('show');
    input.classList.remove('inputshow');
    search_icon.classList.remove('search_icon_bg');
    searchclose.classList.remove('closeshow');
    search_overlay_div.classList.remove('search_overlay');
})
// Function to add or remove event listeners based on window width
function updateEventListeners() {
    if (window.innerWidth <= 874) {
        // Add event listeners if width is <= 874px
        search_icon.addEventListener('click', handleSearchClick);
        searchclose.addEventListener('click', handleSearchClose);
    } else {
        // Remove event listeners if width > 874px
        search_icon.removeEventListener('click', handleSearchClick);
        searchclose.removeEventListener('click', handleSearchClose);
    }
}
// Initial check when the page loads
updateEventListeners();
// Update event listeners when the window is resized
window.addEventListener('resize', updateEventListeners);
// slide right to left
const cart_btn = document.getElementById("cart_btn");
const cart_closebtn = document.getElementById("cart_closebtn");
const ret_shop_btn = document.getElementById("ret_shop_btn");
const slider_cart = document.getElementById("slider_cart");
const overlay_div = document.getElementById('overlay_div');


// to display cart slide
cart_btn.addEventListener("click", () => {
    slider_cart.classList.add('to_left');
    overlay_div.classList.add('remove_overlay');
});
// to hide cart slide
cart_closebtn.addEventListener('click', () => {
    slider_cart.classList.remove('to_left');
    overlay_div.classList.remove('remove_overlay');
});
// to hide cart slide click the return the shop btn
ret_shop_btn.addEventListener('click', () => {
    slider_cart.classList.remove('to_left');
    overlay_div.classList.remove('remove_overlay');
});
// overlay click
overlay_div.addEventListener("click", () => {
    slider_cart.classList.remove('to_left');
    overlay_div.classList.remove('remove_overlay');

});
// image slider
const leftBtn = document.getElementById('left_slide');
const rightBtn = document.getElementById('right_slide');
const slider_inner = document.getElementById('slider_inner');
const images = document.querySelectorAll('.slider_images');
let slideNumbar = 1; // Starts at the first image
const slideImgLength = images.length; // Total number of images
// for loop for dots 
const sliderDotsBox = document.getElementById('image_dot_box');
for (let i = 0; i < slideImgLength; i++) {
    const imageDots = document.createElement('div');
    imageDots.className = 'image_dot';
    sliderDotsBox.appendChild(imageDots);
};
const imageDotBtns = document.querySelectorAll('.image_dot');
imageDotBtns[0].style.backgroundColor = '#2C3E50';
function resetBg() {
    imageDotBtns.forEach((imageDotBtn) => {
        imageDotBtn.style.backgroundColor = 'transparent'
    });
}
imageDotBtns.forEach((imageDotBtn, i) => {
    imageDotBtn.addEventListener('click', () => {
        resetBg();
        slider_inner.style.transform = `translateX(-${i*100}%)`;
        slideNumbar = i + 1;
        imageDotBtn.style.backgroundColor = 'white';
    });
});

function changeColor(){
    resetBg();
    imageDotBtns[slideNumbar - 1].style.backgroundColor = '#2C3E50'
}

leftBtn.addEventListener('click', () => {
    if (slideNumbar > 1) {
        slideNumbar--; // Move to the previous slide
    } else {
        slideNumbar = slideImgLength; // Loop back to the last slide
    }
    changeColor();
    slider_inner.style.transform = `translateX(-${(slideNumbar - 1) * 100}%)`;
});

rightBtn.addEventListener('click', () => {
    if (slideNumbar < slideImgLength) {
        slideNumbar++; // Move to the next slide
    } else {
        slideNumbar = 1; // Loop back to the first slide
    }
    changeColor();
    slider_inner.style.transform = `translateX(-${(slideNumbar - 1) * 100}%)`;
});
// autoslide 1sr image slider
let slideInterval;

const startSlideShow = () => {
    slideInterval = setInterval(() => {
        if (slideNumbar < slideImgLength) {
            slideNumbar++; // Move to the next slide
        } else {
            slideNumbar = 1; // Loop back to the first slide
        }
        changeColor();
        slider_inner.style.transform = `translateX(-${(slideNumbar - 1) * 100}%)`;
    }, 7000);
}
startSlideShow();
// this is for filtercontainer

document.addEventListener("DOMContentLoaded", () => {
    console.log("resize ");
    
    let filterBtn = document.getElementById("filter_box");
    let filSlide = document.getElementById("fill_app_box");
    let cros_fil_slide = document.getElementById("cros_fil_slide");
    let slide_filter_btn = document.getElementById("main_filter_btn");


    if (window.innerWidth < 874) {
        function forMobile(){
            console.log("less");
            filterBtn.addEventListener('click', () => {
                filSlide.classList.toggle('dis_none_mob');  //
                if (filSlide.classList.contains('dis_none_mob')) {
                    console.log("fixed position");
                    filSlide.classList.add('dis_none_mob')
                    console.log("Class 'dis_none_mob' is added.");
                } else {
                    filSlide.classList.remove('dis_none_mob')
                    console.log("Class 'dis_none_mob' is removed.");
                }
            });
            cros_fil_slide.addEventListener('click', () => {
                filterBtn.click();
                console.log("cross btn cliked");
            })
            slide_filter_btn.addEventListener("click", () => {
                filterBtn.click();
                console.log("slide filter clicked");
            })
        };
        forMobile();
    } else{
        function fillSlide(){
            let sel_link_box = document.getElementById("sel_link_box");
            console.log("else condition");
            
            if (!filSlide.classList.contains('sliding')){
                sel_link_box.classList.add('fixed');
                filSlide.classList.add('sliding');
                document.body.style.overflowX = ""; 
            } else{
                sel_link_box.classList.remove('fixed');
                filSlide.classList.remove('sliding');
                document.body.style.overflowX = "hidden"; 
            }
        }
        filterBtn.addEventListener("click", () => {
            fillSlide();
            console.log("filter btn click scren size is more");
            
        });
    };
});



// collection slider
// JavaScript Slider Functionality
// const sliderTrack = document.getElementById('slider-track');
// const prevBtn = document.getElementById('prevBtn');
// const nextBtn = document.getElementById('nextBtn');
// const sliderItems = document.querySelectorAll('.slider-item');

// let itemWidth = 130 + 12; // Include gap (12px)
// const totalItems = sliderItems.length;
// let currentIndex = 0;
// let translationCount = 0; // Counter for total translations
// let MAX_TRANSLATIONS = 2; // Default value (for screen width > 768px)

// // Function to update the slider position
// function updateSliderPosition() {
//   sliderTrack.style.transition = 'transform 0.5s ease'; // Add transition for smooth effect
//   sliderTrack.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
// }

// // Handle next button click
// nextBtn.addEventListener('click', () => {
//   if (translationCount < MAX_TRANSLATIONS) {
//     if (currentIndex < totalItems - 1) {
//       currentIndex++;
//     } else {
//       currentIndex = 0; // Loop back to the first item
//     }
//     translationCount++;
//     updateSliderPosition();
//   } else {
//     console.log("Maximum translations reached.");
//   }
// });

// // Handle previous button click
// prevBtn.addEventListener('click', () => {
//   if (translationCount > 0) {
//     if (currentIndex > 0) {
//       currentIndex--;
//     } else {
//       currentIndex = totalItems - 1; // Loop back to the last item
//     }
//     translationCount--;
//     updateSliderPosition();
//   } else {
//     console.log("Maximum translations reached.");
//   }
// });

// // Adjust item width dynamically on window resize
// window.addEventListener('resize', () => {
//   itemWidth = sliderItems[0].offsetWidth + 12; // Recalculate the width including the gap
//   // Adjust MAX_TRANSLATIONS based on window width
//   if (window.innerWidth > 768) {
//     MAX_TRANSLATIONS = 2;
//   } else {
//     MAX_TRANSLATIONS = 7;
//   }
//   updateSliderPosition();
// });

// // Initial slider position
// updateSliderPosition();

