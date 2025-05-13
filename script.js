document.addEventListener("DOMContentLoaded", function() {
    // Intersection Observer for Scroll-Triggered Animations
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.feature-item, .testimonial-item').forEach(item => {
        observer.observe(item);
    });

    // Testimonial Slider Auto Sliding
    const slider = document.querySelector('.testimonial-slider');
    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % slider.children.length;
        slider.style.transform = `translateX(-${currentIndex * (100 / slider.children.length)}%)`;
    }, 5000); // Change slide every 5 seconds
});
// Load particle background
particlesJS.load('particles-js', 'particles-config.json', function() {
    console.log('Particles loaded.');
  });
  