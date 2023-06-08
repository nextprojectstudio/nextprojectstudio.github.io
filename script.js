window.addEventListener('load', function() {
  setTimeout(function() {
    var navbar = document.querySelector('.navigation-bar');
    var listElement1 = document.querySelector('.list-element1');
    var listElements = document.querySelectorAll('.list-element');
    var inputText = document.querySelector('.input-text');
    var submitButton = document.querySelector('.submit-button');
    var logoText = document.querySelector('.logo-text');
    var hamburger = document.querySelector('.ri-menu-line');

    window.addEventListener('scroll', function() {
      var isHovered = false; // Flag to check if the submit button is being hovered

      if (window.pageYOffset > 1) {
        navbar.style.background = 'black';
        logoText.style.color = 'white';
        listElement1.style.color = 'white';
        hamburger.style.color = 'white';

        // Loop through all elements with the class name "list-element"
        listElements.forEach(function(listElement) {
          listElement.style.color = 'white';
        });

        inputText.classList.add('white-placeholder');
        inputText.style.color = 'white';
        inputText.style.borderColor = 'white';
        submitButton.style.color = 'white';
        submitButton.style.borderColor = 'white';

        // Check if submit button is being hovered
        if (submitButton.matches(':hover')) {
          isHovered = true;
          submitButton.style.background = 'white';
          submitButton.style.color = 'black';
        } else {
          submitButton.style.background = 'transparent';
          submitButton.style.color = 'white'; // Reset text color to white
        }

        // Add event listener for submit button hover (IF condition)
        submitButton.addEventListener('mouseover', function() {
          submitButton.style.background = 'white';
          submitButton.style.color = 'black';
        });

        submitButton.addEventListener('mouseout', function() {
          if (!isHovered) {
            submitButton.style.background = 'transparent';
            submitButton.style.color = 'white';
          }
        });
      } else {
        navbar.style.background = 'transparent';
        logoText.style.color = 'black';
        listElement1.style.color = 'black';
        hamburger.style.color = 'black';

        // Loop through all elements with the class name "list-element"
        listElements.forEach(function(listElement) {
          listElement.style.color = 'black';
        });

        inputText.classList.remove('white-placeholder');
        inputText.style.color = 'black';
        inputText.style.borderColor = 'black';
        submitButton.style.color = 'black';
        submitButton.style.borderColor = 'black';

        // Check if submit button is being hovered
        if (submitButton.matches(':hover')) {
          isHovered = true;
          submitButton.style.background = 'black';
          submitButton.style.color = 'white';
        } else {
          submitButton.style.background = 'transparent';
          submitButton.style.color = 'black'; // Reset text color to black
        }

        // Add event listener for submit button hover (ELSE condition)
        submitButton.addEventListener('mouseover', function() {
          submitButton.style.background = 'black';
          submitButton.style.color = 'white';
        });

        submitButton.addEventListener('mouseout', function() {
          if (!isHovered) {
            submitButton.style.background = 'transparent';
            submitButton.style.color = 'black';
          }
        });
      }
    });
  }, 4000); // 4 seconds delay
});




const imagesContainer = document.querySelector('.projects-container');
const images = imagesContainer.querySelectorAll('.image');
const imageCount = images.length;
const cloneImages = Array.from(images).map(image => image.cloneNode(true));

// Repeat the pattern 50 times
const repeatCount = 50;
for (let i = 0; i < repeatCount; i++) {
  cloneImages.forEach(clone => imagesContainer.appendChild(clone.cloneNode(true)));
}


function projectsTextChange() {
  const containerScrollTop = imagesContainer.scrollTop;
  const containerHeight = imagesContainer.clientHeight;
  const imageOne = document.querySelector('.image1');
  const imageTwo = document.querySelector('.image2');
  const imageThree = document.querySelector('.image3');  
  const projectsText = document.querySelector('.projects-text');
  image1Top = imageOne.offsetTop;
  image1Bottom = imageOne.offsetTop + imageOne.offsetHeight;
  image2Top = imageTwo.offsetTop;
  image2Bottom = imageTwo.offsetTop + imageTwo.offsetHeight;
  image3Top = imageThree.offsetTop;
  image3Bottom = imageThree.offsetTop + imageThree.offsetHeight;
  
  if (image1Top >= containerScrollTop && image1Bottom <= containerHeight){
    projectsText.textContent = 'aaa';
  }
}

imagesContainer.addEventListener('scroll', projectsTextChange);

