import '../styles/main.scss';
import 'bootstrap';
import utilities from './helpers/utilities';
import projectsData from './helpers/data/projectsData';

// const buttonClick = (e) => {
//   e.preventDefault();
//   const page = e.target.id;
//   if (page === 'navToBio') {
//     $('#bioPage').style.display = '';
//     $('#technologiesPage').style.display = 'none';
//     $('#projectsPage').style.display = 'none';
//   } else if (page === 'navToTechnologies') {
//     $('#bioPage').style.display = 'none';
//     $('#technologiesPage').style.display = '';
//     $('#projectsPage').style.display = 'none';
//   } else if (page === 'navToProjects') {
//     $('#bioPage').style.display = 'none';
//     $('#technologiesPage').style.display = 'none';
//     $('#projectsPage').style.display = '';
//   }
// };

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


// const addClickEvents = () => {
//   $('#navToBio').onClick(buttonClick);
//   $('#navToTechnologies').onClick(buttonClick);
//   $('#navToProjects').onClick(buttonClick);
// };
// //  createProjectCards(projects);

export default { buildProjectCards };
