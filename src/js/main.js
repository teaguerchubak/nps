import { getParkData, parkInfoLinks } from "./parkService.mjs";
import { mediaCardTemplate } from "./templates.mjs";
import setHeaderFooter  from "./setHeaderFooter.mjs";

const parkData = getParkData();

function setParkIntro(data) {
    const intro = document.querySelector(".intro");
    intro.innerHTML = `<h2 class="intro-h2">${data.fullName}</h2>
    <p class="intro-paragraph">${data.description}</p>`;
}

function setParkInfo(data) {
    const info = document.querySelector(".info");
    const html = data.map(mediaCardTemplate);
    info.insertAdjacentHTML("afterbegin", html.join(""));
}

// Calling Functions //
setHeaderFooter(parkData);
setParkIntro(parkData);
setParkInfo(parkInfoLinks);
