let products = [];

function loadProducts() {
 products = [
    { id: 1, name: 'Smartphone 1', price: 827.44 },
    { id: 2, name: 'Tablet 2', price: 1243.78 },
    { id: 3, name: 'Laptop 3', price: 1126.95 },
    { id: 4, name: 'Smartwatch 4', price: 532.12 },
    { id: 5, name: 'Bluetooth Speaker 5', price: 335.89 },
    { id: 6, name: 'Camera 6', price: 98.25 },
    { id: 7, name: 'Headphones 7', price: 46.33 },
    { id: 8, name: 'Drone 8', price: 1457.66 },
    { id: 9, name: 'Fitness Tracker 9', price: 609.54 },
    { id: 10, name: 'Game Console 10', price: 726.79 },
    { id: 11, name: 'Smartphone 11', price: 571.27 },
    { id: 12, name: 'Tablet 12', price: 76.11 },
    { id: 13, name: 'Laptop 13', price: 292.45 },
    { id: 14, name: 'Smartwatch 14', price: 849.19 },
    { id: 15, name: 'Bluetooth Speaker 15', price: 39.82 },
    { id: 16, name: 'Camera 16', price: 1086.75 },
    { id: 17, name: 'Headphones 17', price: 676.03 },
    { id: 18, name: 'Drone 18', price: 495.23 },
    { id: 19, name: 'Fitness Tracker 19', price: 47.98 },
    { id: 20, name: 'Game Console 20', price: 1065.16 },
    { id: 21, name: 'Smartphone 21', price: 421.35 },
    { id: 22, name: 'Tablet 22', price: 873.64 },
    { id: 23, name: 'Laptop 23', price: 401.27 },
    { id: 24, name: 'Smartwatch 24', price: 1219.05 },
    { id: 25, name: 'Bluetooth Speaker 25', price: 1402.72 },
    { id: 26, name: 'Camera 26', price: 471.11 },
    { id: 27, name: 'Headphones 27', price: 1434.08 },
    { id: 28, name: 'Drone 28', price: 897.32 },
    { id: 29, name: 'Fitness Tracker 29', price: 722.54 },
    { id: 30, name: 'Game Console 30', price: 206.18 },
    { id: 31, name: 'Smartphone 31', price: 1187.56 },
    { id: 32, name: 'Tablet 32', price: 160.66 },
    { id: 33, name: 'Laptop 33', price: 1167.74 },
    { id: 34, name: 'Smartwatch 34', price: 628.17 },
    { id: 35, name: 'Bluetooth Speaker 35', price: 998.51 },
    { id: 36, name: 'Camera 36', price: 811.71 },
    { id: 37, name: 'Headphones 37', price: 1255.73 },
    { id: 38, name: 'Drone 38', price: 130.24 },
    { id: 39, name: 'Fitness Tracker 39', price: 981.77 },
    { id: 40, name: 'Game Console 40', price: 1143.06 },
    { id: 41, name: 'Smartphone 41', price: 768.19 },
    { id: 42, name: 'Tablet 42', price: 284.27 },
    { id: 43, name: 'Laptop 43', price: 1271.02 },
    { id: 44, name: 'Smartwatch 44', price: 344.55 },
    { id: 45, name: 'Bluetooth Speaker 45', price: 325.81 },
    { id: 46, name: 'Camera 46', price: 1076.63 },
    { id: 47, name: 'Headphones 47', price: 1344.31 },
    { id: 48, name: 'Drone 48', price: 748.08 },
    { id: 49, name: 'Fitness Tracker 49', price: 1382.42 },
    { id: 50, name: 'Game Console 50', price: 488.73 }
];

    displayProducts();
}

function displayProducts() {
    const productDisplay = document.getElementById('productDisplay');
    productDisplay.innerHTML = ''; 

    products.forEach(function (product) {
        let productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `<h2>${product.name}</h2><p>$${product.price.toFixed(2)}</p>`;
        productDisplay.appendChild(productCard);
    });
}

function sortProducts() {
    products.sort(function (a, b) {
        return a.price - b.price;
    });

    displayProducts();
}

document.getElementById('loadProducts').addEventListener('click', loadProducts);
document.getElementById('sortProducts').addEventListener('click', sortProducts);
