
// Storing information about the products
const products = [

    {
        name: "Carbonara",
        description: "VillaSerenita's signature dish, the Carbonara.",
        price: "R130",
        image: "Carbonara.jpg"
    },

    {
        name: "Frutti di Mare",
        description: "A classic seafood dish.",
        price: "R110",
        image: "Frutti.jpg"
    },

    {
        name: "Cacio e Pepe",
        description: "A simple but classic Roman pasta dish.",
        price: "R105",
        image: "Cacio.jpg"
    },

    {
        name: "Risotto",
        description: "A creamy, slow-cooked rice dish made using starchy Italian rice and broth.",
        price: "R70",
        image: "Risotto.jpg"
    },

    {
        name: "Aperol Spritz",
        description: "A bright orange pre-dinner drink made with Prosecco, Aperol and soda water.",
        price: "R85",
        image: "Aperol Spritz.jpg"
    },

    {
        name: "Campari",
        description: "A deep red, bitter herbal liqueur often served on the rocks or with soda.",
        price: "R90",
        image: "Campari.jpg"
    }

];


// Find the product container
const productContainer = document.getElementById("product-list");


// Dynamically display products
function displayProducts() {

    products.forEach(function(product) {

        const card = document.createElement("article");
        card.classList.add("product-card");

       
        const image = document.createElement("img");
        image.src = product.image;
        image.alt = product.name;
        image.width = 250;
        image.height = 200;

        
        const name = document.createElement("h2");
        name.classList.add("product-name");
        name.textContent = product.name;

       
        const description = document.createElement("p");
        description.classList.add("product-description");
        description.textContent = product.description;

        
        const price = document.createElement("p");
        price.classList.add("product-price");
        price.textContent = product.price;

        // Add elements to product card
        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(description);
        card.appendChild(price);

        // Add card to the page
        productContainer.appendChild(card);

    });

}


// Run the function to display each product available
displayProducts();
