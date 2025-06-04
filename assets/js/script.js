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

document.addEventListener('touchmove', function (e) {
  if (e.scale !== 1) {
    e.preventDefault();
  }
}, { passive: false });
 
    document.addEventListener('gesturestart', function (e) {
  e.preventDefault();
});  

// click time not zooming





// ********  index ticket ******** //

         // 1. Modify the saveTicketCount function to store the count


        // ********  index ticket ******** //



        // collaps ticket

        