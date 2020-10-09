/* ================================= */
/*              Cover                */
/* ================================= */
// const cover = document.getElementById("cover");
// cover.addEventListener('click', (e) => {
//     cover.style.opacity = 0;
//     setTimeout(function(){ cover.style.display = 'none'; }, 600);    
// })

/* ========================================= */
/*              Dropdown Menu                */
/* ========================================= */
const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementsByClassName('dropdown-content')[0];
menuIcon.addEventListener('click', (e) => {
    if(menu.style.display === '' || menu.style.display === 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
});

/* ===================================== */
/*              Slide Show               */
/* ===================================== */

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("project-card");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


/* ================================= */
/*              Message              */
/* ================================= */
// Get the email icon
const emailIcon = document.getElementById("email-icon");
const msgArea = document.getElementById("msg");
emailIcon.onclick = function () {
    if(msgArea.style.display === '' || msgArea.style.display === 'none') {
        msgArea.style.display = "block";
    }else {
        msgArea.style.display = "none";
    }
};