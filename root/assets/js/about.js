import { shortBioParagraphs, longBioParagraphs } from "./resource.js";

function loadAboutSection() {
    const root = document.getElementById("root");
    root.innerHTML = "";

    // Create container div
    const container = document.createElement("div");
    container.className = "container";
    container.id = "aboutMe";

    // Insert blank row
    const blankRow = document.createElement("div");
    blankRow.className = "blankRow";
    container.appendChild(blankRow);

    // Create row div
    const row = document.createElement("div");
    row.className = "row py-4 px-2 mx-2 my-rounded align-items-center outline";

    // Create first column div
    const col1 = document.createElement("div");
    col1.className = "col-lg-4";

    // Create inner div for first column
    const innerDiv1 = document.createElement("div");

    // Create heading
    const heading = document.createElement("h2");
    heading.className = "mb-2 text-light";
    heading.textContent = "About Me";

    // Create buttons
    const shortBioButton = document.createElement("input");
    shortBioButton.type = "button";
    shortBioButton.className = "btn btn-outline-secondary mr-2";
    shortBioButton.value = "Short Bio";
    shortBioButton.id = "shortBio";

    const longBioButton = document.createElement("input");
    longBioButton.type = "button";
    longBioButton.className = "btn btn-outline-secondary";
    longBioButton.value = "Long Bio";
    longBioButton.id = "longBio";

    // Append heading and buttons to inner div
    innerDiv1.appendChild(heading);
    innerDiv1.appendChild(shortBioButton);
    innerDiv1.appendChild(longBioButton);

    // Append inner div to first column
    col1.appendChild(innerDiv1);

    // Create second column div
    const col2 = document.createElement("div");
    col2.className = "col-lg-8";

    // Create bio div
    const bioDiv = document.createElement("div");
    bioDiv.id = "bio";
    bioDiv.className = "text-light my-4";

    // Create paragraphs
    const p1 = document.createElement("p");
    p1.textContent = "Customize your experience!";

    const p2 = document.createElement("p");
    p2.textContent = "Choose an option to get started.";

    // Append paragraphs to bio div
    bioDiv.appendChild(p1);
    bioDiv.appendChild(p2);

    // Append bio div to second column
    col2.appendChild(bioDiv);

    // Append columns to row
    row.appendChild(col1);
    row.appendChild(col2);

    // Append row to container
    container.appendChild(row);

    // Append container to root element
    root.appendChild(container);

    // Add event listeners to buttons
    const bio = document.getElementById("bio");

    longBioButton.addEventListener("click", () => {
        bio.innerHTML = "";
        shortBioButton.classList.remove("active");

        let longBio = document.createElement("div");

        for (let i = 0; i < longBioParagraphs.length; i++) {
            let p = document.createElement("p");
            p.textContent = longBioParagraphs[i];
            longBio.appendChild(p);
        }

        longBioButton.classList.add("active");

        bio.appendChild(longBio);
    });

    shortBioButton.addEventListener("click", () => {
        bio.innerHTML = "";
        longBioButton.classList.remove("active");

        let shortBio = document.createElement("div");

        for (let i = 0; i < shortBioParagraphs.length; i++) {
            let p = document.createElement("p");
            p.textContent = shortBioParagraphs[i];
            shortBio.appendChild(p);
        }

        shortBioButton.classList.add("active");

        bio.appendChild(shortBio);
    });
}

export { loadAboutSection };
