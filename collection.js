// Product Data Array
const products = [
    {
        id: 1,
        datasetName: "women",
        name: "Women's Printed Dress",
        price: "Rs.399.00",
        image: "https://images.bewakoof.com/t1080/women-s-white-all-over-printed-oversized-dress-582002-1726836740-1.jpg"
    },
    {
        datasetName: "men",
        name: "Men's Black T-shirt",
        price: "Rs.499.00",
        image: "https://images.bewakoof.com/t640/men-s-black-t-shirt-106-1701423878-1.jpg"
    },
    {
        datasetName: "shoes",
        name: "Black Sports Shoes",
        price: "Rs.1,095.00",
        image: "https://images.bewakoof.com/t1080/men-s-black-sports-shoes-651218-1729070381-1.jpg"
    },
    {
        datasetName: "men",
        name: "Men's Black Joggers",
        price: "Rs.1,199.00",
        image: "https://images.bewakoof.com/t640/men-s-black-joggers-330841-1727418974-1.jpg"
    },
    {
        datasetName: "women",
        name: "Women's Brown Jacket",
        price: "Rs.1,699.00",
        image: "https://images.bewakoof.com/t640/women-s-brown-dramatic-graphic-printed-super-loose-jacket-597102-1725341520-1.jpg"
    },
    {
        datasetName: "women",
        name: "Printed Oversized T-shirt",
        price: "Rs.899.00",
        image: "https://images.bewakoof.com/t640/women-s-granite-green-bambi-sketch-graphic-printed-oversized-t-shirt-647243-1733230733-1.jpg"
    },
    {
        datasetName: "men",
        name: "Men's Black T-shirt",
        price: "Rs.499.00",
        image: "https://images.bewakoof.com/t640/men-s-black-t-shirt-106-1701423878-1.jpg"
    },
    {
        datasetName: "shoes",
        name: "Black Sports Shoes",
        price: "Rs.1,095.00",
        image: "https://images.bewakoof.com/t1080/men-s-black-sports-shoes-651218-1729070381-1.jpg"
    },
    {
        datasetName: "men",
        name: "Men's Black Joggers",
        price: "Rs.1,199.00",
        image: "https://images.bewakoof.com/t640/men-s-black-joggers-330841-1727418974-1.jpg"
    }
];


// Reference to the Container
const container = document.getElementById("productContainer");

// Loop through Products Array and Generate HTML
products.forEach((product, index) => {
    const productCard = document.createElement("div");
    productCard.classList.add("coll_box");
    productCard.dataset.name = product.datasetName; // Set dataset name for filtering
    productCard.innerHTML = `
        <div class="img_box">
            <img src="${product.image}" alt="${product.name}">
            <button class="cart_animate cart_click">
                <svg class="cart_icon_pro" width="21px" height="21px" viewBox="0 0 1 1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.957 0.3H0.257L0.2 0.067H0.043v0.033h0.131l0.162 0.67a0.083 0.083 0 0 0 -0.06 0.08 0.083 0.083 0 1 0 0.167 0c0 -0.019 -0.006 -0.036 -0.017 -0.05h0.234a0.083 0.083 0 0 0 -0.017 0.05 0.083 0 1 0 0.083 -0.083H0.37l-0.016 -0.067h0.468L0.957 0.3zM0.41 0.85c0 0.028 -0.022 0.05 -0.05 0.05s-0.05 -0.022 -0.05 -0.05 0.022 -0.05 0.05 -0.05 0.05 0.022 0.05 0.05m0.367 0a0.05 0.05 0 0 1 -0.1 0 0.05 0.05 0 0 1 0.1 0m-0.431 -0.183L0.265 0.333h0.646L0.797 0.667z" fill="#000"></path>
                </svg>
            </button>
            <div class="quick_btn">Quick View</div>
        </div>
        <div class="pro_info">
            <div class="box1">
                <span>${product.name}</span>
                <i class="fa-regular fa-heart fav_icon" id="fav_icon_${index}"></i>
            </div>
            <p>${product.price}</p>
        </div>
    `;
    container.appendChild(productCard);
});

