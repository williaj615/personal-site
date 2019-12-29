
import 'bootstrap';
import '../../../styles/main.scss';
import utilities from '../../helpers/utilities';
import projectsData from '../../helpers/data/projectsData';

const buildProjectCards = () => {
  let domString = '';
  projectsData.getAllProjects()
    .then((projects) => {
      projects.forEach((project) => {
        domString += `
          <div class='card'>
              <h2>${project.title}</h2>
              <p><img src=${project.screenshot} alt='Image of ${project.title}'</p>
              <p>${project.description}</p>
              <p>${project.technologiesUsed}</p>
              <p><a href='${project.url}'>Project</a></p>
              <p><a href='${project.githubUrl}'>GitHub</a></p>
          </div>`;
      });
      utilities.printToDom(domString, 'projectsPage');
    });
};


export default { buildProjectCards };
