// Add JavaScript to handle the scroll-to-top button
window.onscroll = function() {
    stickyNavbar();
    toggleScrollTopButton();
  };
  
  const navbar = document.getElementById("navbar");
  const scrollTopButton = document.getElementById("scrollTopBtn");
  const sticky = navbar.offsetTop;
  
  function stickyNavbar() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }   
  }
  
  function toggleScrollTopButton() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollTopButton.style.display = "block";
    } else {
      scrollTopButton.style.display = "none";
    }
  }
  
  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  