function createHome() {
  const content = document.querySelector(".content");
  const ourStory = document.createElement("div");
  const header = document.createElement("h1");
  const header2 = document.createElement("h2");
  const emph = document.createElement("em");
  const blurb = document.createElement("p");
  const imgContainer = document.createElement("div");
  const img1 = document.createElement("img");
  const img2 = document.createElement("img");

  imgContainer.classList.add("image-container");
  ourStory.classList.add("our-story");

  img1.setAttribute("src", "chad-liz-drink-wine.jpg");
  img2.setAttribute("src", "chad-turns-dough.jpg");

  header.textContent = "Our Story...";
  header2.textContent = "TARTINE BEGAN WITH A MISSION:";
  emph.textContent =
    "Bring bread with an old-soul into the lives of our friends in California.";
  blurb.textContent =
    "Using a wood fired brick oven, Chad Robertson baked bread and Elisabeth Prueitt created rustic, elegant pastries using many of the techniques they had learned abroad.";

  imgContainer.appendChild(img1);
  imgContainer.appendChild(img2);

  ourStory.appendChild(header);
  ourStory.appendChild(header2);
  ourStory.appendChild(emph);
  ourStory.appendChild(blurb);
  ourStory.appendChild(imgContainer);

  content.appendChild(ourStory);
}

export default createHome;
