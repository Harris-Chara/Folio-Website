var devText = document.querySelector('#developer');
var qualitiesText = document.querySelector('#qualitiesText');

function setQualitiesText(quality) {
  switch (quality) {
    case 'developer':
      document.getElementById('qualitiesTextDev').style.display = 'block';
      document.getElementById('qualitiesTextMusician').style.display = 'none';
      document.getElementById('qualitiesTextPhotographer').style.display = 'none';
      document.getElementById('qualitiesTextTester').style.display = 'none';
      document.getElementById('qualitiesGraphicDesigner').style.display = 'none';
      document.getElementById('qualitiesTechEnthusiast').style.display = 'none';
      break;

    case 'musician':
      document.getElementById('qualitiesTextDev').style.display = 'none';
      document.getElementById('qualitiesTextMusician').style.display = 'block';
      document.getElementById('qualitiesTextPhotographer').style.display = 'none';
      document.getElementById('qualitiesTextTester').style.display = 'none';
      document.getElementById('qualitiesGraphicDesigner').style.display = 'none';
      document.getElementById('qualitiesTechEnthusiast').style.display = 'none';
      break;

    case 'photographer':
      document.getElementById('qualitiesTextDev').style.display = 'none';
      document.getElementById('qualitiesTextMusician').style.display = 'none';
      document.getElementById('qualitiesTextPhotographer').style.display = 'block';
      document.getElementById('qualitiesTextTester').style.display = 'none';
      document.getElementById('qualitiesGraphicDesigner').style.display = 'none';
      document.getElementById('qualitiesTechEnthusiast').style.display = 'none';
      break;

    case 'tester':
      document.getElementById('qualitiesTextDev').style.display = 'none';
      document.getElementById('qualitiesTextMusician').style.display = 'none';
      document.getElementById('qualitiesTextPhotographer').style.display = 'none';
      document.getElementById('qualitiesTextTester').style.display = 'block';
      document.getElementById('qualitiesGraphicDesigner').style.display = 'none';
      document.getElementById('qualitiesTechEnthusiast').style.display = 'none';
      break;

    case 'designer':
      document.getElementById('qualitiesTextDev').style.display = 'none';
      document.getElementById('qualitiesTextMusician').style.display = 'none';
      document.getElementById('qualitiesTextPhotographer').style.display = 'none';
      document.getElementById('qualitiesTextTester').style.display = 'none';
      document.getElementById('qualitiesGraphicDesigner').style.display = 'block';
      document.getElementById('qualitiesTechEnthusiast').style.display = 'none';
      break;

    case 'tech':
      document.getElementById('qualitiesTextDev').style.display = 'none';
      document.getElementById('qualitiesTextMusician').style.display = 'none';
      document.getElementById('qualitiesTextPhotographer').style.display = 'none';
      document.getElementById('qualitiesTextTester').style.display = 'none';
      document.getElementById('qualitiesGraphicDesigner').style.display = 'none';
      document.getElementById('qualitiesTechEnthusiast').style.display = 'block';
      break;
  }
}

function appear() {
  var header = document.getElementById('header');
  var logo = document.getElementById('logo');
  var burger = document.getElementById('burger');

  if (scrollY > 0) {
    header.classList.add('scrolling');
    logo.classList.add('logoScrolling');
    burger.classList.add('burgerScrolling');
  } else {
    header.classList.remove('scrolling');
    logo.classList.remove('logoScrolling')
    burger.classList.remove('burgerScrolling');
  }
}

function toggleBurger() {
  var mobileMenu = document.getElementById('mobileMenu');

  if (mobileMenu.classList.contains('appear')) {
    mobileMenu.classList.remove('appear')
  } else {
    mobileMenu.classList.add('appear')
  }
}

