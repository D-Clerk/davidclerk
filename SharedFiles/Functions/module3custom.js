// Task 1: Declaring Variables - Your code here (below this line/comment)
var totalProducts = 50;
var maxPrice = 1200;



// Task 2: Change the Background Color - Your code here (below this line/comment) 

var headerBackgroundColor = "#ffcc00";


document.getElementById('changeStyle').addEventListener('click', function () {
    const header = document.querySelector('header');
    header.style.backgroundColor = (header.style.backgroundColor === 'rgb(255, 204, 0)') ? '#333' : headerBackgroundColor;
});


// Task 3: Customizing your Web Page (Part 1) - Your code here (below this line/comment) 

let greenFontColor = "#00cc00";



function updateProductCardStyles() {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(function (card) {
        const price = parseFloat(card.querySelector('p').textContent.replace('$', ''));
        if (price <= maxPrice) {
            
            card.style.color = (card.style.color === 'rgb(0, 204, 0)') ? '#333' : greenFontColor;
        }
    });
}



// Task 4: Customizing your Web Page (Part 2) - Your code here (below this line/comment) 


var minPrice = 500;
var redFontColor = "#ff0000";


function updateProductCardStylesMinPrice() {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(function (card) {
        const price = parseFloat(card.querySelector('p').textContent.replace('$', ''));
        if (price >= minPrice) {
            card.style.color = (card.style.color === 'rgb(255, 0, 0)') ? '#333' : redFontColor;
        }

    });
}


// Task 5: Changing Font - Your code here (below this line/comment) 

var fontSize = "24px";



function updateProductCardStylesMinMaxPrice() {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(function (card) {
        const price = parseFloat(card.querySelector('p').textContent.replace('$', ''));
        if (price >= minPrice && price <= maxPrice) {
            card.style.fontSize = fontSize;
        }

    });
}


// Do not change below

document.getElementById('changeStyleMinPrice').addEventListener('click', updateProductCardStylesMinPrice);
document.getElementById('changeStyleMaxPrice').addEventListener('click', updateProductCardStyles);

const exportVariables = {};

try {
  exportVariables['totalProducts'] = totalProducts;
  exportVariables['maxPrice'] = maxPrice;
  exportVariables['headerBackgroundColor'] = headerBackgroundColor;
  exportVariables['greenFontColor'] = greenFontColor;
  exportVariables['minPrice'] = minPrice;
  exportVariables['redFontColor'] = redFontColor;
  exportVariables['fontSize'] = fontSize;
} catch (err) {}


module.exports = exportVariables
