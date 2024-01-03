/*
Author: Craig Reimer
Purpose: Main JS file for the website CraigReimer.com
Date: 12/21/2023
*/

// a function to load the biography
const shortBtn = document.getElementById("shortBio");
const longBtn = document.getElementById("longBio");
const bio = document.getElementById("bio");

const shortBioParagraphs = [
    "I am passionate about learning new things and creating apps that empower people.",
    "My first app was a simple punchclock that I still use to log my hours while working from home. You can check it out on my Github.",
    "This website is hosted on Amazon S3. It is a work in progress, and probably always will be, just like me.",
];

const longBioParagraphs = [
    "I am a second year undergraduate student at Fox Valley Technical College in Appleton, Wisconsin. I am pursuing an AAS in Software Development. I am passionate about learning new things and creating apps that empower people.",
    "I originally started learning HTML and wrote my first webpage while in highschool, but left it behind when I joined the Army. I held a latent interest in Computer Science for a number of years, and in 2022 made the decision to return to school and restart my coding journey.",
    "This website is hosted on Amazon S3. It is a work in progress, and probably always will be, just like me. As I gain new skills, I will employ and hone them here. Once I have a project worth sharing, I will add it here as well.",
    "My first app was a simple punchclock that I still use to log my hours while working from home. It is a C# WinForms App and uses the .NET Framework. You can check it out on my Github. The practical experience of programming this app helped solidify my understanding of OOP and n-tier architecture, and gave me the great satisfaction of solving my own needs through software.",
    "Thank you for taking the time to read through!",
];

longBtn.addEventListener("click", () => {
    bio.innerHTML = "";
    shortBtn.classList.remove("active");

    let longBio = document.createElement("div");

    for (let i = 0; i < longBioParagraphs.length; i++) {
        let p = document.createElement("p");
        p.textContent = longBioParagraphs[i];
        longBio.appendChild(p);
    }

    longBtn.classList.add("active");

    bio.appendChild(longBio);
});

shortBtn.addEventListener("click", () => {
    bio.innerHTML = "";
    longBtn.classList.remove("active");

    let shortBio = document.createElement("div");

    for (let i = 0; i < shortBioParagraphs.length; i++) {
        let p = document.createElement("p");
        p.textContent = shortBioParagraphs[i];
        shortBio.appendChild(p);
    }

    shortBtn.classList.add("active");

    bio.appendChild(shortBio);
});

// an array to load the exposure icons
const exposureIcons = [
    {
        href: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
        imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        imgAlt: "HTML5 Logo",
        text: "HTML5",
    },
    {
        href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        imgAlt: "CSS3 Logo",
        text: "CSS3",
    },
    {
        href: "https://www.php.net/",
        imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        imgAlt: "PHP Logo",
        text: "PHP",
    },
    {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        imgAlt: "JavaScript Logo",
        text: "JavaScript",
    },
    {
        href: "https://learn.microsoft.com/en-us/cpp/cpp/?view=msvc-170",
        imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        imgAlt: "C++ Logo",
        text: "C++",
    },
    {
        href: "https://learn.microsoft.com/en-us/dotnet/csharp/",
        imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
        imgAlt: "C# Logo",
        text: "C#",
    },
    {
        href: "https://learn.microsoft.com/en-us/sql/?view=sql-server-ver16",
        imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        imgAlt: "MySQL Logo",
        text: "MySQL",
    },
    {
        href: "https://git-scm.com/",
        imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        imgAlt: "Git Logo",
        text: "Git",
    },
    {
        href: "https://aws.amazon.com/",
        imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
        imgAlt: "Amazon Web Services Logo",
        text: "AWS",
    },
    {
        href: "https://getbootstrap.com/",
        imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        imgAlt: "Bootstrap Logo",
        text: "Bootstrap",
    },
];

// an array to load the connect icons
const connectIcons = [
    {
        href: "https://www.linkedin.com/in/craig-m-reimer/",
        imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
        imgAlt: "LinkedIn Logo",
        text: "LinkedIn",
    },
    {
        href: "https://github.com/craigreimer",
        imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        imgAlt: "GitHub Logo",
        text: "GitHub",
    },
];

// build the icon elements
window.onload = function () {
    const exposureContainer = document.getElementById("techStack");

    // build the Exposure Icons
    for (let i = 0; i < exposureIcons.length; i++) {
        let icon = document.createElement("div");
        icon.classList.add("custom-card", "col-4", "justify-content-center");

        let a = document.createElement("a");
        a.href = exposureIcons[i].href;
        icon.appendChild(a);

        let img = document.createElement("img");
        img.src = exposureIcons[i].imgSrc;
        img.alt = exposureIcons[i].imgAlt;
        img.height = "50px";
        img.width = "50px";
        a.appendChild(img);

        let caption = document.createElement("p");
        caption.textContent = exposureIcons[i].text;
        icon.appendChild(caption);

        exposureContainer.appendChild(icon);
    }

    const connectContainer = document.getElementById("socials");

    // build the Connect Icons
    for (let i = 0; i < connectIcons.length; i++) {
        let icon = document.createElement("div");
        icon.classList.add("custom-card", "col-4", "justify-content-center");

        let a = document.createElement("a");
        a.href = connectIcons[i].href;
        icon.appendChild(a);

        let img = document.createElement("img");
        img.src = connectIcons[i].imgSrc;
        img.alt = connectIcons[i].imgAlt;
        img.height = "50px";
        img.width = "50px";
        a.appendChild(img);

        let caption = document.createElement("p");
        caption.textContent = connectIcons[i].text;
        icon.appendChild(caption);

        connectContainer.appendChild(icon);
    }

    // When a link in the navbar is clicked, collapse the navbar
    $(".navbar-nav>li>a").on("click", function () {
        $(".navbar-collapse").collapse("hide");
    });
};
