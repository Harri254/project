

let menu = document.querySelector("#menu-icon");
let menuContent = document.querySelector(".menu-content");
let hamburgerMenu = document.querySelector(".harmburger-menu");

hamburgerMenu.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevents window click from closing menu
  menuContent.classList.toggle("active"); // Toggle menu visibility
  
  if (menuContent.classList.contains("active")) {
    menu.src = "./icons8-close-window-50.png";
  } else {
    menu.src = "./align-justify-svgrepo-com.svg";
  }
  // console.log("Menu clicked. Active status:", menuContent.classList.contains("active"));
});

// Detect clicks outside the menu to close it
window.addEventListener("click", (e) => {
  if (!hamburgerMenu.contains(e.target) && !menuContent.contains(e.target) && menuContent.classList.contains("active")) {
    menuContent.classList.remove("active");
    menu.src = "./align-justify-svgrepo-com.svg";
    // console.log("Clicked outside. Menu closed.");
  }
});

document.querySelector('#as-a-victim').addEventListener("click",(e)=>{
  e.preventDefault();
  

})
