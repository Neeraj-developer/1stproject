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
//filter

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

// privacy checked

let labelCheck = document.getElementById("label_check");
let checkBox = document.getElementById("check_box");

labelCheck.addEventListener('click', () => {
    if (checkBox.classList.contains('checked')) {
        checkBox.classList.remove('checked');   
    } else{
        checkBox.classList.add('checked');   
    }
});

checkBox.addEventListener('click', () => {
    if (checkBox.classList.contains('checked')) {
        checkBox.classList.remove('checked');   
    } else{
        checkBox.classList.add('checked');   
    }
})
function displayUserInfo() {
    // Retrieve user info from localStorage
    const firstName = localStorage.getItem("userFirstName");
    const profileImage = localStorage.getItem("userProfileImage");

    // Debugging logs
    console.log("First Name:", firstName);
    console.log("Profile Image:", profileImage);

    // Get references to the elements
    const userInfoDiv = document.querySelector(".user_info");
    const profileIcon = document.querySelector(".profile_icon");
    const userNameSpan = document.getElementById("user_name");
    const profileImageEl = document.getElementById("profile_image");

    // Check if user data exists
    if (firstName && profileImage) {
        // Update the user info section
        userInfoDiv.style.display = "flex"; // Show user info
        userNameSpan.textContent = firstName; // Set user's first name
        profileImageEl.src = profileImage; // Set user's profile picture

        // Hide the profile SVG
        profileIcon.style.display = "none";
    } else {
        // If no user data, ensure the user info is hidden
        userInfoDiv.style.display = "none";
        profileIcon.style.display = "block";
    }
}

let newAccountBtn = document.getElementById('new_account');
let registraitionPopup = document.getElementById('registraition_popup');
let popupSlide2 = document.getElementById('loginpopup');
let backBtn2 = document.getElementById('back_btn_2');

newAccountBtn.addEventListener('click', ()=>{
    registraitionPopup.classList.add('active');
    popupSlide2.classList.remove('show')
})

backBtn2.addEventListener('click', ()=>{
    registraitionPopup.classList.remove('active');
})

let nextBtn = document.getElementById('next');
let prevBtn = document.getElementById('prev');
let submitBtn = document.getElementById('submit');
let carSlide = document.getElementById('car_slide');
let formSlide = document.getElementById('form_inner');
let proWidth = document.querySelectorAll('.pro_width');
let stepSlide = document.querySelectorAll('.step_slide');
let currentSlide = 0;

