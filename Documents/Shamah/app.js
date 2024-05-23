let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("carousel-slide");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

// Set interval to automatically slide the carousel every 5 seconds
setInterval(function() {
    plusSlides(1); // Call plusSlides function with an argument of 1 to move to the next slide
}, 1500);

var i = 0;
var textIndex = 0;
var texts = [
  'Happy Birthday My Love', // First text
  'You are the reason I live', // Second text
//   'You are the reason I love',
//   'To the one who makes me what I am',
//   'இனம் புரியாத காதலுடன் நான் எழுதும் முதல் கடிதம்...',
//   'cringe ஆ இருந்தாலும் ஒண்டும் பண்ண ஏலாது',
//   'You have to read it anyways...'
];
var speed = 150; // The speed/duration of the effect in milliseconds
var delayBetweenTexts = 2000; // Delay between the texts in milliseconds

function typeWriter() {
    if (i < texts[textIndex].length) {
      document.getElementById("ct").innerHTML += texts[textIndex].charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    } else if (textIndex < texts.length - 1) {
      setTimeout(function() {
        document.getElementById("ct").innerHTML = '';
        textIndex++;
        i = 0;
        typeWriter();
      }, delayBetweenTexts);
    } else {
      showButton();
    }
  }
  
  function showButton() {
    document.getElementById("redirectBtn").style.display = "inline-block";
  }
  
  function redirectToPage() {
    window.location.href = "timeline.html";
  }
typeWriter();

// popup
var popup = document.getElementById("modal");

function popUp(){
    popup.style.display = "block";
}

// window.onload = function(){
//     setTimeout(popUp, 6500);
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }