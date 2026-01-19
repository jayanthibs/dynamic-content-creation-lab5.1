// selecting elements and assigning it to variables
const productNameInput = document.getElementById("product-name");
const productPriceInput = document.getElementById("product-price");
const productQuantity = document.getElementById("quantity");
const addProductButton = document.getElementById("add-product");
const cart = document.getElementById("cart");
const totalPriceSpan = document.getElementById("total-price");
let totalPrice = 0;

// Function to update the total price
function updateTotalPrice(amount, quantity) {
  amount = amount * quantity;
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}

// Function to remove an item
function removeItem(event) {
  const item = event.target.closest("li");
  const price = parseFloat(item.dataset.price);
  const quantity = parseFloat(item.dataset.quantity);
  updateTotalPrice(-price, quantity);
  item.remove();
}

// Create column headings
const header = document.createElement("li");
header.classList.add("cart-header");

["Product", "Price", "Quantity", "Action"].forEach((text) => {
  const span = document.createElement("span");
  span.textContent = text;
  header.appendChild(span);
});

cart.appendChild(header);

//adding click event to add product button
addProductButton.addEventListener("click", () => {
  let newItem = {
    name: productNameInput.value,
    price: productPriceInput.value,
    quantity: productQuantity.value,
  };
  //
  if (!newItem.name || !newItem.price || !newItem.quantity) {
    alert("Please enter an item.");
    return; //exit the function
  }
  //creating list item and attaching product and price into it
  const item = document.createElement("li");
  //adding class name to the list item
  item.classList.add("cart-item");
  //adding dataset to the list item for the price
  item.dataset.price = newItem.price;
  //adding dataset to the list item for the quantity
  item.dataset.quantity = newItem.quantity;
  //creating span for product and appending it to the list item
  const name = document.createElement("span");
  name.innerText = newItem.name;
  item.appendChild(name);
  //creating span for price and appending it to the list item
  const price = document.createElement("span");
  price.innerText = newItem.price;
  item.appendChild(price);
  //creating span for quantity and appending it to the list item
  const quantity = document.createElement("span");
  quantity.innerText = newItem.quantity;
  item.appendChild(quantity);
  //creating remove button to remove item from the list item
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "remove";
  item.appendChild(deleteButton);
  //appending list item to the ul list
  cart.appendChild(item);
  //clearing input fields
  productNameInput.value = "";
  productPriceInput.value = "";
  productQuantity.value = "";

  //calling  updateTotalPrice to update the total

  updateTotalPrice(Number(newItem.price), Number(newItem.quantity));
});

// adding event listener to remove item from the list
cart.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    removeItem(event);
  }
});
