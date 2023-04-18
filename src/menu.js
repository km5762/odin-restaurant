function createMenu() {
  const content = document.querySelector(".content");
  const menuItems = document.createElement("div");
  menuItems.classList.add("menu-items");

  const country = createMenuItem(
    "Country",
    "$7.75-12.75",
    "../src/country.png"
  );

  const oat = createMenuItem(
    "Oat-Porridge",
    "$8.50-13.75",
    "../src/oat-porridge.png"
  );

  const buttermilk = createMenuItem(
    "Buttermilk-Loaf",
    "$12.75",
    "../src/buttermilk-loaf.png"
  );

  menuItems.appendChild(country);
  menuItems.appendChild(oat);
  menuItems.appendChild(buttermilk);
  content.appendChild(menuItems);
}

function createMenuItem(name, price, image) {
  const item = document.createElement("div");
  const textContainer = document.createElement("div");
  const itemName = document.createElement("h2");
  const itemPrice = document.createElement("p");
  const itemImg = document.createElement("img");

  item.classList.add("item");
  itemImg.setAttribute("src", image);

  itemName.textContent = name;
  itemPrice.textContent = price;

  textContainer.appendChild(itemName).appendChild(itemPrice);
  item.appendChild(textContainer);
  item.appendChild(itemImg);

  return item;
}

export default createMenu;
