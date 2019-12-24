import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllProjects = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/projects.json`)
    .then((response) => {
      const demProjects = response.data;
      const projects = [];
      Object.keys(demProjects).forEach((projectId) => {
        demProjects[projectId].id = projectId;
        projects.push(demProjects[projectId]);
      });
      resolve(projects);
    })
    .catch((err) => reject(err));
});

export default { getAllProjects };
