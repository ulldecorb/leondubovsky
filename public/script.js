window.addEventListener('scroll', function() {
  document.querySelectorAll('.parallax-section').forEach(function(section, idx) {
    let speed = 0.5 + idx * 0.1;
    let offset = window.pageYOffset * speed;
    section.style.backgroundPosition = `center ${offset}px`;
  });
});
