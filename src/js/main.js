import { getParkData, getInfoLinks } from "./parkService.mjs";
import { mediaCardTemplate } from "./templates.mjs";
import setHeaderFooter  from "./setHeaderFooter.mjs";

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

async function init() {
    const parkData = await getParkData();
    const links = getInfoLinks(parkData.images);

    setHeaderFooter(parkData);
    setParkIntro(parkData);
    setParkInfo(links);
}

init();