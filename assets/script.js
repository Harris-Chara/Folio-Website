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
    
    if (scrollY > 0){
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
    }
    else {
        mobileMenu.classList.add('appear')
    }
}

function scrollFunction(target, duration) {
    var target = document.getElementById(target);
    var targetPosition = target.getBoundingClientRect().top + document.getElementById('header').clientHeight;
    var startingPosition = window.pageYOffset;
    var distance = targetPosition - startingPosition;
    var startTime = null;

    function animate(currentTime){
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed,startingPosition,distance,duration);
        window.scrollTo(0,run);
        if (timeElapsed < duration) requestAnimationFrame(animate);
    }

    function ease (t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c /2 * t + b;
        t--;
        return -c / 2 * t (t * (t-2) - 1) + b;
    }

    requestAnimationFrame(animate);
}