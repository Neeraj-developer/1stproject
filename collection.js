// Product Data Array
const products = [
    {
        name: "Red Men Shoes",
        price: "Rs.999.00",
        image: "https://porto-demo5.myshopify.com/cdn/shop/products/GreyMenSportsCap1_200x200_crop_center.jpg?v=1599495679"
    },
    {
        name: "Blue Sports Shoes",
        price: "Rs.1,299.00",
        image: "https://via.placeholder.com/200"
    },
    {
        name: "Black Running Shoes",
        price: "Rs.1,499.00",
        image: "https://via.placeholder.com/200"
    },
    {
        name: "Green Casual Shoes",
        price: "Rs.799.00",
        image: "https://via.placeholder.com/200"
    },
    {
        name: "Red Men Shoes",
        price: "Rs.999.00",
        image: "https://porto-demo5.myshopify.com/cdn/shop/products/GreyMenSportsCap1_200x200_crop_center.jpg?v=1599495679"
    },
    {
        name: "Blue Sports Shoes",
        price: "Rs.1,299.00",
        image: "https://via.placeholder.com/200"
    }
];

// Reference to the Container
const container = document.getElementById("productContainer");

// Loop through Products Array and Generate HTML
products.forEach((product, index) => {
    const productCard = document.createElement("div");
    productCard.classList.add("coll_box");

    productCard.innerHTML = `
        <div class="img_box">
            <img src="${product.image}" alt="${product.name}">
            <button class="cart_animate">
                <svg width="28px" height="28px" viewBox="0 0 1 1" xmlns="http://www.w3.org/2000/svg">
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

    // Append Product Card to Container
    container.appendChild(productCard);
});

// mouseover effect slider
const proBox = document.querySelectorAll('.coll_box');
const cartAnimate = document.querySelectorAll('.cart_animate');
const quickLinkBtn = document.querySelectorAll('.quick_btn');
const fav_icon = document.querySelectorAll('.fav_icon');

// Hover effect in product box
if (proBox && quickLinkBtn) {
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
}

// Handle clicking the favorite icon
if (fav_icon) {
    fav_icon.forEach((icon, index) => {
        icon.addEventListener('click', () => {
            // Get product info to save to localStorage
            const product = products[index];
            let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

            // Check if the product is already in favorites
            const isFavorited = favorites.some(fav => fav.name === product.name);

            if (isFavorited) {
                // Remove from favorites if already added
                favorites = favorites.filter(fav => fav.name !== product.name);
                console.log(`${product.name} removed from favorites`);

                // Update icon
                icon.classList.remove('fa-solid');
                icon.classList.add('fa-regular');
            } else {
                // Add to favorites if not already added
                favorites.push(product);
                console.log(`${product.name} added to favorites`);

                // Update icon
                icon.classList.remove('fa-regular');
                icon.classList.add('fa-solid');
            }

            // Save updated favorites array to localStorage
            localStorage.setItem('favorites', JSON.stringify(favorites));
        });
    });
}

// Optional: Load favorite state on page load
document.addEventListener("DOMContentLoaded", () => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    fav_icon.forEach((icon, index) => {
        const product = products[index];
        const isFavorited = favorites.some(fav => fav.name === product.name);

        // Set the icon to solid (filled heart) if product is in favorites
        if (isFavorited) {
            icon.classList.remove('fa-regular');
            icon.classList.add('fa-solid');
        } else {
            icon.classList.remove('fa-solid');
            icon.classList.add('fa-regular');
        }
    });
});