// Hover effect in product box
const proBox = document.querySelectorAll('.coll_box');
const cartAnimate = document.querySelectorAll('.cart_animate');
const quickLinkBtn = document.querySelectorAll('.quick_btn');
const fav_icon = document.querySelectorAll('.fav_icon');
const slideCart = document.querySelector(".slide_cart_click ");
const overlayCart = document.querySelector(".overlay_cart")

cartAnimate.forEach((button)=>{
    button.addEventListener("click", ()=>{
        slideCart.classList.add("to_left");
        overlayCart.classList.add("remove_overlay");
        
    })
})

// Handle mouseover and mouseleave effects
proBox.forEach((box, index) => {
    box.addEventListener('mouseover', () => {
        quickLinkBtn[index]?.classList.add('transform');
        cartAnimate[index]?.classList.add('transfor_cart');
    });
    box.addEventListener('mouseleave', () => {
        quickLinkBtn[index]?.classList.remove('transform');
        cartAnimate[index]?.classList.remove('transfor_cart');
    });
});

// Handle clicking the favorite icon
fav_icon.forEach((icon, index) => {
    icon.addEventListener('click', () => {
        const product = products[index];
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const isFavorited = favorites.some(fav => fav.name === product.name);

        if (isFavorited) {
            favorites = favorites.filter(fav => fav.name !== product.name);
            icon.classList.remove('fa-solid');
            icon.classList.add('fa-regular');
        } else {
            favorites.push(product);
            icon.classList.remove('fa-regular');
            icon.classList.add('fa-solid');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
    });
});

// Optional: Load favorite state on page load
document.addEventListener("DOMContentLoaded", () => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    fav_icon.forEach((icon, index) => {
        const product = products[index];
        const isFavorited = favorites.some(fav => fav.name === product.name);
        if (isFavorited) {
            icon.classList.remove('fa-regular');
            icon.classList.add('fa-solid');
        } else {
            icon.classList.remove('fa-solid');
            icon.classList.add('fa-regular');
        }
    });
});

// Filter functionality
const filterButton = document.querySelectorAll(".link_inner button");
const filterablecards = document.querySelectorAll(".coll_box");

const filterCards = (e) => {
    // Remove active class from the previously active filter button
    document.querySelector(".active_filter_option")?.classList.remove("active_filter_option");
    // Add active class to the clicked filter button
    e.target.classList.add("active_filter_option");

    let visibleCards = 0; // To keep track of visible cards

    filterablecards.forEach(card => {
        card.classList.add("remove_filterable_box"); // Initially hide all cards

        // If 'all' is selected or the card matches the selected category, show it
        if (e.target.dataset.name === "all" || card.dataset.name === e.target.dataset.name) {
            card.classList.remove("remove_filterable_box");
            visibleCards++;
        }
    });

    // Check if no cards are visible, and display a message if necessary
    if (visibleCards === 0) {
        const noProductMessage = document.createElement("div");
        noProductMessage.classList.add("no-product-message");
        noProductMessage.textContent = "No products available in this category.";
        container.appendChild(noProductMessage);  // Assuming `container` is where the products are displayed
    } else {
        // Remove "no products" message if any cards are visible
        const existingMessage = document.querySelector(".no-product-message");
        if (existingMessage) {
            existingMessage.remove();
        }
    }
};

// mobile devices

const leftSlideBtn = document.querySelector(".left_img_slide_btn");
const rightSlideBtn = document.querySelector(".right_img_slide_btn");
const sliderTransform = document.getElementById("multi_img_inner");
const multSlideImg = document.querySelectorAll("#multi_img_inner img");
let currentIndex = 0;

const totalImages = multSlideImg.length; // Get the total number of images
const imageWidth = multSlideImg[0].clientWidth; // Get the width of the first image
const maxTransformLarge = 3; // Allow 3 transformations on larger screens
const maxTransformSmall = 6; // Allow 6 transformations on smaller screens
let maxIndex = (window.innerWidth > 768 && window.innerWidth <= 1500) ? maxTransformLarge : maxTransformSmall; // Initial max index based on screen width
let autoSlideInterval;

