

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}
const but = document.getElementById('toto');
but.onclick=()=>{
    alert("With open arms and boundless love, we welcome a new member into your family through adoption.");
}

const s = document.getElementById('scholar');
s.onclick=()=>{
  alert("Your support is a  hope for deserving students, empowering them to pursue their dreams and achieve their aspirations. Thank you for making a difference in the lives of these bright young minds. Together, we are shaping a brighter future for generations to come.")
}
