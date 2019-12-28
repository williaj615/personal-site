import projects from './projects';
import '../styles/main.scss';
import navbar from './MyNavBar/myNavBar';

const init = () => {
  // projects.addClickEvents();
  navbar.printNavBar();
  projects.buildProjectCards();
};

init();
