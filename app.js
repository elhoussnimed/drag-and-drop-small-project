const img = document.querySelector("img");
const cards = [...document.querySelectorAll(".card")];

cards.forEach((card) => {
  card.addEventListener("dragover", (e) => {
    card.classList.add("active");
  });

  card.addEventListener("dragleave", () => {
    card.classList.remove("active");
  });
});

img.addEventListener("drag", (e) => {
  const destination = document.querySelector(".active");
  img.style.cssText = `opacity: 0`;
  destination.append(img);
});

img.addEventListener("dragend", () => {
  img.style.opacity = "1";
});
