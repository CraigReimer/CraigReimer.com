import { connectIcons } from "./resource.js";

function loadConnectSection() {
    const root = document.getElementById("root");
    root.innerHTML = "";

    // Create container div
    const container = document.createElement("div");
    container.className = "container";
    container.id = "connect";

    // Insert blank row
    const blankRow = document.createElement("div");
    blankRow.className = "blankRow";
    container.appendChild(blankRow);

    // Create row div
    const row = document.createElement("div");
    row.className = "row py-4 px-2 mx-2 outline";

    // Create first column for heading
    const colHeading = document.createElement("div");
    colHeading.className = "col-lg-4 y-centered";

    // Create heading
    const heading = document.createElement("h2");
    heading.className = "text-light";
    heading.textContent = "Connect With Me";

    // Append heading to first column
    colHeading.appendChild(heading);

    // Create second column for socials
    const colSocials = document.createElement("div");
    colSocials.className = "col-lg-8";

    // Create inner row for socials
    const rowSocials = document.createElement("div");
    rowSocials.className = "row justify-content-evenly";
    rowSocials.id = "socials";

    // Append inner row to second column
    colSocials.appendChild(rowSocials);

    // Append columns to row
    row.appendChild(colHeading);
    row.appendChild(colSocials);

    // Append row to container
    container.appendChild(row);

    // Append container to root element
    root.appendChild(container);

    loadConnectIcons();
}

function loadConnectIcons() {
    const connectContainer = document.getElementById("socials");

    // build the Connect Icons
    for (let i = 0; i < connectIcons.length; i++) {
        let icon = document.createElement("div");
        icon.classList.add("icon-card", "justify-content-center");

        let a = document.createElement("a");
        a.href = connectIcons[i].href;
        a.target = "_blank";
        icon.appendChild(a);

        let img = document.createElement("img");
        img.src = connectIcons[i].imgSrc;
        img.alt = connectIcons[i].imgAlt;
        img.height = "50px";
        img.width = "50px";
        img.classList.add("img-fluid");
        a.appendChild(img);

        let caption = document.createElement("p");
        caption.textContent = connectIcons[i].text;
        icon.appendChild(caption);

        connectContainer.appendChild(icon);
    }
}

export { loadConnectSection };
