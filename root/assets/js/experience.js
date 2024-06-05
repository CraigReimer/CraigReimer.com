import { experienceIcons } from "./resource.js";

function loadExperienceSection() {
    const root = document.getElementById("root");
    root.innerHTML = "";

    // Create container div
    const container = document.createElement("div");
    container.className = "container";
    container.id = "experience";

    // Insert blank row
    const blankRow = document.createElement("div");
    blankRow.className = "blankRow";
    container.appendChild(blankRow);

    // Create row div
    const row = document.createElement("div");
    row.className = "row py-4 mx-2 outline content-row";

    // Create first column div
    const col1 = document.createElement("div");
    col1.className = "col-lg-4 mb-2";

    // Create inner div for first column
    const innerDiv1 = document.createElement("div");

    // Create heading
    const heading = document.createElement("h2");
    heading.className = "text-light p-2";
    heading.textContent = "Experience";

    // Append heading to inner div
    innerDiv1.appendChild(heading);

    // Create inner div for buttons
    const innerDiv2 = document.createElement("div");
    innerDiv2.className = "d-flex flex-wrap justify-content-around";

    // Create buttons
    const buttonData = [
        { id: "frontEnd", value: "Front End" },
        { id: "backEnd", value: "Back End" },
        { id: "mobile", value: "Mobile" },
        { id: "db", value: "Database" },
        { id: "devOps", value: "DevOps" },
        { id: "all", value: "All" },
    ];

    buttonData.forEach((data) => {
        const button = document.createElement("input");
        button.type = "button";
        button.className = "btn btn-outline-secondary my-2 expBtn";
        button.value = data.value;
        button.id = data.id;
        innerDiv2.appendChild(button);
    });

    // Append buttons to inner div
    innerDiv1.appendChild(innerDiv2);

    // Append inner div to first column
    col1.appendChild(innerDiv1);

    // Create second column div
    const col2 = document.createElement("div");
    col2.className = "col-lg-8";

    // Create techStack div
    const techStack = document.createElement("div");
    techStack.className = "row justify-content-around";
    techStack.id = "techStack";

    // Append techStack div to second column
    col2.appendChild(techStack);

    // Append columns to row
    row.appendChild(col1);
    row.appendChild(col2);

    // Append row to container
    container.appendChild(row);

    // Append container to root element
    root.appendChild(container);

    loadExperienceIcons("all");

    // Add event listeners to buttons
    buttonData.forEach((data) => {
        document.getElementById(data.id).addEventListener("click", () => {
            loadExperienceIcons(data.id);
        });
    });
}

function loadExperienceIcons(category) {
    const iconContainer = document.getElementById("techStack");

    iconContainer.innerHTML = "";

    // build the Experience Icons
    for (let i = 0; i < experienceIcons.length; i++) {
        if (experienceIcons[i].categories.includes(category)) {
            // build the icon element
            let icon = document.createElement("div");
            icon.classList.add("icon-card", "justify-content-center");

            // build the anchor element
            let a = document.createElement("a");
            a.href = experienceIcons[i].href;
            a.target = "_blank";
            icon.appendChild(a);

            // build the image element
            let img = document.createElement("img");
            img.src = experienceIcons[i].imgSrc;
            img.alt = experienceIcons[i].imgAlt;
            img.height = "50px";
            img.width = "50px";
            img.classList.add("img-fluid");
            a.appendChild(img);

            // build the caption element
            let caption = document.createElement("p");
            caption.textContent = experienceIcons[i].text;
            icon.appendChild(caption);

            // add the icon to the container
            iconContainer.appendChild(icon);
        }
    }
}

export { loadExperienceSection, loadExperienceIcons };
