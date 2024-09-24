import { loadMenu } from "./menu";

export function loadHome() {
  const content = document.getElementById("content");

  const headline = document.createElement("h1");
  headline.textContent = "Welcome to our Restaurant!";

  const description = document.createElement("p");
  description.textContent =
    "Enjoy the finest cuisine made with fresh ingredients.";

  const bannerContainer = document.createElement("div");
  bannerContainer.classList.add("banner-section-bg-container");

  const bannerContent = document.createElement("div");
  bannerContent.classList.add("content");

  const heading = document.createElement("h1");
  heading.classList.add("banner-heading");
  heading.textContent = "Get Delicious Food Anytime";

  const caption = document.createElement("p");
  caption.classList.add("banner-caption");
  caption.textContent = "Eat Smart & Healthy";

  const menuButton = document.createElement("button");
  menuButton.textContent = "View Menu";
  menuButton.classList.add("custom-button");
  menuButton.addEventListener("click", () => {
    content.innerHTML = "";
    loadMenu();
  });

  bannerContent.appendChild(heading);
  bannerContent.appendChild(caption);
  bannerContent.appendChild(menuButton);
  bannerContainer.appendChild(bannerContent);
  content.appendChild(bannerContainer);
  content.appendChild(headline);
  content.appendChild(description);
}
