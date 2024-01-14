document.addEventListener("DOMContentLoaded", function() {
  // Initially hide the menu on small screens
  var menu = document.getElementById("mobileMenu");
  menu.classList.add("menu-opened");
  menu.style.display = "none";
});
function toggleMenu() {
  var menu = document.getElementById("mobileMenu");
  var logo = document.getElementById("logo");
  var menuIcon = document.getElementById("menuIcon");

  if (menu.classList.contains("menu-opened")) {
    menu.style.display = "none";
    menu.classList.remove("menu-opened");
    logo.classList.remove("logo-hidden");
    menuIcon.classList.remove("menu-icon-hidden");
  } else {
    menu.style.display = "flex";
    menu.classList.add("menu-opened");
    logo.classList.add("logo-hidden");
    menuIcon.classList.add("menu-icon-hidden");
  }
}
/*end of mobile nav */
const profileImage = document.getElementById("profile");
const dropdown = document.querySelector(".dropdown");
// Click event listener for the profile image
profileImage.addEventListener("click", function() {
  // Toggle the "show" class on the dropdown element
  dropdown.classList.toggle("show");
});
// Click event listener for the document to close the dropdown
document.addEventListener("click", function(event) {
  // Check if the clicked element is inside the dropdown
  if (!dropdown.contains(event.target) && !profileImage.contains(event.target)) {
    // Close the dropdown by removing the "show" class
    dropdown.classList.remove("show");
  }
});
document.getElementById('selectAll').addEventListener('click', function() {
  var checkboxes = document.querySelectorAll('.body input[type="checkbox"]');
  var allChecked = true;

  checkboxes.forEach(function(checkbox) {
    if (!checkbox.checked) {
      allChecked = false;
      checkbox.checked = true;
      totalServices++;
      totalPrice += 100; // Assuming each service costs $100
    }
  });

  if (allChecked) {
    checkboxes.forEach(function(checkbox) {
      checkbox.checked = false;
      totalServices = 0;
      totalPrice = 0;
    });
  }

  // Update the counter and cost elements with the new values
  counter.textContent = totalServices;
  cost.textContent = `$${totalPrice}`;
});

// Get all the checkboxes
const checkboxes = document.querySelectorAll('.service input[type="checkbox"]');
// Get the counter and cost elements
const counter = document.querySelector('.counter h3');
const cost = document.querySelector('.cost h3');

// Initialize the total number of services and total cost
let totalServices = 0;
let totalPrice = 0;

// Add event listener to each checkbox
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', function() {
    if (this.checked) {
      // If the checkbox is checked, increment the total number of services and add the price
      totalServices++;
      totalPrice += 100; // Assuming each service costs $100
    } else {
      // If the checkbox is unchecked, decrement the total number of services and subtract the price
      totalServices--;
      totalPrice -= 100; // Assuming each service costs $100
    }

    // Update the counter and cost elements with the new values
    counter.textContent = totalServices;
    cost.textContent = `$${totalPrice}`;
  });
});