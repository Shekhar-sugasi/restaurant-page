export function loadContact() {
  const content = document.getElementById("content");

  const headline = document.createElement("h1");
  headline.textContent = "Contact Us";

  const contactInfo = document.createElement("p");
  contactInfo.textContent = "Phone: 123-456-7890";

  const email = document.createElement("p");
  email.textContent = "queries@gmail.com";

  const address = document.createElement("p");
  address.textContent = "Address: 123 Main St, Food City";

  content.appendChild(headline);
  content.appendChild(contactInfo);
  content.appendChild(email);
  content.appendChild(address);
}
