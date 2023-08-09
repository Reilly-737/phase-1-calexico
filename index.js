const menuItems = document.querySelector("#menu-items");
const cartSpan = document.querySelector("#number-in-cart");

const makeSpan = (item) => {
  const span = document.createElement("span");
  span.addEventListener("click", () => {
    renderDetails(item);
  });
  span.textContent = item.name;
  menuItems.append(span);
};

const makeList = (items) => {
  items.forEach((items) => {
    makeSpan(items);
  });
};
fetch("http://localhost:3000/menu")
  .then((r) => r.json())
  .then((items) => {
    makeList(items);
    renderDetails(items[0]);
  });

const renderDetails = (item) => {
  const image = document.querySelector("#dish-image");
  image.src = item.image;
  const name = document.querySelector("#dish-name");
  name.textContent = item.name;
  const desc = document.querySelector("#dish-description");
  desc.textContent = item.description;
  const price = document.querySelector("#dish-price");
  price.textContent = `$${item.price.toFixed(2)}`;
};

const form = document.querySelector("#cart-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("submitted");
  const inputValue = form["cart-amount"].value;
  const cartSpan = document.querySelector("#number-in-cart");
  const currentValue = cartSpan.textContent;
  const newValue = parseInt(currentValue) + parseInt(inputValue);
  cartSpan.textContent = newValue;
  form.reset();
});
