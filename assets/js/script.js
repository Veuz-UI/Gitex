//jquery




// Navbar text change


// header
const navbar = document.getElementById('navbar');
  
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});



window.addEventListener('load', function() {
    // Add loaded class to body after window loads
    setTimeout(function() {
        document.body.classList.add('loaded');
    }, 1000); // 1 second delay before hiding loader
});

// Prevent scrolling while loader is active
document.body.style.overflow = 'hidden';
window.addEventListener('load', function() {
    setTimeout(function() {
        document.body.style.overflow = 'visible';
    }, 1000);
});


// click time not zooming


document.addEventListener('touchstart', function (e) {
  if (e.touches.length > 1) {
    e.preventDefault(); // block pinch zoom
  }
}, { passive: false });

// Prevent double-tap zoom
let lastTouchEnd = 0;
document.addEventListener('touchend', function (e) {
  const now = Date.now();
  if (now - lastTouchEnd <= 300) {
    e.preventDefault(); // block double-tap zoom
  }
  lastTouchEnd = now;
}, false);



// click time not zooming






        