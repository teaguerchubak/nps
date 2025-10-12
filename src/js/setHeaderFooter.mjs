import { parkInfoTemplate, footerTemplate } from "./templates.mjs";


function setHeaderInfo(data) {
    // Update Title //
    document.title = data.fullName;

    // Update Hero Image //
    const heroImage = document.querySelector(".hero-img-container > img");
    heroImage.src = data.images[0].url;

    // Update Hero Image Text //
    const disclaimer = document.querySelector(".disclaimer > a");
    disclaimer.href = data.url;
    disclaimer.innerHTML = data.fullName;

    document.querySelector(".hero-img-text").innerHTML = parkInfoTemplate(data);
}

function setFooter(data) {
    const foot = document.querySelector("#park-footer");
    foot.insertAdjacentHTML("afterbegin", footerTemplate(data));
}

export default function setHeaderFooter(parkData) {
    setHeaderInfo(parkData);
    setFooter(parkData);
}