document.addEventListener('DOMContentLoaded', function() {
  var instagramButton = document.querySelector('.ri-instagram-fill');
  instagramButton.onclick = function() {
    window.open("https://www.instagram.com/next.projectstudio/?hl=en", "_blank");
  };
});

var phoneButton = document.querySelector('.ri-phone-fill');
phoneButton.onclick = function(){
  window.alert(
    'Numrat kontaktues: +38348400877; +38349597922');
}


var hamburger = document.querySelector('.ri-menu-line');
var navbar = document.querySelector('.navigation-bar');
var logoText = document.querySelector('.logo-text');
var hamburgerList = document.querySelector('.hamburger-list');
var hamburgerListStyle = getComputedStyle(hamburgerList);

hamburger.onclick = function(){
  var homeBtn = document.querySelector('.homebtn');
  var aboutBtn = document.querySelector('.aboutbtn');
  var projectsBtn = document.querySelector('.projectsbtn');
  var contactBtn = document.querySelector('.contactbtn');
  if(hamburgerListStyle.display === 'none'){
  navbar.style.height = '50vh';
  navbar.style.background = 'black';
  logoText.style.color = 'white';
  logoText.style.top = '35px';
  hamburger.style.color = 'white';
  hamburger.style.top = '35px';
  hamburgerList.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  }
  
  else if(hamburgerListStyle.display === 'flex' && window.pageYOffset == 0){
    navbar.style.height = '70px';
    navbar.style.background = 'transparent';
    logoText.style.color = 'black';
    logoText.style.top = '50%';
    hamburger.style.color = 'black';
    hamburger.style.top = '50%';
    hamburgerList.style.display = 'none';
    document.body.style.overflow = '';
  }
  else if(hamburgerListStyle.display === 'flex' && window.pageYOffset >= 1){
    navbar.style.height = '70px';
    navbar.style.background = 'black';
    logoText.style.color = 'white';
    logoText.style.top = '50%';
    hamburger.style.color = 'white';
    hamburger.style.top = '50%';
    hamburgerList.style.display = 'none';
    document.body.style.overflow = '';
  }
  
  
  homeBtn.addEventListener('click', function(){
    var homeTarget = document.getElementById('home');
    homeTarget.scrollIntoView({behavior: 'smooth'});
    navbar.style.height = '70px';
    navbar.style.background = 'transparent';
    logoText.style.color = 'black';
    logoText.style.top = '50%';
    hamburger.style.color = 'black';
    hamburger.style.top = '50%';
    hamburgerList.style.display = 'none';
    document.body.style.overflow = '';
  })
  homeBtn.addEventListener('click', function(){
    var homeTarget = document.getElementById('home');
    homeTarget.scrollIntoView({behavior: 'smooth'});
    navbar.style.height = '70px';
    navbar.style.background = 'transparent';
    logoText.style.color = 'black';
    logoText.style.top = '50%';
    hamburger.style.color = 'black';
    hamburger.style.top = '50%';
    hamburgerList.style.display = 'none';
    document.body.style.overflow = '';
  })
  aboutBtn.addEventListener('click', function(){
    var aboutTarget = document.getElementById('about');
    aboutTarget.scrollIntoView({behavior: 'smooth'});
    navbar.style.height = '70px';
    navbar.style.background = 'black';
    logoText.style.color = 'white';
    logoText.style.top = '50%';
    hamburger.style.color = 'white';
    hamburger.style.top = '50%';
    hamburgerList.style.display = 'none';
    document.body.style.overflow = '';
  })
  projectsBtn.addEventListener('click', function(){
    var projectsTarget = document.getElementById('projects');
    projectsTarget.scrollIntoView({behavior: 'smooth'});
    navbar.style.height = '70px';
    navbar.style.background = 'black';
    logoText.style.color = 'white';
    logoText.style.top = '50%';
    hamburger.style.color = 'white';
    hamburger.style.top = '50%';
    hamburgerList.style.display = 'none';
    document.body.style.overflow = '';
  })
  contactBtn.addEventListener('click', function(){
    var contactTarget = document.getElementById('contact');
    contactTarget.scrollIntoView({behavior: 'smooth'});
    navbar.style.height = '70px';
    navbar.style.background = 'black';
    logoText.style.color = 'white';
    logoText.style.top = '50%';
    hamburger.style.color = 'white';
    hamburger.style.top = '50%';
    hamburgerList.style.display = 'none';
    document.body.style.overflow = '';
  })
}
