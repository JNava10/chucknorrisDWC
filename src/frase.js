import {CONSTANTS} from "./constants.js";
import {Joke} from "./class.js";

const CATEGORY = localStorage.getItem(CONSTANTS.categoryStorageKey);
const JOKE_DIV = document.querySelector("#frase");

/**
 *
 * @param category {String}
 * @returns {Joke}
 */
async function fetchJoke(category) {
    let response = await fetch(`${CONSTANTS.apiUrl}/random?category=${category}`);
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
    let categoryHeader = document.createElement('h1');
    let jokeSpan = document.createElement('span');
    let creationSub = document.createElement('sub');
    let category = localStorage.getItem(CONSTANTS.categoryStorageKey);
    let joke = await fetchJoke(category);

    categoryHeader.textContent = CATEGORY.toString();
    jokeSpan.textContent = joke.value;
    creationSub.textContent = ` ${joke.createdAt}`;

    JOKE_DIV.appendChild(categoryHeader);
    JOKE_DIV.appendChild(jokeSpan);
    JOKE_DIV.appendChild(creationSub);
};