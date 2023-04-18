import createHome from "./home";
import createMenu from "./menu";
import createContact from "./contact";

function createHeader() {
  const header = document.createElement("header");
  const content = document.querySelector(".content");
  const tartine = document.createElement("h1");
  tartine.textContent = "TARTINE";

  const nav = document.createElement("nav");

  const home = document.createElement("button");
  home.textContent = "Home";
  const menu = document.createElement("button");
  menu.textContent = "Menu";
  const contact = document.createElement("button");
  contact.textContent = "Contact";

  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);
  header.appendChild(tartine);
  header.appendChild(nav);

  home.addEventListener("click", () => {
    content.textContent = "";
    createHome();
  });

  menu.addEventListener("click", () => {
    content.textContent = "";
    createMenu();
  });

  contact.addEventListener("click", () => {
    content.textContent = "";
    createContact();
  });

  document.body.insertBefore(header, document.body.firstChild);
}

export default createHeader;
