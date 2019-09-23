console.log('Personal Site Yo');

const projects = [
    {title: "First Project", 
    screenshot: "https://www.elegantthemes.com/blog/wp-content/uploads/2016/06/metricool.jpg", 
    description: "This is a project using learned technologies to showcase mastery, constructed using the normal methods.", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/williaj615", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/williaj615"},

    {title: "Second Project", 
    screenshot: "https://www.elegantthemes.com/blog/wp-content/uploads/2016/06/metricool.jpg", 
    description: "This is a project using learned technologies to showcase mastery, constructed using the new methods.", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/williaj615", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/williaj615"},

    {title: "Third Project", 
    screenshot: "https://www.elegantthemes.com/blog/wp-content/uploads/2016/06/metricool.jpg", 
    description: "This is a project using learned technologies to showcase mastery, constructed using the newer methods.", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: false,
    url: "https://github.com/williaj615", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/williaj615"},

    {title: "Fourth Project", 
    screenshot: "https://www.elegantthemes.com/blog/wp-content/uploads/2016/06/metricool.jpg", 
    description: "This is a project using learned technologies to showcase mastery, constructed using the newest methods.", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: false,
    url: "https://github.com/williaj615", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/williaj615"},

    {title: "Fifth Project", 
    screenshot: "https://www.elegantthemes.com/blog/wp-content/uploads/2016/06/metricool.jpg", 
    description: "This is a project using learned technologies to showcase mastery, constructed using some crazy methods.", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: false,
    url: "https://github.com/williaj615", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/williaj615"}
]

const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML = toPrint
}

const createProjectCards = (projectsArr) => {
        let domString = ''
    for (let i = 0; i < projectsArr.length; i++){
        const project = projectsArr[i];
        if (project.available === true) {
         domString += `
        <div class="card">
            <h2>${project.title}</h2>
            <p><img src=${project.screenshot} alt='Image of ${project.title}'</p>
            <p>${project.description}</p>
            <p>${project.technologiesUsed}</p>
            <p><a href="${project.url}">Project</a></p>
            <p><a href="${project.githubUrl}">GitHub</a></p>
        </div>`
    }
    printToDom(domString, 'projectsPage')
}
}
//createProjectCards(projects);


const buttonClick = (e) => {
    e.preventDefault();
    const page = e.target.id
    if (page === 'navToBio') { 
    document.getElementById('bioPage').style.display = "";
    document.getElementById('technologiesPage').style.display = "none";
    document.getElementById('projectsPage').style.display = "none";
} else if (page === 'navToTechnologies') { 
    document.getElementById('bioPage').style.display = "none";
    document.getElementById('technologiesPage').style.display = "";
    document.getElementById('projectsPage').style.display = "none";
} else if (page === 'navToProjects') {
    document.getElementById('bioPage').style.display = "none";
    document.getElementById('technologiesPage').style.display = "none";
    document.getElementById('projectsPage').style.display = "";
    createProjectCards(projects);
}

}

document.getElementById('navToBio').addEventListener('click', buttonClick);
document.getElementById('navToTechnologies').addEventListener('click', buttonClick);
document.getElementById('navToProjects').addEventListener('click', buttonClick);
