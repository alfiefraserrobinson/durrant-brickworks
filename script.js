// Create the Intersection Observer
const observerOptions = {
  root: null, // use viewport as root
  rootMargin: '0px',
  threshold: 0.2 // trigger when 20% of the element is visible
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      observer.unobserve(entry.target); // Stop observing once animation is triggered
    }
  });
}, observerOptions);

// Start observing the service wrapper when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const serviceWrapper = document.querySelector('.service-wrapper');
  if (serviceWrapper) {
    observer.observe(serviceWrapper);
  }
});