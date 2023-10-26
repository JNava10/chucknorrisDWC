import {CONSTANTS} from "./constants.js";
import {Joke} from "./class.js";

const CATEGORY = localStorage.getItem(CONSTANTS.categoryStorageKey);
const JOKE_DIV = document.querySelector("#frase");

/**
 *
 * @param category {String}
 * @returns {Joke}
 */
async function fetchJoke(category = null) {
    let response;

    if (category) {
        response = await fetch(`${CONSTANTS.apiUrl}/random?category=${category}`);
    } else {
        console.log('a');
        response = await fetch(`${CONSTANTS.apiUrl}/random`);
    }

    let data = await response.json();

    console.log(data);

    return new Joke(
        data.created_at,
        data.url,
        data.id,
        data.updated_at,
        data.value,
        data.categories
    );
}

onload = async function () {
    let categoryHeader;
    let jokeSpan = document.createElement('span');
    let creationSub = document.createElement('sub');
    let category = localStorage.getItem(CONSTANTS.categoryStorageKey);
    let joke = await fetchJoke(category);

    if (category) {
        categoryHeader = document.createElement('h1');
        categoryHeader.textContent = CATEGORY.toString();
        JOKE_DIV.appendChild(categoryHeader);
    }

    jokeSpan.textContent = joke.value;
    creationSub.textContent = ` ${joke.createdAt}`;

    JOKE_DIV.appendChild(jokeSpan);
    JOKE_DIV.appendChild(creationSub);
};