const navLinks = document.querySelectorAll('nav li a');

navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    // Prevent default anchor tag behavior (jumping to top of page)
    event.preventDefault();

    // Remove active class from all links
    navLinks.forEach(link => link.classList.remove('active'));

    // Add active class to clicked link
    this.classList.add('active');

    // Optionally, implement smooth scrolling to target sections (replace with your preferred library)
    // const targetSection = this.getAttribute('href').substring(1); // Remove leading "#"
    // document.querySelector(targetSection).scrollIntoView({ behavior: 'smooth' });
  });
});
