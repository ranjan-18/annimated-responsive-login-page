document.addEventListener("DOMContentLoaded", function() {
   
    const logo = document.querySelector('.logo');
    
  
    logo.addEventListener('animationend', function() {
      
      document.body.classList.add('show-home');
    });
  });
