import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

// Update Title //
document.title = parkData.fullName;

// Update Hero Image //
const heroImage = document.querySelector(".hero-img-container > img");
heroImage.src = parkData.images[0].url;

// Update Hero Image Text //
const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = parkData.url;
disclaimer.innerHTML = parkData.fullName;

function parkInfoTemplate(info) {
    return `<a href="/" class="hero-img-title">${info.name}</a>
    <p class="hero-img-subtitle">
        <span>${info.designation}</span>
        <span>${info.states}</span>
    </p>`;
}

document.querySelector(".hero-img-text").innerHTML = parkInfoTemplate(parkData);

