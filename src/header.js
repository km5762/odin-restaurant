function createHeader() {
  const header = document.createElement("header");

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

  document.body.appendChild(header);
}

export default createHeader;
