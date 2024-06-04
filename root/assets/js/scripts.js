/*
 * Author: Craig Reimer
 * First Published: 11/15/2023
 * Last Updated: 6/4/2024
 * Purpose: Main JS file for the website CraigReimer.com
 */

import { shortBioParagraphs, longBioParagraphs } from "./resource.js";
import { connectIcons, experienceIcons } from "./resource.js";

window.onload = function () {
    // When a link in the navbar is clicked, collapse the navbar
    $(".navbar-nav>li>a").on("click", function () {
        $(".navbar-collapse").collapse("hide");
    });

    // build the icon elements
    loadExperienceIcons("all");

    loadConnectIcons();

    loadEventListeners();
};

function loadEventListeners() {
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

    // loading experience icons
    const frontEnd = document.getElementById("frontEnd");
    const backEnd = document.getElementById("backEnd");
    const mobile = document.getElementById("mobile");
    const db = document.getElementById("db");
    const devOps = document.getElementById("devOps");
    const all = document.getElementById("all");

    frontEnd.addEventListener("click", () => {
        loadExperienceIcons("frontEnd");
    });
    backEnd.addEventListener("click", () => {
        loadExperienceIcons("backEnd");
    });
    mobile.addEventListener("click", () => {
        loadExperienceIcons("mobile");
    });
    db.addEventListener("click", () => {
        loadExperienceIcons("db");
    });
    devOps.addEventListener("click", () => {
        loadExperienceIcons("devOps");
    });
    all.addEventListener("click", () => {
        loadExperienceIcons("all");
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
