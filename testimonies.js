
// let menu = document.querySelector("#menu-icon");
// let menuContent = document.querySelector(".menu-content");
// let hamburgerMenu = document.querySelector(".harmburger-menu");

// hamburgerMenu.addEventListener("click", (e) => {
//   e.stopPropagation(); // Prevents window click from closing menu
//   menuContent.classList.toggle("active"); // Toggle menu visibility
  
//   if (menuContent.classList.contains("active")) {
//     menu.src = "/images/icons8-close-window-50.png";
//   } else {
//     menu.src = "/images/align-justify-svgrepo-com.svg";
//   }
//   console.log("Menu clicked. Active status:", menuContent.classList.contains("active"));
// });

// // Detect clicks outside the menu to close it
// window.addEventListener("click", (e) => {
//   if (!hamburgerMenu.contains(e.target) && !menuContent.contains(e.target) && menuContent.classList.contains("active")) {
//     menuContent.classList.remove("active");
//     menu.src = "/images/align-justify-svgrepo-com.svg";
//     // console.log("Clicked outside. Menu closed.");
//   }
// });

// let show = document.querySelector('.disp-test');
// let name = document.querySelector('#name');
// let message =  document.querySelector('#text');

document.addEventListener("DOMContentLoaded", () => {
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
  console.log("Menu clicked. Active status:", menuContent.classList.contains("active"));
});

// Detect clicks outside the menu to close it
window.addEventListener("click", (e) => {
  if (!hamburgerMenu.contains(e.target) && !menuContent.contains(e.target) && menuContent.classList.contains("active")) {
    menuContent.classList.remove("active");
    menu.src = "./align-justify-svgrepo-com.svg";
    // console.log("Clicked outside. Menu closed.");
  }
});

let data = [];

document.querySelector("form").addEventListener('submit', (e) => {
  e.preventDefault();

  const nameInput = document.getElementById("name");
  const messageInput = document.getElementById("text");

  if (!nameInput || !messageInput) {
    console.error("Element(s) with id 'name' or 'text' not found.");
    return;
  }

  if (nameInput.value.trim() === "") {
    alert("Input name");
  } else if (messageInput.value.trim() === "") {
    alert("Input message to submit");
  } else {
    // Add new submission at the beginning of the data array
    data.unshift({ name: nameInput.value, message: messageInput.value });
    console.log("Data added:", data);

    // Clear inputs after submission
    nameInput.value = "";
    messageInput.value = "";

    // Update the display of testimonials
    displayTestimonials();
  }
});

// Select the container where testimonials will be displayed
let holder = document.querySelector(".disp-test");

// Function to display testimonials
function displayTestimonials() {
  // Clear the container before displaying new testimonials
  holder.innerHTML = "";

  // Loop through each element in the data array
  data.forEach(element => {
    // Create a div to hold each testimonial
    let div = document.createElement("div");
    div.classList.add("testimonial");

    // Create and set content for name and message elements
    let tName = document.createElement("h4");
    tName.classList.add("test-name");
    tName.innerText = element.name;

    let tMessage = document.createElement("p");
    tMessage.classList.add("test-message");
    tMessage.innerText = element.message;

    // Append name and message to the testimonial div
    div.appendChild(tName);
    div.appendChild(tMessage);

    // Append each testimonial div to the holder
    holder.appendChild(div);
  });
}


});


// console.log(data)
