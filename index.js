const menu = document.querySelector(".menu");
const menuImage = document.getElementById("menu-image");

menuImage.addEventListener("click", () => {
  if (menu.style.display === "none" || menu.style.display === "") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
});