// Function to slide the progress line
function proWidthSlide(step) {
    proWidth.forEach((slide, index) => {
        if (index < step) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

// Function to slide step divs
function stepSlidePro(step) {
    stepSlide.forEach((slideDiv, index) => {
        if (index <= step) { 
            slideDiv.classList.add('active');
        } else {
            slideDiv.classList.remove('active');
        }
    });
}

// Function to update car color based on the current slide
function updateCarColor() {
    switch(currentSlide) {
        case 0:
            carSlide.style.fill = "#2a2121ab"; // Initial color
            break;
        case 1:
            carSlide.style.fill = "#a3bfdb"; // Second step color
            break;
        case 2:
            carSlide.style.fill = "#347ec8"; // Third step color (example)
            break;
        case 3:
            carSlide.style.fill = "#2C3E50"; // Fourth step color (example)
            break;
        default:
            carSlide.style.fill = "#2C3E50"; // Default color if new steps are added
    }
}

// Function to handle the translation of the car based on screen width
function updateCarPosition() {
    let translation = currentSlide * (window.innerWidth >= 520 ? 110 : 90);
    carSlide.style.transform = `translateX(${translation}px)`;
}

// Function to handle form sliding
function updateFormPosition() {
    let translation;

    if (window.innerWidth <= 520) {
        translation = currentSlide * -100; // Each slide moves by percentage for very small screens
        formSlide.style.transform = `translateX(${translation}%)`;
    } else if (window.innerWidth <= 768) {
        translation = currentSlide * -500; // Each slide moves by 500px for medium screens
        formSlide.style.transform = `translateX(${translation}px)`;
    } else {
        translation = currentSlide * -500; // Each slide moves by 500px for larger screens
        formSlide.style.transform = `translateX(${translation}px)`;
    }

    formSlide.style.transition = 'transform 0.6s linear'; // Ensure smooth transition
}
function updateFormPosition() {
    let translation;

    if (window.innerWidth <= 520) {
        translation = currentSlide * -100; // Each slide moves by percentage for very small screens
        formSlide.style.transform = `translateX(${translation}%)`;
    } else if (window.innerWidth <= 768) {
        translation = currentSlide * -500; // Each slide moves by 500px for medium screens
        formSlide.style.transform = `translateX(${translation}px)`;
    } else {
        translation = currentSlide * -500; // Each slide moves by 500px for larger screens
        formSlide.style.transform = `translateX(${translation}px)`;
    }

    formSlide.style.transition = 'transform 0.6s linear'; // Ensure smooth transition
}


// Function to show or hide buttons based on currentSlide
function toggleButtons() {
    // If on the last step
    if (currentSlide === stepSlide.length - 1) {
        nextBtn.classList.add('active'); // Hide Next button
        submitBtn.classList.add('active');  // Show Submit button
    } else {
        nextBtn.classList.remove('active');   // Show Next button
        submitBtn.classList.remove('active');  // Hide Submit button
    }

    // Show the Prev button only if not on the first slide
    if (currentSlide > 0) {
        prevBtn.classList.add('active'); // Show Prev button
    } else {
        prevBtn.classList.remove('active'); // Hide Prev button
    }
}

// Next button click event
nextBtn.addEventListener('click', () => {
    if (currentSlide < stepSlide.length - 1) {
        currentSlide++; 

        // Update progress bar and step slides
        proWidthSlide(currentSlide);
        stepSlidePro(currentSlide);

        // Apply translation for the carSlide and form
        updateCarPosition();
        updateFormPosition();

        // Update car color for the active step
        updateCarColor();

        // Toggle buttons visibility
        toggleButtons();
    }
});

// Previous button click event
prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--; // Decrement currentSlide

        // Update progress bar and step slides
        proWidthSlide(currentSlide);
        stepSlidePro(currentSlide);

        // Apply translation for the carSlide and form
        updateCarPosition();
        updateFormPosition();

        // Update car color for the active step
        updateCarColor();

        // Toggle buttons visibility
        toggleButtons();
    }
});

let checkBox2 = document.getElementById("check_box_2");

checkBox2.addEventListener('click', () => {
    if (checkBox2.classList.contains('checked')) {
        checkBox2.classList.remove('checked');   
    } else{
        checkBox2.classList.add('checked');   
    }
})

submitBtn.addEventListener('click', () => {
    // Get the values from the form fields
    let name, lastName, email, password, phoneNo, address, zipCode, images_user;
    name = document.getElementById('name').value;
    lastName = document.getElementById('lastname').value;
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;
    phoneNo = document.getElementById('phone').value;
    address = document.getElementById('address').value;
    zipCode = document.getElementById('zip').value;
    images_user = document.getElementById('photo_upload').files[0];

    if (!images_user) {
        alert("Please upload an image");
        return;
    }

    let user_record = JSON.parse(localStorage.getItem("users")) || [];

    if (user_record.some((v) => v.email === email)) {
        alert("Duplicate data");
    } else {
        // Convert image file to a base64 string
        const reader = new FileReader();
        reader.onload = () => {
            const base64Image = reader.result;

            // Push the new user data into the array
            user_record.push({
                "name": name,
                "lastName": lastName,
                "email": email,
                "password": password,
                "phone": phoneNo,
                "address": address,
                "zipCode": zipCode,
                "userImage": base64Image
            });

            // Save the updated user records back to localStorage
            localStorage.setItem("users", JSON.stringify(user_record));

            // Show a success message
            alert("Form Submitted!");
             // Redirect to another page
             window.location.href = "home.html";
            // Update the user image in the UI
            const userImageDiv = document.querySelector('.user_img img');
            userImageDiv.src = base64Image;
        };
        reader.readAsDataURL(images_user);
    }
});



// Call this function on page load
window.onload = displayUserInfo;
