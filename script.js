alert("JavaScript is working!");
document.addEventListener("DOMContentLoaded', function() {
const searchInput = document.getElementById("coffeeSearch");
const coffeeCards = document.querySelectorAll(".coffee-card");
if (searchInput) {
searchInput.addEventListener("input", function() {
const searchText = searchInput.value.toLowerCase();
coffeeCards.forEach(function(card) {
const coffeeName = card.querySelector("h3").textContent.toLowerCase();
if (coffeeName.includes(searchText)) {
card.style.display = "block";
} else {
card.style.display = "none";
}
});
});
}
const cartButtons = document.querySelectorAll(".cart-item button");
const totalText = document.querySelector(".cart-total strong");
let total = 0;
cartButtons.forEach(function(button) {
button.addEventListener("click", function() {
const item = button.parentElement;
const priceText = item.querySelector("p").textContent;
const price = parseFloat(priceText.replace("Price: £", ""));
total = total + price;
if (totalText) {
totalText.textContent = "Total: £" + total.toFixed(2);
}
button.textContent = "Added ✓";
});
});
});