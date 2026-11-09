// Storing information about the products
const products = [

    {
        name: "Carbonara",
        description: "VillaSerenita's signature dish, the Carbonara.",
        price: 130,
        image: "Carbonara.jpg"
    },

    {
        name: "Frutti di Mare",
        description: "A classic seafood dish.",
        price: 110,
        image: "Frutti.jpg"
    },

    {
        name: "Cacio e Pepe",
        description: "A simple but classic Roman pasta dish.",
        price: 105,
        image: "Cacio.jpg"
    },

    {
        name: "Risotto",
        description: "A creamy, slow-cooked rice dish made using starchy Italian rice and broth.",
        price: 70,
        image: "Risotto.jpg"
    },

    {
        name: "Aperol Spritz",
        description: "A bright orange pre-dinner drink made with Prosecco, Aperol and soda water.",
        price: 85,
        image: "Aperol Spritz.jpg"
    },

    {
        name: "Campari",
        description: "A deep red, bitter herbal liqueur often served on the rocks or with soda.",
        price: 90,
        image: "Campari.jpg"
    }

];


// Find the HTML elements
const productContainer = document.getElementById("product-list");
const searchInput = document.getElementById("search-input");
const sortSelect = document.getElementById("sort-products");
const noResults = document.getElementById("no-results");


// Dynamically display products
function displayProducts(productArray) {

    // Clear existing products
    productContainer.innerHTML = "";

    // Check if products are available
    if (productArray.length === 0) {

        noResults.hidden = false;
        return;

    }

    noResults.hidden = true;

    // Display each product
    productArray.forEach(function(product) {

        const card = document.createElement("article");
        card.classList.add("product-card");


        // Create product image
        const image = document.createElement("img");
        image.src = product.image;
        image.alt = product.name;
        image.width = 250;
        image.height = 200;


        // Create product name
        const name = document.createElement("h2");
        name.classList.add("product-name");
        name.textContent = product.name;


        // Create product description
        const description = document.createElement("p");
        description.classList.add("product-description");
        description.textContent = product.description;


        // Create product price
        const price = document.createElement("p");
        price.classList.add("product-price");
        price.textContent = "R" + product.price;


        // Add elements to product card
        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(description);
        card.appendChild(price);


        // Add card to the page
        productContainer.appendChild(card);

    });

}


// Search and sort products
function filterAndSortProducts() {

    // Get search input
    const searchValue = searchInput.value.toLowerCase().trim();


    // Filter products by name or description
    let filteredProducts = products.filter(function(product) {

        return (
            product.name.toLowerCase().includes(searchValue) ||
            product.description.toLowerCase().includes(searchValue)
        );

    });


    // Get selected sorting option
    const sortValue = sortSelect.value;


    // Sort products alphabetically
    if (sortValue === "name-asc") {

        filteredProducts.sort(function(a, b) {

            return a.name.localeCompare(b.name);

        });

    }


    // Sort prices from lowest to highest
    else if (sortValue === "price-asc") {

        filteredProducts.sort(function(a, b) {

            return a.price - b.price;

        });

    }


    // Sort prices from highest to lowest
    else if (sortValue === "price-desc") {

        filteredProducts.sort(function(a, b) {

            return b.price - a.price;

        });

    }


    // Display filtered and sorted products
    displayProducts(filteredProducts);

}


// Search event listener
searchInput.addEventListener("input", filterAndSortProducts);


// Sorting event listener
sortSelect.addEventListener("change", filterAndSortProducts);


// Display all products when the page loads
displayProducts(products);
