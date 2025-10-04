import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

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

    document.querySelector(".hero-img-text").innerHTML = parkInfoTemplate(parkData);
}

function getMailingAddress(addresses) {
    const mailing = addresses.find((address) => address.type === "Mailing");
    return mailing;
}

function getPhoneNumber(numbers) {
    const number = numbers.phoneNumbers.find((phoneNumber) => phoneNumber.type === "Voice");
    return number;
}

function setFooterInfo(data) {
    const mailing = getMailingAddress(data.addresses);
    const number = getPhoneNumber(data.contacts);

    return `
    <h3>Contact Info</h3>
    <h4>Mailing Address:</h4>
    <p>${mailing.line1}</p>
    <p>${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}</p>
    <h4>Phone:</h4>
    <p>${number.phoneNumber}`;
}

function setFooter(data) {
    const foot = document.querySelector("#park-footer");
    foot.insertAdjacentHTML("afterbegin", setFooterInfo(data));
}

function setParkInfo(data) {
    const info = document.querySelector(".info");
    const html = data.map(mediaCardTemplate);
    info.insertAdjacentHTML("afterbegin", html.join(""));
}

function parkInfoTemplate(info) {
    return `<a href="/" class="hero-img-title">${info.name}</a>
    <p class="hero-img-subtitle">
        <span>${info.designation}</span>
        <span>${info.states}</span>
    </p>`;
}

function introTemplate(info) {
    return `<h2 class="intro-h2">${info.fullName}</h2>
    <p class="intro-paragraph">${info.description}</p>`;
}

function setIntro(data) {
    document.querySelector(".intro").innerHTML = introTemplate(parkData);
}

function mediaCardTemplate(info) {
    return `<div class ="media-card">
    <a href="${info.link}">
    <img src="${info.image}" alt="${info.name}" class="media-card-img">
    <h3 class="media-card-title">${info.name}</h3>
    </a>
    <p>${info.description}</p>
    </div>`;
}

// Arrays //
const parkInfoLinks = [
    {
        name: "Current Conditions &#x203A;",
        link: "conditions.html",
        image: parkData.images[2].url,
        description: "See what conditions to expect in the park before leaving on your trip!"
    },
    {
        name: "Fees and Passes &#x203A;",
        link: "fees.html",
        image: parkData.images[3].url,
        description: "Learn about the fees and passes that are available."
    },
    {
        name: "Visitor Centers &#x203A;",
        link: "visitor_centers.html",
        image: parkData.images[9].url,
        description: "Learn about the visitor centers in the park."
    }
];

// Calling Functions //
setHeaderInfo(parkData);
setIntro(parkData);
setParkInfo(parkInfoLinks);
setFooter(parkData);