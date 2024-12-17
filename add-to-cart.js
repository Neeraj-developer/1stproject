// Define variables
let renderData = document.querySelector('.product_box');
let renderCartData = document.querySelector('.cart_main_content');
const emptyContent = document.getElementById('empty_box_content');
const dynamicCount = document.getElementById('cart_item_count');
let cartItems = [];

// Fetch and Render Data
async function getData() {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    // Map through each product
    data.map((ele) => {
        // Create container for each product
        let productBox = document.createElement("div");
        productBox.setAttribute("class", "product_item");

        // Create elements
        let createImgEle = document.createElement("img");
        let createTitle = document.createElement("p");
        let createPriceEle = document.createElement("p");
        let btnEle = document.createElement("button");

        // Set attributes and content
        createImgEle.setAttribute("src", ele.image);
        createImgEle.setAttribute("class", "myImages");
        createTitle.setAttribute("class", "product_title");
        createTitle.innerText = ele.title;
        createPriceEle.setAttribute("class", "product_price");
        createPriceEle.innerText = `Rs. ${ele.price}`;
        btnEle.innerText = "Add To Cart";

        // Append elements to product box
        productBox.appendChild(createImgEle);
        productBox.appendChild(createTitle);
        productBox.appendChild(createPriceEle);
        productBox.appendChild(btnEle);

        // Append product box to main container
        renderData.appendChild(productBox);

        // Add to Cart functionality
        btnEle.addEventListener('click', () => addToCart(ele.image, ele.price));
    });
}
function addToCart(img, price) {
    cartItems.push({ img: img, price: price });
    emptyContent.classList.add('empty_rem');
    dynamicCount.innerText = cartItems.length;
    // Create Cart Elements
    let cartItemContainer = document.createElement("div");
    cartItemContainer.style.display = "flex";
    cartItemContainer.style.alignItems = "center";
    cartItemContainer.style.margin = "10px 0";

    let cartImgEle = document.createElement("img");
    cartImgEle.setAttribute("src", img);
    cartImgEle.setAttribute("class", "cart_image_element");

    let cartPriceEle = document.createElement("p");
    cartPriceEle.innerText = `Rs. ${price}`;
    cartPriceEle.style.marginRight = "auto";

    let cartTrashBtn = document.createElement("i");
    cartTrashBtn.setAttribute("class", "fa-solid fa-trash");
    cartTrashBtn.addEventListener('click', () => {
        // Remove item from array and update cart
        cartItems = cartItems.filter(item => item.img !== img || item.price !== price);
        renderCartData.removeChild(cartItemContainer);
        dynamicCount.innerText = cartItems.length;

        // Show empty message if cart is empty
        if (cartItems.length === 0) emptyContent.classList.remove('empty_rem');
    });

    // Append elements to cart container
    cartItemContainer.appendChild(cartImgEle);
    cartItemContainer.appendChild(cartPriceEle);
    cartItemContainer.appendChild(cartTrashBtn);

    // Append container to cart
    renderCartData.appendChild(cartItemContainer);
}
getData();
