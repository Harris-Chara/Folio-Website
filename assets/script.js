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

    //   document.getElementById('developer').style.marginBottom = '100%';
      document.getElementById('musician').style.marginBottom = '0%';
      document.getElementById('photographer').style.marginBottom = '0%';
      document.getElementById('tester').style.marginBottom = '0%';
      document.getElementById('graphDesigner').style.marginBottom = '0%';
      document.getElementById('techEnthusiast').style.marginBottom = '0%';
      break;

    case 'musician':
      document.getElementById('qualitiesTextDev').style.display = 'none';
      document.getElementById('qualitiesTextMusician').style.display = 'block';
      document.getElementById('qualitiesTextPhotographer').style.display = 'none';
      document.getElementById('qualitiesTextTester').style.display = 'none';
      document.getElementById('qualitiesGraphicDesigner').style.display = 'none';
      document.getElementById('qualitiesTechEnthusiast').style.display = 'none';

      document.getElementById('developer').style.marginBottom = '0%';
    //   document.getElementById('musician').style.marginBottom = '100%';
      document.getElementById('photographer').style.marginBottom = '0%';
      document.getElementById('tester').style.marginBottom = '0%';
      document.getElementById('graphDesigner').style.marginBottom = '0%';
      document.getElementById('techEnthusiast').style.marginBottom = '0%';
      break;

    case 'photographer':
      document.getElementById('qualitiesTextDev').style.display = 'none';
      document.getElementById('qualitiesTextMusician').style.display = 'none';
      document.getElementById('qualitiesTextPhotographer').style.display = 'block';
      document.getElementById('qualitiesTextTester').style.display = 'none';
      document.getElementById('qualitiesGraphicDesigner').style.display = 'none';
      document.getElementById('qualitiesTechEnthusiast').style.display = 'none';

      document.getElementById('developer').style.marginBottom = '0%';
      document.getElementById('musician').style.marginBottom = '0%';
    //   document.getElementById('photographer').style.marginBottom = '100%';
      document.getElementById('tester').style.marginBottom = '0%';
      document.getElementById('graphDesigner').style.marginBottom = '0%';
      document.getElementById('techEnthusiast').style.marginBottom = '0%';
      break;

    case 'tester':
      document.getElementById('qualitiesTextDev').style.display = 'none';
      document.getElementById('qualitiesTextMusician').style.display = 'none';
      document.getElementById('qualitiesTextPhotographer').style.display = 'none';
      document.getElementById('qualitiesTextTester').style.display = 'block';
      document.getElementById('qualitiesGraphicDesigner').style.display = 'none';
      document.getElementById('qualitiesTechEnthusiast').style.display = 'none';

      document.getElementById('developer').style.marginBottom = '0%';
      document.getElementById('musician').style.marginBottom = '0%';
      document.getElementById('photographer').style.marginBottom = '0%';
    //   document.getElementById('tester').style.marginBottom = '100%';
      document.getElementById('graphDesigner').style.marginBottom = '0%';
      document.getElementById('techEnthusiast').style.marginBottom = '0%';
      break;

    case 'designer':
      document.getElementById('qualitiesTextDev').style.display = 'none';
      document.getElementById('qualitiesTextMusician').style.display = 'none';
      document.getElementById('qualitiesTextPhotographer').style.display = 'none';
      document.getElementById('qualitiesTextTester').style.display = 'none';
      document.getElementById('qualitiesGraphicDesigner').style.display = 'block';
      document.getElementById('qualitiesTechEnthusiast').style.display = 'none';

      document.getElementById('developer').style.marginBottom = '0%';
      document.getElementById('musician').style.marginBottom = '0%';
      document.getElementById('photographer').style.marginBottom = '0%';
      document.getElementById('tester').style.marginBottom = '0%';
    //   document.getElementById('graphDesigner').style.marginBottom = '100%';
      document.getElementById('techEnthusiast').style.marginBottom = '0%';
      break;

    case 'tech':
      document.getElementById('qualitiesTextDev').style.display = 'none';
      document.getElementById('qualitiesTextMusician').style.display = 'none';
      document.getElementById('qualitiesTextPhotographer').style.display = 'none';
      document.getElementById('qualitiesTextTester').style.display = 'none';
      document.getElementById('qualitiesGraphicDesigner').style.display = 'none';
      document.getElementById('qualitiesTechEnthusiast').style.display = 'block';

      document.getElementById('developer').style.marginBottom = '0%';
      document.getElementById('musician').style.marginBottom = '0%';
      document.getElementById('photographer').style.marginBottom = '0%';
      document.getElementById('tester').style.marginBottom = '0%';
      document.getElementById('graphDesigner').style.marginBottom = '0%';
    //   document.getElementById('techEnthusiast').style.marginBottom = '100%';
      break;
  }
}
