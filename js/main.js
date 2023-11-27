let discordInfo;
let githubInfo;

/**
 * @name getDiscordInfo
 * @description Fetches a user's Discord information from the API
 * @param {string} userId The user's ID
 * @returns {Promise<void>}
 */

async function getDiscordInfo(userId) {
    const apiUrl = `https://api.lanyard.rest/v1/users/`;
    const response = await fetch(apiUrl + userId);
    const data = await response.json();
    return data.data;
}

/**
 * @name getGithubInfo
 * @description Fetches a user's GitHub information from the API
 * @param {string} username The user's username
 * @returns {Promise<void>}
 */

async function getGithubInfo(username) {

    const apiUrl = `https://api.github.com/users/`;
    const response = await fetch(apiUrl + username);
    return await response.json();

}

/**
 * @name setDiscordInfo
 * @description Sets the user's Discord information on the page
 * @param {object} data The user's Discord information
 * @param {HTMLElement} element The element to set the information on
 * @returns {void}
 */

function setDiscordInfo(data, element) {

    const normalData = {
        username: data.discord_user.username,
        avatar: data.discord_user.avatar,
        id: data.discord_user.id,
        status: data.discord_status
    };


    const h2 = element.querySelector("h2");
    h2.innerHTML = normalData.username;

    const a = element.querySelector("a");
    a.href = `https://discord.com/users/${normalData.id}`;

    element.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://cdn.discordapp.com/avatars/${normalData.id}/${normalData.avatar}.webp?size=512")`;
}

/**
 * @name setGithubInfo
 * @description Sets the user's GitHub information on the page
 * @param {object} data The user's GitHub information
 * @param {HTMLElement} element The element to set the information on
 * @returns {void}
 */

function setGithubInfo(data, element) {

    const normalData = {
        username: data.login,
        avatar: data.avatar_url
    }

    const h2 = element.querySelector("h2");
    h2.innerHTML = normalData.username;

    const a = element.querySelector("a");
    a.href = `https://github.com/${normalData.username}`;

    element.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("${normalData.avatar}")`;
}

getDiscordInfo("729567972070391848").then(data => {
    discordInfo = data;
    setDiscordInfo(discordInfo, document.getElementById("discord"));
});

getGithubInfo("BeauTheBeau").then(data => {
    githubInfo = data;
    setGithubInfo(githubInfo, document.getElementById("github"));
});


let contentArray = [ "profile", "twitter", "about", "github", "discord", "time", "location", "skills", "projects", "contact" ];


const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 100}ms`;
    card.style.gridArea = contentArray[index];
    card.classList.add(contentArray[index])
    card.id = contentArray[index];
    if (card.innerHTML === "") card.innerHTML = `<h2>` + contentArray[index][0].toUpperCase() + contentArray[index].slice(1) + `</h2>`;

    // When the user hovers over the card, move the background-image around to create a parallax effect
    card.addEventListener("mousemove", e => {
        const x = e.clientX / window.innerWidth,
            y = e.clientY / window.innerHeight;

        card.animate([
            { backgroundPositionX: `${x * 100}%`, backgroundPositionY: `${y * 100}%` }
        ], {
            duration: .5,
            fill: "forwards"
        });


    });

});




const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

const randomChar = () => chars[Math.floor(Math.random() * (chars.length - 1))],
    randomString = length => Array.from(Array(length)).map(randomChar).join("");

const letters = document.querySelectorAll(".letter");

const handleOnMove = e => {
    const tgtCard = e.currentTarget;
    const letter = tgtCard.querySelector(".card-letters");

    let rect = letter.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

    letter.style.setProperty("--x", `${x}px`);
    letter.style.setProperty("--y", `${y}px`);

    letter.innerText = randomString(1500);
}

// If a CARD has an element with the class "card-letters", add an event listener to it
document.querySelectorAll(".card").forEach(card => {
    const letters = card.querySelector(".card-letters");
    if (letters) card.addEventListener("mousemove", handleOnMove);
});