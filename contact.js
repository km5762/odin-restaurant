function createContact() {
  const content = document.querySelector(".content");
  const contact = document.createElement("div");
  const call = document.createElement("p");
  const email = document.createElement("p");
  const address = document.createElement("p");
  contact.classList.add("contact");

  call.textContent = "Give us a call at (999) - 999 - 999";
  email.textContent = "Or, shoot us an email at tartinebakery@gmail.com";
  address.textContent = "Visit our bakery at 12300 Bleker St. LA CA";

  contact.appendChild(call);
  contact.appendChild(email);
  contact.appendChild(address);
  content.appendChild(contact);
}

export default createContact;
