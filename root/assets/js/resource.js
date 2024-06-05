const shortBioParagraphs = [
    "I am passionate about learning new things, solving puzzles, and creating solutions that empower people. I am a quick learner, a critical thinker, and a team player.",
    "My first app was a simple punchclock that I still use to log my hours while working from home. Take a peek in the Projects section, or check it out more in-depth on my Github.",
    "This website is hosted on Amazon S3. It is a work in progress and always will be, just like me.",
];

const longBioParagraphs = [
    "I originally started learning HTML and wrote my first webpage while in highschool, but left it behind when I joined the Army. I held a latent interest in Computer Science for a number of years while pursuing other interests, and in 2022 made the decision to return to school and restart my coding and Software Development journey.",
    "I am proficient in C# and JavaScript. I am also familiar with HTML, CSS, and SQL. I have experience with Git, GitHub, and Visual Studio/ VS Code. I am currently learning React.",
    "This website is hosted on Amazon S3. It is a work in progress and always will be, just like me. As I gain new skills, I will work to employ, hone, or showcase them here.",
    "My first app was a simple punchclock that I still use to log my hours while working from home. The practical experience of programming this app helped solidify my understanding of OOP and N-tier architecture, and gave me the great satisfaction of solving my own needs through software. Take a peek in the Projects section, or check it out more in-depth on my Github.",
    "Thank you for taking the time to read through!",
];

// an array to load the experience icons
const experienceIcons = [
    {
        href: "https://aws.amazon.com/",
        imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        imgAlt: "Amazon Web Services Logo",
        text: "AWS",
        categories: ["all", "devOps"],
    },
    {
        href: "https://azure.microsoft.com/en-us/products/devops/",
        imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuredevops/azuredevops-original.svg",
        imgAlt: "Azure DevOps Logo",
        text: "Azure DevOps",
        categories: ["all", "devOps"],
    },
    {
        href: "https://bitbucket.org/",
        imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bitbucket/bitbucket-original-wordmark.svg",
        imgAlt: "Bitbucket Logo",
        text: "Bitbucket",
        categories: ["all", "devOps"],
    },
    {
        href: "https://getbootstrap.com/",
        imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
        imgAlt: "Bootstrap Logo",
        text: "Bootstrap",
        categories: ["all", "frontEnd", "web"],
    },
    {
        href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
        imgAlt: "CSS3 Logo",
        text: "CSS3",
        categories: ["all", "frontEnd", "web"],
    },
    {
        href: "https://learn.microsoft.com/en-us/cpp/cpp/?view=msvc-170",
        imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
        imgAlt: "C++ Logo",
        text: "C++",
        categories: ["all", "backEnd"],
    },
    {
        href: "https://learn.microsoft.com/en-us/dotnet/csharp/",
        imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
        imgAlt: "C# Logo",
        text: "C#",
        categories: ["all", "backEnd"],
    },
    {
        href: "https://git-scm.com/",
        imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
        imgAlt: "Git Logo",
        text: "Git",
        categories: ["all", "devOps"],
    },
    {
        href: "https://github.com/craigreimer",
        imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
        imgAlt: "GitHub Logo",
        text: "GitHub",
        categories: ["all", "devOps"],
    },
    {
        href: "https://docs.github.com/en/actions",
        imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",
        imgAlt: "Github Actions Logo",
        text: "Github Actions",
        categories: ["all", "devOps"],
    },
    {
        href: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
        imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
        imgAlt: "HTML5 Logo",
        text: "HTML5",
        categories: ["all", "frontEnd", "web"],
    },
    {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        imgAlt: "JavaScript Logo",
        text: "JavaScript",
        categories: ["all", "frontEnd", "web"],
    },
    {
        href: "https://www.mongodb.com/",
        imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
        imgAlt: "MongoDB Logo",
        text: "MongoDB",
        categories: ["all", "backEnd", "db"],
    },
    {
        href: "https://dev.mysql.com/",
        imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
        imgAlt: "MySQL Logo",
        text: "MySQL",
        categories: ["all", "backEnd", "db"],
    },
    {
        href: "https://dotnet.microsoft.com/en-us/",
        imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original-wordmark.svg",
        imgAlt: ".NET Logo",
        text: ".NET",
        categories: ["all", "backEnd"],
    },
    {
        href: "https://www.php.net/",
        imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
        imgAlt: "PHP Logo",
        text: "PHP",
        categories: ["all", "backEnd", "web"],
    },
    {
        href: "https://www.microsoft.com/en-us/sql-server/",
        imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg",
        imgAlt: "SQL Server Logo",
        text: "SQL Server",
        categories: ["all", "backEnd", "db"],
    },
    {
        href: "https://dotnet.microsoft.com/en-us/apps/xamarin",
        imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xamarin/xamarin-original.svg",
        imgAlt: "Xamarin Logo",
        text: "Xamarin",
        categories: ["all", "mobile"],
    },
    {
        href: "https://developer.apple.com/xcode/",
        imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xcode/xcode-original.svg",
        imgAlt: "Xcode Logo",
        text: "Xcode",
        categories: ["all", "mobile"],
    },
];

// an array to load the connect icons
const connectIcons = [
    {
        href: "https://github.com/craigreimer",
        imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
        imgAlt: "GitHub Logo",
        text: "GitHub",
    },
    {
        href: "https://www.linkedin.com/in/craig-m-reimer/",
        imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg",
        imgAlt: "LinkedIn Logo",
        text: "LinkedIn",
    },
];

export { shortBioParagraphs, longBioParagraphs, connectIcons, experienceIcons };