function scrollFunction(target) {
  var object = document.getElementById(target);
  var header = document.getElementById('header');
  var headerSize = header.offsetHeight;
  var anchor = object.getBoundingClientRect().top + window.pageYOffset;
  var position = anchor - headerSize + 60;

  window.scrollTo(0, position);

  object = null;
  header = null
  headerSize = null;
  anchor = null;
  position = null;

  console.log(position)
}

function modalHandler(src) {
  var modal = document.getElementById('modal');
  var modalImage = document.querySelector('.modalImage');
  var modalCaption = document.querySelector('.modalCaption');
  var imgDescription = document.querySelector('.imgDescription');
  var button = document.getElementById('modalButton');

  document.querySelector('html').style.overflowY = 'hidden';

  button.style.display = 'block';

  modal.classList.add('modalOpen');
  modalImage.classList.add('modalImageOpen');
  modalImage.src = 'assets/images/' + src;

  //set modalCaption + text
  switch (src) {
    case 'scareMeAlbum.webp':
      modalCaption.innerHTML = 'YOU DON\'T SCARE ME LIKE YOU USED TO';
      imgDescription.innerHTML = 'This was my first recorded album. Unfortunately, due to some production issues it was never released, but if you ever catch me playing live you\'ll be able to hear some of the songs off here. It covered alot of my thoughts about growing up and becoming an adult.'
      button.style.display = 'none';
      break;

    case 'ben^2Album.jpg':
      modalCaption.innerHTML = 'BEN^2';
      imgDescription.innerHTML = 'This was a short record I wrote and recorded in the span of 1 day and night. It was dedicated to a very close friend of mine who passed away. Gone but never forgotten, my friend.'
      button.href = 'https://www.youtube.com/watch?v=hwcTz9dkhXk&list=PLuwFbhJWwTZo-lTikBNMoiTPnorkcE-5-&index=1&ab_channel=HarrisCharalambous';
      break

    case 'stayTuned.jpg':
      modalCaption.innerHTML = 'YOU\'RE MORE THAN YOU THINK YOU ARE';
      imgDescription.innerHTML = 'This is an upcoming project of mine that will be released when I stop being lazy and record it. It covers my thoughts and feelings regarding my friends, my family, and the crazy events of 2020 and how it has affected me.'
      button.style.display = 'none';
      break

    case 'javaHotDesk.jpg':
      modalCaption.innerHTML = 'JAVA HOTDESKING SYSTEM';
      imgDescription.innerHTML = 'This was a university assignment made in Java and JavaFX that works as a desk booking management system. A user can sign up, book available desks, check in, etc, while a manager can promote and fire employees, and initiate a covid-lock on certain tables to prevent bookings.'
      button.style.display = 'none';
      break

    case 'python.jpg':
      modalCaption.innerHTML = 'PYTHON EMAIL SPAMMER';
      imgDescription.innerHTML = 'This is a joke Python project I made to prank one of my friends. I do not advise this to be used maliciously or in any capacity outside of friendly/ harmless fun.'
      button.href = 'https://github.com/Harris-Chara/Python-Spammer'
      break

    case 'websiteThumbnail.jpg':
      modalCaption.innerHTML = 'PORTFOLIO WEBSITE';
      imgDescription.innerHTML = 'The website you are currently viewing! I decided to make this to test myself and keep my mind active in between semesters. I know I still have a long way to go, but I am quite proud of the progress I\'ve made and how this site is presented.'
      button.href = 'https://github.com/Harris-Chara/Folio-Website';
      break

    case 'eyes.jpg':
      modalCaption.innerHTML = 'EYEBALL MOUSE TRACKER';
      imgDescription.innerHTML = 'This is a strange little website application I decided to make to test myself. Not a whole lot to say about it, but I find it quite amusing.'
      button.style.display = 'none';
      break
  }
}

function closeModal(){
  var modal = document.getElementById('modal');
  var modalImage = document.querySelector('.modalImage');

  modal.classList.remove('modalOpen');
  modalImage.classList.remove('modalImageOpen');

  document.querySelector('html').style.overflowY = 'unset';
}