// Function to handle auto-slide
function autoSlide() {
    if (currentIndex < maxIndex) {
        currentIndex++;
    } else {
        currentIndex = 0; // Restart from the first image if max limit reached
    }
    sliderTransform.style.transform = `translateX(-${imageWidth * currentIndex}px)`; // Slide to the right
}

// Function to reset auto-slide timer
function resetAutoSlide() {
    clearInterval(autoSlideInterval); // Clear the previous interval
    autoSlideInterval = setInterval(autoSlide, 3000); // Restart auto-slide with 3 seconds interval
}

// Disable sliding functionality but keep buttons visible for screen width > 1500px
function disableSliding() {
    leftSlideBtn.removeEventListener("click", leftSlideHandler);
    rightSlideBtn.removeEventListener("click", rightSlideHandler);
    clearInterval(autoSlideInterval); // Stop auto-slide
}

// Enable sliding functionality when screen width is within the allowed range
function enableSliding() {
    leftSlideBtn.addEventListener("click", leftSlideHandler);
    rightSlideBtn.addEventListener("click", rightSlideHandler);
    resetAutoSlide(); // Restart auto-slide functionality
}

// Left slide button event handler
function leftSlideHandler() {
    if (currentIndex > 0) { // Ensure we don't slide past the first image
        currentIndex--; // Decrease the index to slide left
        sliderTransform.style.transform = `translateX(-${imageWidth * currentIndex}px)`; // Slide to the left
    }
    resetAutoSlide(); // Reset auto-slide timer when user interacts
}

// Right slide button event handler
function rightSlideHandler() {
    if (currentIndex < maxIndex) {  // Ensure we don't exceed the max allowed transformations
        currentIndex++; // Increase the index to slide right
        sliderTransform.style.transform = `translateX(-${imageWidth * currentIndex}px)`; // Slide to the right
    }
    resetAutoSlide(); // Reset auto-slide timer when user interacts
}

// Initialize auto-slide if the screen width is within the allowed range
if (window.innerWidth <= 1500) {
    autoSlideInterval = setInterval(autoSlide, 3000); // Start auto-slide with 3 seconds interval
} else {
    disableSliding(); // Disable sliding for screens larger than 1500px
}

// Recalculate the maximum index and enable/disable sliding when screen size changes (responsive behavior)
window.addEventListener("resize", () => {
    if (window.innerWidth > 1500) {
        disableSliding(); // Disable sliding when screen width is greater than 1500px
    } else {
        enableSliding(); // Enable sliding when screen width is less than or equal to 1500px
    }
});

// Add event listeners to filter buttons
filterButton.forEach(button => button.addEventListener("click", filterCards));

// Reference to the select dropdown
const filterSelect = document.querySelector(".select_options");

const filterCardsm = (e) => {
    // Get the selected value from the <select> element
    const selectedCategory = e.target.value;

    // Find the currently active filter option (if any) and remove the active class
    const activeOption = document.querySelector(".active_filter_option");
    if (activeOption) {
        activeOption.classList.remove("active_filter_option");
    }

    // Find the option with the selected value and add the active class to it
    const selectedOption = Array.from(e.target.options).find(option => option.value === selectedCategory);
    if (selectedOption) {
        selectedOption.classList.add("active_filter_option");
    }

    let visibleCards = 0; // To track how many cards are visible

    filterablecards.forEach(card => {
        card.classList.add("remove_filterable_box"); // Initially hide all cards

        // If 'all' is selected or the card matches the selected category, show it
        if (selectedCategory === "all" || card.dataset.name === selectedCategory) {
            card.classList.remove("remove_filterable_box");
            visibleCards++;
        }
    });

    // Check if no cards are visible, and display a message if necessary
    const existingMessage = document.querySelector(".no-product-message");
    if (visibleCards === 0) {
        // Display message only if it doesn't already exist
        if (!existingMessage) {
            const noProductMessage = document.createElement("div");
            noProductMessage.classList.add("no-product-message");
            noProductMessage.textContent = "No products available in this category.";
            container.appendChild(noProductMessage);  // Assuming `container` is where the products are displayed
        }
    } else {
        // Remove "no products" message if any cards are visible
        if (existingMessage) {
            existingMessage.remove();
        }
    }
};

// Add event listener to the select dropdown
filterSelect.addEventListener("change", filterCardsm);