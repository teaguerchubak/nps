export function parkInfoTemplate(info) {
    return `<a href="/" class="hero-img-title">${info.name}</a>
    <p class="hero-img-subtitle">
        <span>${info.designation}</span>
        <span>${info.states}</span>
    </p>`;
}

export function mediaCardTemplate(info) {
    return `<div class ="media-card">
    <a href="${info.link}">
    <img src="${info.image}" alt="${info.name}" class="media-card-img">
    <h3 class="media-card-title">${info.name}</h3>
    </a>
    <p>${info.description}</p>
    </div>`;
}

function getMailingAddress(addresses) {
    const mailing = addresses.find((address) => address.type === "Mailing");
    return mailing;
}

function getPhoneNumber(numbers) {
    const number = numbers.phoneNumbers.find((phoneNumber) => phoneNumber.type === "Voice");
    return number;
}

export function footerTemplate(data) {
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