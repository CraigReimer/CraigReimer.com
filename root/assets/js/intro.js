function loadIntroSection() {
    const root = document.getElementById("root");
    root.innerHTML = "";

    // Create container div
    const container = document.createElement("div");
    container.className = "container";
    container.id = "intro";

    // Create row div
    const row = document.createElement("div");
    row.className = "row p-4";

    // Create image column div
    const imgCol = document.createElement("div");
    imgCol.className = "col-lg-3 offset-lg-1 order-lg-last center-image";

    // Create image element
    const img = document.createElement("img");
    img.className = "intro-img img-fluid";
    img.src = "assets/img/craig.png";
    img.alt = "A profile photo of Craig Reimer";
    img.height = 350;
    img.width = 350;

    // Append image to image column
    imgCol.appendChild(img);

    // Create text content column div
    const textCol = document.createElement("div");
    textCol.className =
        "col-lg-6 offset-lg-1 my-auto p-4 my-rounded fill-dark text-light outline";

    // Create heading
    const heading = document.createElement("h2");
    heading.className = "text-light";
    heading.textContent = "Hello!";

    // Create paragraphs
    const p1 = document.createElement("p");
    p1.innerHTML =
        'My name is Craig Reimer, and I am currently pursuing an Associate of Applied Science in Software Development at  <a href="https://www.fvtc.edu/">Fox Valley Technical College</a>. I am on track to complete my degree in December 2024.';

    const p2 = document.createElement("p");
    p2.textContent =
        "I am currently looking for my first internship where I can sharpen my skills, deepen my understanding, and gain real-world experience working with a team.";

    // Append heading and paragraphs to text content column
    textCol.appendChild(heading);
    textCol.appendChild(p1);
    textCol.appendChild(p2);

    // Append columns to row
    row.appendChild(imgCol);
    row.appendChild(textCol);

    // Append row to container
    container.appendChild(row);

    // Append container to root element
    root.appendChild(container);
}

export { loadIntroSection };
