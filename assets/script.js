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
    
    if (scrollY > 0){
        header.classList.add('scrolling');
        logo.classList.add('logoScrolling');
    } else {
        header.classList.remove('scrolling');
        logo.classList.remove('logoScrolling')
    }
}