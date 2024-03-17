/*
 * Author: Craig Reimer
 * First Published: 11/15/2023
 * Last Updated: 3/15/2024
 * Purpose: Main JS file for the website CraigReimer.com
 */

import { shortBioParagraphs, longBioParagraphs } from "./resource.js";
import { connectIcons, exposureIcons } from "./resource.js";

// a function to load the biography
const shortBtn = document.getElementById("shortBio");
const longBtn = document.getElementById("longBio");
const bio = document.getElementById("bio");

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

// build the icon elements
window.onload = function () {
    // When a link in the navbar is clicked, collapse the navbar
    $(".navbar-nav>li>a").on("click", function () {
        $(".navbar-collapse").collapse("hide");
    });

    const exposureContainer = document.getElementById("techStack");

    // build the Exposure Icons
    for (let i = 0; i < exposureIcons.length; i++) {
        let icon = document.createElement("div");
        icon.classList.add("icon-card", "justify-content-center");

        let a = document.createElement("a");
        a.href = exposureIcons[i].href;
        a.target = "_blank";
        icon.appendChild(a);

        let img = document.createElement("img");
        img.src = exposureIcons[i].imgSrc;
        img.alt = exposureIcons[i].imgAlt;
        img.height = "50px";
        img.width = "50px";
        img.classList.add("img-fluid");
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
};
