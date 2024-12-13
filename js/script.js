// Select the navbar element
const navbar = document.querySelector('.navbar');
const menuIcon = document.querySelector('.menu-icon');

// Function to toggle menu visibility
function toggleMenu() {
  navbar.classList.toggle('open');
}

// Close the menu when 'Esc' is pressed
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && navbar.classList.contains('open')) {
    navbar.classList.remove('open');
  }
});

// Close menu when clicking outside of it
document.addEventListener('click', (event) => {
  if (!navbar.contains(event.target) && navbar.classList.contains('open')) {
    navbar.classList.remove('open');
  }
});
