/*
 * Author: Craig Reimer
 * First Published: 11/15/2023
 * Last Updated: 6/5/2024
 * Purpose: Main JS file for the website CraigReimer.com
 */

import { loadIntroSection } from "./intro.js";
import { loadAboutSection } from "./about.js";
import { loadExperienceSection, loadExperienceIcons } from "./experience.js";
import { loadProjectsSection } from "./projects.js";
import { loadConnectSection } from "./connect.js";

window.onload = function () {
    // When a link in the navbar is clicked, collapse the navbar
    $(".navbar-nav>li>a").on("click", function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Remove the landing section after page is loaded
    setTimeout(function () {
        $(".landing-section").remove();
    }, 2700);

    loadEventListeners();
    loadIntroSection();
};

function loadEventListeners() {
    document
        .getElementById("loadIntro")
        .addEventListener("click", loadIntroSection);
    document
        .getElementById("loadAboutMe")
        .addEventListener("click", loadAboutSection);
    document
        .getElementById("loadExperience")
        .addEventListener("click", loadExperienceSection);
    document
        .getElementById("loadProjects")
        .addEventListener("click", loadProjectsSection);
    document
        .getElementById("loadConnect")
        .addEventListener("click", loadConnectSection);
}
