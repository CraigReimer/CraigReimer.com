function loadProjectsSection() {
    const root = document.getElementById("root");
    root.innerHTML = "";

    // Create container div
    const container = document.createElement("div");
    container.className = "container";
    container.id = "projects";

    // Insert blank row
    const blankRow = document.createElement("div");
    blankRow.className = "blankRow";
    container.appendChild(blankRow);

    // Create row div
    const row = document.createElement("div");
    row.className = "row py-4 px-2 mx-2 outline";

    // Create first column for heading
    const colHeading = document.createElement("div");
    colHeading.className = "col-lg-12";

    // Create heading
    const heading = document.createElement("h2");
    heading.className = "text-light";
    heading.textContent = "Projects";

    // Append heading to first column
    colHeading.appendChild(heading);

    // Create second column for project description
    const colProjectDescription = document.createElement("div");
    colProjectDescription.className = "col-lg-4 y-centered mb-2 text-light";

    // Create inner div for project details
    const projectDetails = document.createElement("div");

    // Create project title
    const projectTitle = document.createElement("h3");
    projectTitle.className = "py-2";
    projectTitle.textContent = "Time Clock";

    // Create project description paragraph
    const projectDescription = document.createElement("p");
    projectDescription.className = "pl-4";
    projectDescription.textContent =
        "Time Clock is a simple application written in C#. The user is able to create, modify, and delete Time Entries that exist within an Entry Log. An Entry Log may be created, updated, and saved within the app. The Entry Log is serialized into JSON for persistence.";

    // Create project link paragraph
    const projectLink = document.createElement("p");
    projectLink.className = "pl-4";

    // Create project link
    const projectLinkAnchor = document.createElement("a");
    projectLinkAnchor.href = "https://github.com/CraigReimer/TimeClock";
    projectLinkAnchor.textContent = "See it on Github";

    // Append link to link paragraph
    projectLink.appendChild(projectLinkAnchor);

    // Append title, description, and link to project details div
    projectDetails.appendChild(projectTitle);
    projectDetails.appendChild(projectDescription);
    projectDetails.appendChild(projectLink);

    // Append project details to project description column
    colProjectDescription.appendChild(projectDetails);

    // Create third column for project image
    const colProjectImage = document.createElement("div");
    colProjectImage.className = "col-lg-8";

    // Create figure element
    const figure = document.createElement("figure");

    // Create project image
    const projectImage = document.createElement("img");
    projectImage.className = "img-fluid center-image project-img";
    projectImage.src = "assets/img/clock.png";
    projectImage.alt = "A screenshot of the Time Clock application";

    // Create image caption
    const imageCaption = document.createElement("figcaption");
    imageCaption.className = "text-light text-center";
    imageCaption.textContent = "A screenshot of the Time Clock application";

    // Append image and caption to figure
    figure.appendChild(projectImage);
    figure.appendChild(imageCaption);

    // Append figure to project image column
    colProjectImage.appendChild(figure);

    // Append columns to row
    row.appendChild(colHeading);
    row.appendChild(colProjectDescription);
    row.appendChild(colProjectImage);

    // Append row to container
    container.appendChild(row);

    // Append container to root element
    root.appendChild(container);
}

export { loadProjectsSection };
